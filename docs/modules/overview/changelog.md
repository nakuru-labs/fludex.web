---
title: Changelog
---

# Overview Module — Changelog

## 1.2.0 — 2026-09-15

### Added

- New "PlayerPrefs" tab. Watch any PlayerPrefs key to see its live value and type at a glance ("WATCHING KEYS") — tap a watched key to change its type, set a new value, clear it, or stop watching it. A "Manage keys" drill-down checks, sets, or clears a single key's value without adding it to the watch list. A DANGER ZONE card can clear all PlayerPrefs for the game at once.

### Changed

- Bumped Core dependency to 1.7.0

### Fixed

- The key name in the WATCHING KEYS list now shows in white instead of a dimmer inherited color, making it easier to read.
- Removing a watched key from its Edit Key screen now closes that screen automatically, instead of leaving it open on a key that no longer exists.

---

## 1.1.1 — 2026-08-15

### Changed

- Bumped Core dependency to 1.5.0

### Fixed

- Fixed the Active Scene info in Overview sometimes showing blank or stale right after switching scenes

---

## 1.1.0 — 2026-08-01

### Added

- Module configuration page, accessible via the gear icon in the module's app bar

### Changed

- Bumped Core dependency to 1.4.0

---

## 1.0.3 — 2026-07-06

- Bumped Core dependency to 1.3.0
- Updated `com.unity.dt.app-ui` dependency to 2.1.11

---

## 1.0.2 — 2026-06-25

- Bumped Core dependency to 1.2.0

---

## 1.0.1 — 2026-05-25

- Bumped Core dependency to 1.1.0

---

## 1.0.0

Initial release.

- Pre-built diagnostic dashboard with System, Display, Build, and Runtime tabs
- `AddSystemWidget` / `AddDisplayWidget` / `AddBuildWidget` / `AddRuntimeWidget` for injecting custom widgets into built-in tabs
- `AddCustomPage` / `RemoveCustomPage` / `TryGetCustomPage` for adding entirely new tabs
- 2 samples: Customization, Showcase
