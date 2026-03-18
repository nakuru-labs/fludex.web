# Introduction

The **Widgets library** is a small UI composition system designed for a debugger environment.

It revolves around four concepts:

- **WidgetsBook**: the “board” that displays widgets.
- **Page**: a tab-like container to group widgets.
- **Widget**: a composite UI unit (built from multiple elements).
- **Widget Element**: a leaf control (toggle, label, button, slider, etc).

## What this library is for

Use this library when you want:

- A consistent way to build debugger UI with good UX defaults.
- Widgets that can be composed from small reusable parts.
- A place (WidgetsBook) where widgets can be added/removed and organized via pages.

## What this library is *not* trying to be

- A full app UI framework.
- A “one giant widget” approach where every new need requires a new bespoke widget type.

## Quick example (conceptual)

> The exact API names may differ in your codebase — this snippet illustrates the *shape* of the solution.

```csharp
// Conceptual example

var unitTypes = new [] { "Knight", "Archer", "Mage"};
var widget = Widget.Create()
    .WithTitle("Unit Spawning")
    .WithSelector("Type", unitTypes)
    .WithSliderInt("Health", () => 100)
    .WithButton("Spawn", ButtonType.Accent, OnButtonClick)
    .Build();

ButtonResult OnButtonClick()
{
    // do something
    return ButtonResult.Success;
}
```

Next: read Core Concepts to understand the relationships between these parts.