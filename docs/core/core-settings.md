---
title: Core Settings
---

# Core Settings

Core Settings is a panel-wide settings tray, separate from any individual module's own settings. It lets you change FludeX's core behavior at runtime — module selection, widget toasts, the notification stack, and haptics — without touching code. Changes apply immediately and persist across restarts.

## Reaching It

Open the drawer (tap the hamburger icon in the app bar) and tap **Settings** in the footer, below the module list. It opens in the same bottom tray used by per-module configuration.

## What's Adjustable

| Section | Setting | Description |
|---|---|---|
| **Module Selection** | Initial Module | Which module opens first on launch. `Auto` (default) picks the highest-priority module — see [Custom Modules](./custom-modules) |
| **Widgets** | Button Result Toast | Show a toast when a `Button` action completes successfully or fails |
| **Widgets** | Button Exception Toast | Show a toast when a `Button` action throws an unhandled exception |
| **Notification Stack** | Max Count | How many toasts can stack at once (1–4) |
| **Notification Stack** | Auto Dismiss (seconds) | How long a toast stays before dismissing itself (1–5s) |
| **Haptics** | Enabled | Master switch for all haptic feedback |
| **Haptics** | Core | Haptics for panel/shell chrome — see [Haptics](./haptics) |
| **Haptics** | Widgets | Haptics for individual widget interactions — see [Haptics](./haptics) |

Below these, the tray also shows the standard About + Links block — current version, author, and links to documentation, changelog, and support — matching every other module's settings tray.

## Persistence vs. `FludexConfig`

Core Settings is backed by `IFludexRuntimeConfiguration`, a mutable, persisted layer distinct from the immutable `FludexConfig` you pass to `FludeX.Instance.Initialize(...)`. `FludexConfig` only supplies the *seed* values the first time FludeX runs on a device — after that, whatever the player changes in Core Settings takes over and survives app restarts, independent of what your code passes at `Initialize()` time.
