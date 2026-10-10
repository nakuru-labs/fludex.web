---
title: Sticky Trigger
---

# Sticky Trigger

The Sticky Trigger is FludeX's default trigger: a small button showing the FludeX icon that stays on screen. Tap it twice quickly to open the panel — or press and hold it, then **drag it anywhere on the screen** so it never gets in the way of your game.

It's the trigger a brand-new install starts with. The [keyboard trigger](./triggers#keyboard-trigger) (the `` ` `` key) is added alongside it, as with every default setup.

## Using It

| Gesture | What happens |
|---|---|
| **Double-tap** | Opens the panel (the number of taps is configurable) |
| **Press and hold, then drag** | Moves the button. Hold for about half a second before the drag starts |

While you drag, the button is pulled toward the nearest of **nine snap points** — the four corners, the four edge midpoints and the center — once you get close. The nine points are shown during the drag. Where you drop the button is remembered and persists across restarts.

## Existing Installs

Updating to a version that includes the Sticky Trigger doesn't change which trigger an existing device uses: a device that was opening FludeX with the [tap trigger](./triggers#tap-trigger) keeps it. The exception is a **Default Trigger** set in the [Editor Settings window](./editor-settings#default-trigger), which applies to every device. See [Configuration Layers](./configuration-layers#the-exception-default-trigger) for the exact order.

## Configuration

Pass a `FludexStickyTriggerConfig` when constructing `FludexStickyTrigger`:

| Property | Description | Default |
|---|---|---|
| `TapsToShow` | Quick taps in a row needed to open the panel | 2 |
| `Position` | Normalized screen position the button starts at | Bottom-center (0.5, 1.0) |
| `Padding` | Extra tappable area around the button, in pixels | 30 |
| `Opacity` | Resting opacity of the button (0 = invisible, 1 = fully visible) | 1 |
| `ShowOnPress` | Force the button fully opaque while pressed, even when `Opacity` is 0 | `true` |
| `LongTapDuration` | Seconds a press must be held before it turns into a drag | 0.5 |
| `SnapToGrid` | Pull a drag toward the nearest snap point as it gets close | `true` |
| `ShowSnapGrid` | Show the nine snap points while dragging (independent of `SnapToGrid`) | `true` |

```csharp
FludeX.Instance.Initialize(new FludexCompositeTrigger(
    new FludexStickyTrigger(new FludexStickyTriggerConfig
    {
        TapsToShow = 3,
        Opacity = 0.4f,
        SnapToGrid = false
    }),
    new FludexKeyboardTrigger()
));
```

### Runtime Configuration

All of these except `Position` can also be adjusted live: Core Settings has a **Trigger** section with a **Setup** button that opens the Sticky Trigger page. Changes apply immediately and persist across restarts.

As with the [tap trigger](./triggers#runtime-configuration), the config you pass at `Initialize()` only supplies the *seed* values. Whatever a device's user changes — or the position they drag the button to — takes over from there. **Reset Settings** in Core Settings' Danger Zone restores the seed values.
