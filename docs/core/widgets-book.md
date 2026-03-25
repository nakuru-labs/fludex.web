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
| Selector | Pick from a list (dropdown) |
| Text Input | Enter and bind a string value |

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
        .WithSlider("Time Scale", () => Time.timeScale, v => Time.timeScale = v, 0f, 2f)
        .Build());

    playground.AddPage(page);
}
```

## Data Binding

Pass a getter lambda to any widget that reads a value — FludeX polls it automatically and keeps the widget in sync with your runtime state. No manual refresh calls needed.

```csharp
.WithInfo("FPS", () => (1f / Time.deltaTime).ToString("F0"))
.WithToggle("Dark Mode", () => mySettings.darkMode, v => mySettings.darkMode = v)
```

See **Sample 02 – WidgetsBook** and **Sample 04 – WidgetsShowcase** for full examples.
