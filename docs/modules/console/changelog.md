---
title: Changelog
---

# Console Module — Changelog

## 1.3.0 — 2026-08-01

### Added

- Haptic feedback wired into console-owned interactions — log copy (long-press and detail view), toolbar actions (clear, collapse, filter chips, search), and alert notifications, the latter only firing for a genuinely new alert
- New **HAPTICS** settings section — a General toggle for direct-interaction haptics and an Alerting toggle for alert notification haptics

### Fixed

- Log search now filters live as you type instead of only once the search field loses focus, with a 250ms debounce so fast typing doesn't re-run the filter on every keystroke

---

## 1.2.0 — 2026-07-06

### Added

- **[Alerting](./features/alerting)** — define rules that match incoming logs by severity and pattern, with a toast notification the moment one fires, built on Core's new notification stack
- Search bar `/tag <name>[|name2|name3]` qualifier and `&&` multi-term AND search, combinable with the existing `/alert` filter and severity toggles — see [Filtering](./features/filtering)
- Alert rule patterns now support the same `/tag` and `&&` grammar as the search bar, not just a plain substring

### Changed

- Updated `com.unity.dt.app-ui` dependency to 2.1.11

---

## 1.1.0 — 2026-06-25

### Added

- **Tags** — log messages prefixed with `[TAG]:` are parsed and displayed as color-coded chips in the log list and detail view
- **Multiple tags per message** — stack tags before the message (e.g. `[UI][PERF]: message`); each is shown as its own chip
- **Per-tag color overrides** — assign custom colors to tag names via `ConsoleModuleConfiguration.TagColors`
- **Custom tag format** — configurable tag prefix, suffix, and separator via `ConsoleModuleConfiguration.TagFormat`
- **Configurable timestamp** — detail pane and optional history list show game time or device time, with optional milliseconds

---

## 1.0.1 — 2026-05-26

### Fixed

- Log flush no longer stays paused indefinitely after selecting a log entry when the new Unity Input System package is active. Resume is now driven by pointer events instead of the legacy `Input` API.

---

## 1.0.0 — 2026-05-25

Initial release.

- Real-time log capture from any thread
- Info, Warning, and Error log levels with toggle and live count badge
- Collapse — groups consecutive identical logs with a repeat counter
- Case-insensitive search across log messages
- Clear — wipes the full log history and resets all state
- Configurable ring buffer capacity (100 – 10,000 entries), persisted across sessions
- Long press to copy on mobile — progress indicator fills while holding
- Detail view with actions menu — tap a log to see the full message and stack trace
- Keyboard shortcut to copy — Ctrl+C (Windows / Linux) or Cmd+C (Mac)
- Auto-scroll — follows new logs; a floating button jumps back to the bottom
- Drop-in — install the package and the console appears in the FludeX panel automatically
