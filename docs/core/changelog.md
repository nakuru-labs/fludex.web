---
title: Changelog
---

# Core — Changelog

## 1.2.0

### Added

- `IModuleConfiguration<TModule>` — typed configuration interface; pass one or more module config objects directly to `FludeX.Initialize()`
- `Prepare()` — new lifecycle phase called after `Initialize()` and before the first frame, allowing modules to complete pre-show setup
- `FludexModuleDescriptor.Version` — version string exposed on each module descriptor and shown in the module settings panel

---

## 1.1.1 — 2026-05-26

### Fixed

- Unity built-in debug console is showing automatically on error overlapping the FludeX

---

## 1.1.0 — 2026-05-25

### Added

- `ButtonResult` struct and Toast feedback for button actions — success, failure, and unhandled exceptions each surface the appropriate notification
- Void button overloads (`Action`, `Func<Task>`) — complete silently with no Toast unless an exception is thrown
- `FludexConfig.Widgets` — new `WidgetsConfig` to control built-in widget behaviors, starting with `ButtonResultToast` and `ButtonExceptionToast` flags
- `IConfigurableModule` — modules can now expose a settings view by implementing `GetConfigurationView()`; a settings button appears in the app bar and opens a bottom tray with the module's configuration UI

### Fixed

- Drawer partially visible on first launch when in closed state

---

## 1.0.0

Initial release.

- Panel engine with show / hide / toggle / dispose lifecycle
- Tap trigger with configurable tap count, position, radius, and opacity
- Keyboard trigger with configurable key binding
- Composite trigger for combining multiple triggers
- `FludexNoTrigger` for manual show/hide integration
- WidgetsBook: Info, Text, Toggle, Button, ButtonsGrid, Slider, Range Slider, Stepper, Selector, Text Input widgets with live data binding
- Descriptor-based module discovery from `Resources/FludeX/Modules/`
- Reflection-based DI container
- 5 samples: GettingStarted, WidgetsBook, CustomModule, WidgetsShowcase, WidgetElementsShowcase
