---
title: Changelog
---

# Console Module — Changelog

## 1.1.0

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
