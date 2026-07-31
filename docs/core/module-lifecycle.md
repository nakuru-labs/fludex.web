---
title: Module Lifecycle
---

# Module Lifecycle

If you're building a [custom module](./custom-modules), this page covers the exact sequence your `FludexModule<TModel, TPagePresenter, TShortcutPresenter>` subclass moves through at runtime, and which protected hook to override at each stage.

## State Machine

The full sequence: `Prepare()` → `Initialize()` → `Activate()` → `Focus()` ⇄ `Unfocus()` (repeatedly, on tab switches) → `Deactivate()`.

| Method | Hook | When it happens |
|---|---|---|
| `Prepare()` | *(override the method itself)* | Right after module discovery, before any view exists |
| `Initialize()` | `OnInitialize()` | During deferred registration, once per module |
| `Activate()` | `OnActivate()` — sets `IsActive = true` | Immediately after `Initialize()`, same pass |
| `Focus()` | `OnGainFocus()` — sets `IsFocused = true` | Initial module once registration finishes; any module when its tab is selected |
| `Unfocus()` | `OnLoseFocus()` — sets `IsFocused = false` | When a different module's tab is selected |
| `Deactivate()` | `OnDeactivate()` — resets both flags to `false` | `FludeX.Instance.Dispose()` |
| `Dispose()` *(unused by Core)* | `OnDispose()` | Not called automatically anywhere in Core's own teardown — call it yourself if you need it, or treat `OnDeactivate()` as your practical teardown hook |

A module stays **Activated** for its entire lifetime once registered — `Deactivate()` only runs at `FludeX.Instance.Dispose()`. Switching tabs only ever toggles **Focus**, never **Active** state.

## Timing, in Context

Your module isn't constructed or driven directly — `FludeX.Instance.Initialize()` owns the whole sequence:

1. **Construction.** When `Initialize()` runs, `FludexModulesRegistry` loads every enabled `FludexModuleDescriptor` and constructs one instance of your module type through the DI container — this is when your constructor runs.
2. **`Prepare()`, synchronously, for every module.** Right after all modules are constructed, FludeX loops over the whole registry and calls `Prepare()` on each one, in descriptor `SortOrder`. This is where the base `FludexModule<TModel,_,_>` creates your `TModel` via DI — override `Prepare()` if you need something before or instead of that.
3. **`Initialize()` / `Activate()`, one module per frame.** Once the panel itself is set up, `FludexModuleLoader` registers modules with the panel UI — but only one per frame, to avoid a hitch when a project has many modules. For each module, in order: `Initialize()` runs (builds your shortcut presenter, then fires `OnInitialize()`), immediately followed by `Activate()` (`OnActivate()`, `IsActive = true`).
4. **`Focus()` for the initial module.** Once every module has been registered this way, the initial module (from `FludexConfig.InitialModuleIndex`, or the highest-`Priority` descriptor as a fallback) is focused — `OnGainFocus()` fires, `IsFocused = true`.
5. **`Focus()` / `Unfocus()` on tab switches.** Every time the player taps a different module tab, the previously focused module gets `Unfocus()` (`OnLoseFocus()`) and the newly selected one gets `Focus()` (`OnGainFocus()`). This can happen any number of times over the life of the panel.
6. **`Deactivate()` at shutdown.** When `FludeX.Instance.Dispose()` runs, every registered module gets `Deactivate()` — `OnDeactivate()` fires, both `IsActive` and `IsFocused` reset to `false`. This is the only teardown call Core makes on your module.

## Where to Hook In

| You want to... | Override | Fires |
|---|---|---|
| Run setup once, when your module is first registered | `OnInitialize()` | Once, during deferred registration |
| React to your module becoming active (but not necessarily visible) | `OnActivate()` | Once, right after `OnInitialize()` |
| React to your module's tab becoming the visible one | `OnGainFocus()` | Every time the module is selected |
| Pause work while your module's tab isn't visible | `OnLoseFocus()` | Every time a different module is selected |
| Clean up before shutdown | `OnDeactivate()` | Once, at `FludeX.Instance.Dispose()` |

`OnDeactivate()` is your practical teardown hook — `OnDispose()` exists on the base class, but nothing in Core ever calls `Dispose()` on a module, so don't rely on it unless you're triggering it yourself.
