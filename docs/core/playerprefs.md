---
title: PlayerPrefs Access
---

# PlayerPrefs Access

`IFludexPlayerPrefsService` is a DI-injectable service for reading, writing, and clearing the **host game's own** `UnityEngine.PlayerPrefs` entries — the arbitrary keys your game already stores, not FludeX's own configuration.

It's the foundation the Overview module's PlayerPrefs tooling is built on, and it's available to any custom module or service that needs to inspect or edit the game's PlayerPrefs at runtime.

This is not [Persistent Storage](./persistent-storage). That is for a module remembering **its own** data in an isolated JSON file, deliberately kept away from `PlayerPrefs`. This service is the opposite: it reads and writes the game's real `PlayerPrefs` directly, sharing the same keys and values the game itself uses.

## Injecting it

Declare it as a constructor parameter — FludeX resolves it automatically, like any other [service](./custom-modules):

```csharp
public class MyModule : FludexModule<MyModuleModel, MyPagePresenter, MyShortcutPresenter>
{
    private readonly IFludexPlayerPrefsService _playerPrefs;

    public MyModule(IFludexResolvingFactory resolvingFactory, FludexModuleDescriptor descriptor,
        IFludexPlayerPrefsService playerPrefs) : base(resolvingFactory, descriptor)
    {
        _playerPrefs = playerPrefs;
    }
}
```

## API

| Member | Description |
|---|---|
| `bool HasKey(string key)` | Whether the key exists in `PlayerPrefs`. |
| `bool GetBool(string key, bool defaultValue = false)` | — |
| `void SetBool(string key, bool value)` | `PlayerPrefs` has no native bool type; the value is stored as an int (`0`/`1`). If your game already stores this key with a different convention, use `GetInt`/`SetInt` or `GetString`/`SetString` instead. |
| `string GetString(string key, string defaultValue = "")` | Decrypted first if an [encryptor](#encryption) is configured. |
| `void SetString(string key, string value)` | Encrypted first if an [encryptor](#encryption) is configured. |
| `int GetInt(string key, int defaultValue = 0)` | — |
| `void SetInt(string key, int value)` | — |
| `float GetFloat(string key, float defaultValue = 0f)` | — |
| `void SetFloat(string key, float value)` | — |
| `void DeleteKey(string key)` | Removes a single key. |
| `void DeleteAll()` | Wipes **every** `PlayerPrefs` entry for the game — not just ones FludeX created. |
| `void Save()` | Flushes pending writes to disk (`PlayerPrefs.Save()`). |
| `bool HasEncryptor` | Whether an [encryptor](#encryption) was supplied at startup. |

Reads and writes pass straight through `UnityEngine.PlayerPrefs`, so everything is immediately visible to the game's own PlayerPrefs code and vice versa.

## The `Changed` event

```csharp
event Action<string> Changed;
```

Raised **after** a write completes:

- `Set*` and `DeleteKey` raise it with the affected key.
- `DeleteAll` raises it with `null` — no single key applies, so treat it as "any or all keys may have changed".
- `Save()` does **not** raise it (it writes nothing new, only flushes).

It fires on every `Set*` call, whether or not the value actually differs from what was already stored.

Use it to keep a live view of PlayerPrefs values current without re-reading them on a timer:

```csharp
_playerPrefs.Changed += key =>
{
    if (key == null || key == _watchedKey)
        RefreshDisplayedValue();
};
```

**Scope limit.** The event only fires for changes made through *this service*. `UnityEngine.PlayerPrefs` has no change notification of its own, so if the host game calls `PlayerPrefs.SetInt(...)` directly elsewhere in its code, this service can't see it and won't raise `Changed`.

## Encryption

String values can be transparently encrypted at rest by supplying an `IFludexPlayerPrefsEncryptor`:

```csharp
public interface IFludexPlayerPrefsEncryptor
{
    string Encrypt(string plaintext);
    string Decrypt(string ciphertext);
}
```

Register it via `FludexConfig` at startup:

```csharp
FludeX.Instance.Initialize(new FludexConfig
{
    PlayerPrefsEncryptor = new MyAesPlayerPrefsEncryptor(),
});
```

When set:

- `SetString` stores `Encrypt(value)`; `GetString` returns `Decrypt(storedValue)`.
- **Only string values are encrypted.** `Bool`/`Int`/`Float` always go through `PlayerPrefs` natively — ciphertext can't be stored as a native int or float.
- `HasEncryptor` reports `true`.

No encryptor implementation ships with FludeX — it's purely a consumer-provided extension point. With none configured, string values are stored and read as plain text.
