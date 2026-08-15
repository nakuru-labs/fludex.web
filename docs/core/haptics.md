---
title: Haptics
---

# Haptics

FludeX has a built-in haptic feedback system wired into the panel's own chrome and into WidgetsBook's widgets. It's mobile-only, on by default, and configurable per-domain — both at code time and at runtime.

## Configuring

Set defaults via `FludexConfig.Haptics` when calling `Initialize()`:

```csharp
FludeX.Instance.Initialize(new FludexConfig
{
    Haptics = new FludexHapticsConfiguration
    {
        Enabled = true,  // master switch — false disables all haptics regardless of the flags below
        Core = true,     // panel/shell chrome
        Widgets = true,  // widget-level interactions
    }
});
```

These are only the seed values for a player's first run. From then on, the same settings are player-adjustable at runtime from the **Haptics** section of [Core Settings](./core-settings), backed by `IFludexRuntimeConfiguration.Haptics` — changes persist across restarts independently of whatever `FludexConfig` your code passes in.

## Domains

| Domain | Covers |
|---|---|
| `HapticsDomain.Core` | Panel/shell-level chrome — the panel-open trigger gesture, drawer, hamburger menu |
| `HapticsDomain.Widgets` | Individual widget-level interactions within the panel content — WidgetsBook page/tab selection, button results |

Modules that manage their own local enable/disable concept (for example Console's alerting and log-copy haptics) call `IFludexHapticsService.Trigger(type)` directly instead of specifying a domain — they've already done their own gating, so there's no Core domain left to check.

## Platform Availability

Haptic feedback only fires on mobile (`Application.isMobilePlatform`) — `Trigger()` is a no-op everywhere else, including the Editor and desktop builds. There's no separate check to make yourself before calling `Trigger()`; it's always safe to call unconditionally regardless of platform.

For building your own settings UI, `IFludexHapticsService.IsHapticsAvailable` reports whether haptics could do anything at all on the current platform:

```csharp
public bool IsHapticsAvailable => Application.isEditor || Application.isMobilePlatform;
```

The Editor is included alongside mobile so haptics-related UI stays visible and testable during Editor Play mode, even though no actual vibration fires there. FludeX's own built-in settings UI uses this to hide its Haptics controls entirely on platforms where they'd have no effect: the **Haptics** section in [Core Settings](./core-settings) and the **HAPTICS** section in [Console Settings](../modules/console/features/haptics) both disappear completely on Desktop, rather than showing controls that would visibly do nothing.

## What's Wired In

Haptics fire automatically wherever FludeX's own UI already handles the interaction — you don't need to trigger anything yourself for these:

- Button / QuietButton results
- Toggle
- Selector (tap and popover-open)
- Stepper
- Insets
- Text
- Info
- ColorPicker (popover-open)
- NavigationButton
- TextInput (focus and submit)
- Slider / Range Slider — reaching min/max, and per-checkpoint when step-restricted
- WidgetsBook tab navigation
- Panel chrome — open trigger, hamburger, close, settings tray open/close/back

## Triggering Haptics From Your Own Code

Resolve `IFludexHapticsService` through DI (for example, in a custom module's constructor) and call `Trigger`:

```csharp
_hapticsService.Trigger(HapticFeedbackType.SELECTION, HapticsDomain.Widgets);
```

`Trigger` is a no-op if the device can't produce haptics, if the master `Enabled` switch is off, or if the given domain is disabled — call it freely without checking the platform yourself.
