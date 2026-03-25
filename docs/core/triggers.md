---
title: Triggers
---

# Triggers

By default, FludeX opens with both triggers active simultaneously:

- **Tap trigger** — triple-tap the on-screen hit area (bottom-center). Works on all platforms.
- **Keyboard trigger** — press the BackQuote key (`` ` `` / `~`). Works on desktop and editor.

Both can be replaced or combined using `Initialize(trigger)`.

## Tap Trigger

A slightly visible hit area that opens the panel after N taps in a row. Respects device safe area automatically. Configure it via **FludeX Settings → Trigger**:

| Setting | Description | Default |
|---|---|---|
| Tap count | Number of taps required to open the panel | 3 |
| Position | Normalized screen position of the hit area | Bottom-center |
| Radius | Hit area size in pixels | 30 px |
| Opacity | Visibility of the hit area (0 = invisible, 1 = fully visible) | 0.05 |

## Keyboard Trigger

Opens and closes the panel with a single key press. Uses `OnGUI / Event.current` — no Input System package dependency.

```csharp
// Default key: BackQuote (` / ~)
FludeX.Instance.Initialize(new FludexKeyboardTrigger());

// Custom key — useful for non-US keyboard layouts
FludeX.Instance.Initialize(new FludexKeyboardTrigger(KeyCode.F12));
```

## Composite Trigger

Combines multiple triggers so all are active at once:

```csharp
FludeX.Instance.Initialize(new FludexCompositeTrigger(
    new FludexTapTrigger(settings),
    new FludexKeyboardTrigger()
));
```

## Manual Control

If you want full control over when the panel appears — for example, opening it from a button in your own UI or tying it to a custom game event — pass `FludexNoTrigger` to skip the built-in triggers entirely and drive visibility from code:

```csharp
FludeX.Instance.Initialize(new FludexNoTrigger());

// Open and close the panel whenever you need:
FludeX.Instance.Show();
FludeX.Instance.Hide();
```
