---
title: Quick Start
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
