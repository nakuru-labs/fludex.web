---
title: Core Settings
---

# Core Settings

Core Settings is a panel-wide settings tray, separate from any individual module's own settings. It lets you change FludeX's core behavior at runtime — module selection, widget toasts, the notification stack, haptics, and the trigger — without touching code. Changes apply immediately and persist across restarts.

## Reaching It

Open the drawer (tap the hamburger icon in the app bar) and tap **Settings** in the footer, below the module list. It opens in the same bottom tray used by per-module configuration.

## What's Adjustable

| Section | Setting | Description |
|---|---|---|
| **Initial Module** | Initial Module | Which module opens first on launch. `Auto` (default) picks the highest-priority module — see [Custom Modules](./custom-modules) |
| **Trigger** | Setup | Opens a dedicated page for configuring the active trigger's position, padding, radius, and opacity live — see [Triggers — Runtime Configuration](./triggers#runtime-configuration) |
| **Widgets** | Button Result Toast | Show a toast when a `Button` action completes successfully or fails |
| **Widgets** | Button Exception Toast | Show a toast when a `Button` action throws an unhandled exception |
| **Notification Stack** | Max Count | How many toasts can stack at once (1–4) |
| **Notification Stack** | Auto Dismiss (seconds) | How long a toast stays before dismissing itself (1–5s), with soft magnetic snapping onto each whole second |
| **Haptics** | Enabled | Master switch for all haptic feedback |
| **Haptics** | Core | Haptics for panel/shell chrome — see [Haptics](./haptics) |
| **Haptics** | Widgets | Haptics for individual widget interactions — see [Haptics](./haptics) |

The whole **Haptics** section only appears if haptics are actually available on the current platform — it's hidden entirely on Desktop. See [Haptics — Platform Availability](./haptics#platform-availability). Within the section, **Core** and **Widgets** themselves stay hidden until **Enabled** is turned on — a live example of [Conditional Widgets](./conditional-widgets) in FludeX's own UI. The **Trigger** section only appears if the active trigger supports runtime configuration (the built-in tap trigger does) — a custom `IFludexTrigger` that doesn't implement `ITriggerConfigurationProvider` won't show one.

Below these, the tray also shows the standard About + Links block — current version, author, and links to documentation, changelog, support, and reporting an issue — matching every other module's settings tray.

## Persistence vs. `FludexConfig`

Core Settings is backed by `IFludexRuntimeConfiguration`, a mutable, persisted layer distinct from the immutable `FludexConfig` you pass to `FludeX.Instance.Initialize(...)`. `FludexConfig` only supplies the *seed* values the first time FludeX runs on a device — after that, whatever the player changes in Core Settings takes over and survives app restarts, independent of what your code passes at `Initialize()` time.

These values are stored in their own JSON file rather than PlayerPrefs, so they're isolated from the host game's PlayerPrefs usage — a `PlayerPrefs.DeleteAll()` call elsewhere in your game won't wipe them. Existing PlayerPrefs-stored settings from before this change are migrated automatically on first launch.
