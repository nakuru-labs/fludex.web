---
title: WidgetsBook
---

# WidgetsBook

WidgetsBook is the built-in way to compose a debug panel. Organize controls into pages (tabs) using a declarative widget library built on AppUI. Widgets support **data binding** — they stay in sync with your runtime values automatically without any manual refresh calls.

## Available Widgets

| Widget | Description |
|---|---|
| Info | Display a read-only string or bool value |
| Text | Display a read-only text without a label |
| Toggle | Switch a boolean value on/off |
| Button / ButtonsGrid | Trigger sync or async debug actions |
| Slider (int / float) | Adjust a numeric value with configurable range and step |
| Range Slider | Select a min/max range with two handles |
| Stepper | Increment/decrement a value |
| Selector | Pick from a list (dropdown); label is optional |
| Text Input | Enter and bind a string value |
| ColorPicker | Pick a color via a swatch that opens AppUI's color picker popover |

## Stepper: Drag to Scrub

Besides tapping the +/- buttons, you can drag horizontally on a Stepper's field or its label to scrub its value directly. Sensitivity is velocity-sensitive — a slow drag moves the value in fine increments, a fast drag moves it in coarser ones. A tap without any horizontal movement falls through to normal tap-to-type, so quick taps still work as before.

## Slider: Marks & Magnetic Snap

Slider (Int/Float) and Range Slider (Int/Float) widgets can now be given an explicit list of marks (`marks`) instead of relying on evenly-spaced step ticks — useful for calling out specific, non-uniformly-spaced values (a Fibonacci-like sequence, a handful of meaningful presets, etc.). Combined with `snapping`, the dragged value softly pulls onto the nearest mark once close enough, confirmed with a light haptic. Dragging stays completely free everywhere else on the track — marks only pull when you're already near one, they never block reaching a value in between.

```csharp
.WithSliderFloat("Zoom", () => cameraZoom, 0.5f, 2f, step: 0.01f,
    showMarks: true, showMarkLabels: true,
    marks: new[] { 0.5f, 1f, 1.5f, 2f }, snapping: true)
```

On Range Slider, each thumb snaps to the nearest mark independently — one thumb can sit pulled onto a mark while the other drags freely elsewhere on the same track, each confirming with its own haptic.

```csharp
.WithRangeSliderFloat("Price Range", () => priceRange, 0f, 100f, step: 1f,
    showMarks: true, showMarkLabels: true,
    marks: new[] { 0f, 25f, 50f, 75f, 100f }, snapping: true)
```

`showMarks` and `showMarkLabels` (rendering tick marks and their labels) aren't new — `marks` and `snapping` are.

## Building a Panel

Use `Widget.Create()` with a fluent builder API to compose widgets into a descriptor, then add them to a page:

```csharp
private void Awake()
{
    FludeX.Instance.Initialize();

    if (!FludeX.Instance.TryGetModule<FludexPlaygroundModule>(out var playground))
        return;

    var page = new WidgetsPageDescriptor("My Controls");
    page.AddWidget(Widget.Create()
        .WithTitle("GAMEPLAY")
        .WithToggle("God Mode", () => godMode)
        .WithButton("Reload Scene", ButtonType.Accent, OnReloadPressed)
        .WithSlider("Time Scale", () => Time.timeScale, 0f, 2f)
        .Build());

    playground.AddPage(page);
}
```

## Data Binding

Pass a C# expression to any widget that binds a value — FludeX inspects the expression at runtime to derive both the getter and the setter automatically. No separate setter callback, no manual refresh calls needed.

```csharp
// Member access — FludeX auto-derives the setter; widget stays in sync both ways
.WithToggle("Dark Mode", () => mySettings.darkMode)
.WithSlider("Volume", () => AudioListener.volume, 0f, 1f)

// Computed expression — getter only, no setter (no writable target to set back to)
.WithInfo("FPS", () => (1f / Time.deltaTime).ToString("F0"))
```

If the target object implements `INotifyPropertyChanged`, the binding wires up change notifications automatically — the widget updates immediately when the value changes, without polling.

See **Sample 02 – WidgetsBook** and **Sample 04 – WidgetsShowcase** for full examples.
