---
title: Quick Start
description: Get FludeX running in minutes — add the prefab, configure your first module, and open the in-game debug panel in your Unity project.
head:
  - - meta
    - name: keywords
      content: FludeX quick start, Unity debug panel setup, Unity in-game debug tutorial, runtime debug panel Unity, Unity UIToolkit debug getting started
---

# Quick Start

Call `Initialize()` once before using any other FludeX API — typically in the first `Awake` in your scene:

```csharp
private void Awake()
{
    FludeX.Instance.Initialize();
}
```

That's it. The default setup activates both the tap trigger (triple-tap, bottom-center) and the keyboard trigger (`` ` `` / `~` key). Open the panel on device or in the editor to verify everything is working.

## Panel Control

| Method / Property | Description |
|---|---|
| `Initialize()` | Set up FludeX with the default composite trigger (tap + keyboard) — call once before anything else |
| `Initialize(trigger)` | Set up FludeX with a custom trigger — pass any `IFludexTrigger` implementation |
| `Initialize(moduleConfigs)` | Set up FludeX and pass one or more `IModuleConfiguration<TModule>` objects to pre-configure individual modules |
| `Prepare()` | Run the prepare lifecycle phase — call after `Initialize()` and before the first frame |
| `Show()` | Show the debug panel |
| `Hide()` | Hide the debug panel |
| `Toggle()` | Show if hidden, hide if shown |
| `IsInitialized` | True after `Initialize()` completes |
| `IsVisible` | True while the panel is on screen |
| `Dispose()` | Release all resources |

## Next steps

- [Triggers](/core/triggers) — customize or replace the default open gesture
- [WidgetsBook](/core/widgets-book) — build a custom debug panel with widgets
- [Overview Module](/modules/overview/) — explore the pre-built diagnostic dashboard
- [Playground Module](/modules/playground/) — populate a blank panel at runtime
- [Console Module](/modules/console/) — view Unity logs on device in real time
