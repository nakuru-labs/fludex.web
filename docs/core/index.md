---
title: Core
---

# Core

The Core package is the foundation of FludeX. It provides the panel engine, the gesture trigger system, the WidgetsBook widget library, descriptor-based module discovery, and a reflection-based DI container.

All other FludeX packages depend on Core.

## What's in Core

- **Panel engine** — manages the panel lifecycle: show, hide, toggle, dispose
- **Trigger system** — tap trigger, keyboard trigger, composite trigger, and a `FludexNoTrigger` for manual control
- **WidgetsBook** — declarative widget library for composing debug panels with live data binding
- **Module discovery** — loads `FludexModuleDescriptor` assets from `Resources/FludeX/Modules/` at startup
- **DI container** — reflection-based dependency injection used internally by modules

## Panel Control API

| Method / Property | Description |
|---|---|
| `Initialize()` | Set up FludeX with the default composite trigger (tap + keyboard) |
| `Initialize(trigger)` | Set up FludeX with a custom `IFludexTrigger` implementation |
| `Show()` | Show the debug panel |
| `Hide()` | Hide the debug panel |
| `Toggle()` | Show if hidden, hide if shown |
| `IsInitialized` | True after `Initialize()` completes |
| `IsVisible` | True while the panel is on screen |
| `Dispose()` | Release all resources |
