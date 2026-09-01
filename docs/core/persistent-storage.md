---
title: Persistent Storage
---

# Persistent Storage

If your [custom module](./custom-modules) needs to remember its own data across sessions — settings, cached state, anything — FludeX exposes two DI-injectable file storage services for it, independent of `PlayerPrefs`. This is the same file-based storage mechanism Core and Console use internally for their own settings.

## Storage Services

| Service | Backed by | Use for |
|---|---|---|
| `IFludexPersistentFileStorage` | `Application.persistentDataPath` | Real settings/data that should survive app updates and reinstalls (platform-dependent) |
| `IFludexCacheFileStorage` | `Application.temporaryCachePath` | Non-critical, regenerable data only — the OS can purge this under storage pressure |

Both implement the same base contract:

```csharp
public interface IFludexFileStorage
{
    T Load<T>(string relativePath, T defaultValue = default);
    void Save<T>(string relativePath, T data);
    bool Exists(string relativePath);
    void Delete(string relativePath);
}
```

Inject either one into your module's constructor the same way you'd inject any other service through `IFludexResolvingFactory` — see the constructor pattern in [Custom Modules](./custom-modules).

## Data Requirements

Everything is stored as JSON via Unity's `JsonUtility`, so `T` needs to follow its rules: a plain `[Serializable]` class with **public fields** — not auto-properties (`{ get; set; }`). `JsonUtility` won't serialize properties without extra attribute workarounds that produce ugly, non-human-readable JSON keys, so public fields are simplest and cleanest — it's what FludeX's own DTOs use internally.

```csharp
[Serializable]
public class MyModuleSettings
{
    public bool ShowAdvancedOptions;
    public int RefreshIntervalSeconds = 5;
}
```

## Reliability

- **Namespacing** — every `relativePath` you pass is automatically namespaced under a `FludeX/` root internally. You don't need to do this yourself; it just means your module's files can't collide with the host game's own save files elsewhere in `persistentDataPath`.
- **Atomic writes** — `Save` writes to a temp file and renames it into place, so a crash or app kill mid-write can't leave you with a half-written file.
- **Corrupt-file recovery** — if `Load` hits a file it can't parse, it quarantines the bad file, logs a warning, and falls back to your `defaultValue` rather than throwing. Both guarantees are built in — nothing you need to implement yourself.

## Pattern 1: Direct Load / Save

The simplest option, fine for data that changes infrequently: load once, keep your own in-memory copy, save it back whenever it changes.

```csharp
public class MyModule : FludexModule<MyModuleModel, MyPagePresenter, MyShortcutPresenter>
{
    private const string SettingsPath = "myapp-module/settings.json";

    private readonly IFludexPersistentFileStorage _storage;
    private MyModuleSettings _settings;

    public MyModule(IFludexResolvingFactory resolvingFactory, FludexModuleDescriptor descriptor,
        IFludexPersistentFileStorage storage) : base(resolvingFactory, descriptor)
    {
        _storage = storage;
        _settings = _storage.Load(SettingsPath, new MyModuleSettings());
    }

    public bool ShowAdvancedOptions => _settings.ShowAdvancedOptions;

    public void SetShowAdvancedOptions(bool value)
    {
        _settings.ShowAdvancedOptions = value;
        _storage.Save(SettingsPath, _settings);
    }
}
```

## Pattern 2: `FludexModuleSettingsStore<T>`

For the more common "load once, hold current state, save on every change" shape — the same wrapper Core and Console use internally — construct a `FludexModuleSettingsStore<T>` around your injected storage:

```csharp
public class MyModule : FludexModule<MyModuleModel, MyPagePresenter, MyShortcutPresenter>
{
    private const string SettingsPath = "myapp-module/settings.json";

    private readonly FludexModuleSettingsStore<MyModuleSettings> _settingsStore;

    public MyModule(IFludexResolvingFactory resolvingFactory, FludexModuleDescriptor descriptor,
        IFludexPersistentFileStorage storage) : base(resolvingFactory, descriptor)
    {
        _settingsStore = new FludexModuleSettingsStore<MyModuleSettings>(storage, SettingsPath, new MyModuleSettings());
    }

    public bool ShowAdvancedOptions => _settingsStore.Current.ShowAdvancedOptions;

    public void SetShowAdvancedOptions(bool value)
    {
        _settingsStore.Current.ShowAdvancedOptions = value;
        _settingsStore.Save();
    }

    public void ResetToDefaults()
    {
        // BeginBatch coalesces every change made before disposal into a single disk write,
        // instead of one write per field.
        using (_settingsStore.BeginBatch())
        {
            _settingsStore.Current.ShowAdvancedOptions = false;
            _settingsStore.Current.RefreshIntervalSeconds = 5;
            _settingsStore.Save();
        }
    }
}
```

`FludexModuleSettingsStore<T>` isn't auto-resolved through DI for your own `T` — only Core's and Console's own settings types are pre-registered — so you construct your own instance, wrapping whichever `IFludexFileStorage` implementation was injected.

| Member | Description |
|---|---|
| `Current` | The current in-memory value of `T` |
| `Save()` | Writes `Current` to disk |
| `BeginBatch()` | Returns an `IDisposable` — coalesces every change made before it's disposed into a single write, instead of one write per `Save()` call |

## The Polished Version: Subclassing

Constructing `FludexModuleSettingsStore<T>` inline, as above, means every caller needs to know the relative path. Subclassing it once encapsulates that instead — the same idea Core and Console each use internally for their own settings — so the path lives in exactly one place and nothing outside that class has to know or repeat it.

```csharp
public sealed class MyModuleSettingsStore : FludexModuleSettingsStore<MyModuleSettings>
{
    private const string FilePath = "myapp-module/settings.json";

    public MyModuleSettingsStore(IFludexFileStorage storage, MyModuleSettings defaultValue)
        : base(storage, FilePath, defaultValue)
    {
    }
}
```

```csharp
public class MyModule : FludexModule<MyModuleModel, MyPagePresenter, MyShortcutPresenter>
{
    private readonly MyModuleSettingsStore _settingsStore;

    public MyModule(IFludexResolvingFactory resolvingFactory, FludexModuleDescriptor descriptor,
        IFludexPersistentFileStorage storage) : base(resolvingFactory, descriptor)
    {
        _settingsStore = new MyModuleSettingsStore(storage, new MyModuleSettings());
    }

    public bool ShowAdvancedOptions => _settingsStore.Current.ShowAdvancedOptions;

    public void SetShowAdvancedOptions(bool value)
    {
        _settingsStore.Current.ShowAdvancedOptions = value;
        _settingsStore.Save();
    }
}
```

`MyModule` — and anywhere else that ends up holding a `MyModuleSettingsStore` — never needs to know the relative path; it's baked into the store's own definition. A plain public constructor like this is all most modules need — structure it however suits your own module if you have other setup to run.

## Choosing Between Them

Reach for direct `Load`/`Save` (Pattern 1) for something simple that rarely changes. Reach for `FludexModuleSettingsStore<T>` constructed inline (Pattern 2) once you're tracking live state that the rest of your module reads via `Current` and saves on every change. Subclassing it (above) is the more polished version of Pattern 2 — worth it as soon as more than one class in your module needs to touch the store, so the relative path stays defined in exactly one place.
