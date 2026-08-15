---
title: Conditional Widgets
---

# Conditional Widgets

Widgets and their elements can be shown, hidden, enabled, or disabled based on another setting — for example, hiding advanced options until a related toggle is turned on. Conditions are expressed the same way widget values are: pass a C# expression, and FludeX keeps it in sync automatically.

<!-- TODO: screenshot/video — before/after of a settings page with a hidden vs. shown advanced option, or a short video of the toggle interaction -->

## Widget-Level: Show or Hide a Whole Section

Call `VisibleWhen` / `EnabledWhen` on the builder when composing a widget:

```csharp
Widget.Create()
    .WithTitle("ADVANCED")
    .WithDescription("Only shown once the feature is turned on.")
    .WithToggle("Verbose Logging", () => settings.VerboseLogging)
    .VisibleWhen(() => settings.AdvancedModeEnabled)
    .Build();
```

`VisibleWhen` controls whether the whole card is shown at all; `EnabledWhen` keeps the card visible but grays it out and blocks interaction. Both are also available directly on `Widget.Descriptor`, for widgets you built earlier and want to attach a condition to afterward.

## Element-Level: Show or Hide a Single Control

Most `With*` element methods accept the same two optional parameters directly:

```csharp
Widget.Create()
    .WithTitle("HAPTICS")
    .WithToggle("Enabled", () => haptics.Enabled)
    .WithToggle("Core", () => haptics.Core, visibleWhen: () => haptics.Enabled)
    .WithToggle("Widgets", () => haptics.Widgets, visibleWhen: () => haptics.Enabled)
    .Build();
```

This is the exact pattern FludeX's own [Core Settings](./core-settings) page uses — the **Core** and **Widgets** haptics toggles only appear once the master **Enabled** toggle is on.

For element constructors that can't take `visibleWhen` / `enabledWhen` directly (for example, ones with a trailing `params` array), call `VisibleWhen(...)` / `EnabledWhen(...)` on the returned element descriptor instead.

## How Conditions Are Evaluated

- Conditions are live bindings, not one-time checks — the same expression-based binding used for widget values (see [Data Binding](./widgets-book#data-binding)). Change the backing property and the widget's visibility/enabled state updates immediately, with no manual refresh.
- A missing or `null` condition, or one that throws, **fails open** — the widget stays visible and enabled rather than silently disappearing. A broken condition should never be the reason a control vanishes.
- `VisibleWhen` removes the widget from layout entirely (no leftover gap), and the card's height animates smoothly to its new size as elements appear or disappear. `EnabledWhen` keeps the widget visible but non-interactive and visually dimmed.

## Where It Applies

Both `VisibleWhen` and `EnabledWhen` work at two levels:

- **Widget** — a whole titled card, via `Widget.Create()...VisibleWhen()/.EnabledWhen()`, or `Widget.Descriptor.VisibleWhen()/.EnabledWhen()` after construction
- **Element** — a single control inside a widget, via the `visibleWhen` / `enabledWhen` parameters on its `With*` builder method, or `ElementDescriptor.VisibleWhen()/.EnabledWhen()`
