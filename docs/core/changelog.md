---
title: Changelog
---

# Core — Changelog

## 1.6.0 — 2026-09-01

### Added

- Added a "DANGER ZONE" section to Core Settings — a confirmation-gated "Reset Settings" button that restores all Core settings to their `FludexConfig` seed values, or FludeX's built-in defaults if nothing was overridden
- Settings now persist to a JSON file instead of PlayerPrefs, migrated automatically from existing PlayerPrefs data on first launch — isolates FludeX's settings from the host game's own PlayerPrefs usage, so `PlayerPrefs.DeleteAll()` no longer wipes them as a side effect
- Stepper widgets now support drag-to-scrub — dragging horizontally on the field or its label scrubs the value directly, with velocity-sensitive sensitivity (slow drags for fine control, fast drags for coarse); a tap without any drag still falls through to normal tap-to-type

---

## 1.5.0 — 2026-08-15

### Added

- Widgets and sections can now be shown, hidden, enabled, or disabled based on another setting — for example, hiding advanced options until a related toggle is turned on. See [Conditional Widgets](../core/conditional-widgets)
- Added a "Disabled" label to the Haptics section in Console Settings when haptics is turned off globally
- Added a "Report an Issue" link to the Core Settings page's About/Links section
- FludeX now renders through Unity 6.5's `PanelRenderer` automatically on Unity 6000.5 and later, falling back to the legacy `UIDocument` on earlier versions — no configuration needed

### Changed

- Refreshed the visual style for disabled and inactive widgets across the whole panel — clearer, more consistent contrast between disabled elements and the controls around them
- Haptics settings are now hidden on Desktop, where haptic feedback isn't available
- Updated the App UI dependency to 2.1.12

---

## 1.4.0 — 2026-08-01

### Added

- `ColorPicker` widget — a new WidgetsBook element for picking a color via a swatch that opens AppUI's color picker popover
- New Core Settings page — reachable from the panel's settings button — for editing core configuration at runtime instead of only at code time: initial module selection, widget result/exception toasts, notification stack behavior, and haptics. See [Core Settings](../core/core-settings)
- Haptic feedback system — `IFludexHapticsService` with per-domain toggles (Core / Widgets) via `FludexHapticsConfiguration`, configured through `FludexConfig.Haptics`; wired into Button/QuietButton, Toggle, Selector, Stepper, Insets, Text, Info, ColorPicker, NavigationButton, TextInput, Slider/Range Slider, WidgetsBook tab navigation, and panel chrome. See [Haptics](../core/haptics)
- `IFludexNotificationStackService.TryPush()` — pushes a notification and returns `true` only when it's genuinely new, used to avoid duplicate haptic feedback for repeat alerts

### Changed

- `WidgetsBookPresenter`'s second constructor argument changed from `IFludexResolvingFactory` to `IServiceProvider` — existing direct `new(...)` calls need a one-line update; still constructible directly, no forced DI-factory usage
- Adjusted drawer styling — footer redesign, module list refinements

### Fixed

- FludeX's UI no longer conflicts with the host game's own UI panels for rendering/interaction order — `PanelSettings` sorting order changed from 0 to 10000

---

## 1.3.0 — 2026-07-06

### Added

- Flexible, fully configurable notification stack
- `NavigationButton` widget — pushes a sub-page from any widget page, opening as an overlay on first tap and sliding deeper within it on subsequent taps

### Changed

- Widgets' button result/exception toasts (`ButtonResultToast` / `ButtonExceptionToast`) now surface through the new notification stack instead of a raw AppUI Toast
- Updated `com.unity.dt.app-ui` dependency to 2.1.11

### Fixed

- Selector widget's dropdown popup now stays open across multiple picks in multi-select mode instead of closing after every selection
- TextInput widget's placeholder text is no longer near-invisible against its background — its color now provides real contrast

---

## 1.2.0 — 2026-06-25

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

## 1.0.0 — 2026-05-06

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
