---
title: Core Package
description: FludeX Core — the panel engine, gesture trigger system, WidgetsBook widget library, and module discovery API for building runtime debug tools in Unity.
head:
  - - meta
    - name: keywords
      content: FludeX core, Unity debug panel engine, Unity UI Toolkit widgets, Unity gesture trigger debug, runtime module API Unity, Unity debug widget library
---

# Core

The Core package is the foundation of FludeX. It provides the panel engine, the gesture trigger system, the WidgetsBook widget library, descriptor-based module discovery, and a reflection-based DI container.

All other FludeX packages depend on Core.

## What's in Core

- **Panel engine** — manages the panel lifecycle: show, hide, toggle, dispose; renders through Unity 6.5's `PanelRenderer` automatically on Unity 6000.5 and later, falling back to the legacy `UIDocument` on earlier versions
- **Trigger system** — tap trigger, keyboard trigger, composite trigger, and a `FludexNoTrigger` for manual control
- **WidgetsBook** — declarative widget library for composing debug panels with live data binding
- **Conditional Widgets** — show, hide, enable, or disable any widget or element based on another setting. See [Conditional Widgets](./conditional-widgets)
- **Core Settings** — a panel-wide settings tray for editing module selection, widget toasts, notification stack behavior, and haptics at runtime. See [Core Settings](./core-settings)
- **Haptics** — a built-in haptic feedback system wired into panel chrome and WidgetsBook widgets, configurable per-domain. See [Haptics](./haptics)
- **Module discovery** — loads `FludexModuleDescriptor` assets from `Resources/FludeX/Modules/` at startup; each descriptor exposes a `Version` field shown in the module settings panel
- **DI container** — reflection-based dependency injection used internally by modules

## Panel Control API

| Method / Property | Description |
|---|---|
| `Initialize()` | Set up FludeX with all defaults |
| `Initialize(config)` | Set up FludeX with a custom `FludexConfig` (e.g. a different initial module index) |
| `Initialize(trigger)` | Set up FludeX with a custom `IFludexTrigger` implementation |
| `Initialize(config, trigger)` | Set up FludeX with both a custom config and a custom trigger |
| `Initialize(moduleConfigs)` | Set up FludeX and pass one or more `IModuleConfiguration<TModule>` objects to pre-configure individual modules |
| `Prepare()` | Run the prepare lifecycle phase — called after `Initialize()` and before the first frame to allow modules to complete pre-show setup |
| `Show()` | Show the debug panel |
| `Hide()` | Hide the debug panel |
| `Toggle()` | Show if hidden, hide if shown |
| `IsInitialized` | True after `Initialize()` completes |
| `IsVisible` | True while the panel is on screen |
| `Dispose()` | Release all resources |
