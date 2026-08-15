---
title: Console Module
description: FludeX Console — a full-featured runtime log viewer for Unity. Real-time in-game debug console with filtering by log level, search, collapse, copy support, and color-coded log tags.
head:
  - - meta
    - name: keywords
      content: Unity runtime console, Unity in-game debug console, Unity log viewer runtime, Unity console module, debug console Unity UI Toolkit, Unity log filter runtime, Unity log tags runtime
---

# Console Module

A full-featured runtime log viewer for the FludeX panel. It captures Unity log messages from all threads in real time, supports filtering and search, and lets you copy any entry to clipboard — all without connecting to the editor.

Install the package and the console appears in the FludeX panel automatically on the next run. No registration or code changes needed.

## Quick Start

```csharp
private void Awake()
{
    FludeX.Instance.Initialize();
}
```

That's all. The console module is drop-in — it self-registers via its `FludexModuleDescriptor` asset.

To pass a configuration, supply a `ConsoleModuleConfiguration` to `Initialize()`. Every property is optional — omit any of them to keep its built-in default:

```csharp
private void Awake()
{
    FludeX.Instance.Initialize(new ConsoleModuleConfiguration
    {
        TagColors = new Dictionary<string, Color32>
        {
            ["UI"]   = new Color32(0, 200, 255, 255),
            ["PERF"] = new Color32(255, 210, 0, 255)
        },
        TagFormat = new ConsoleTagFormat("[", "]", ":"),
        Timestamp = new ConsoleTimestampConfiguration
        {
            Mode             = TimeDisplayMode.DeviceTime,
            ShowMilliseconds = true,
            ShowInList       = false
        },
        DefaultRules = new[]
        {
            new FludexConsoleAlertRule(
                Id: "uncaught-exceptions",
                Name: "Uncaught Exceptions",
                Severity: AlertSeverity.Exception,
                TextPattern: "Exception",
                IsEnabled: true)
        }
    });
}
```

## Features

| Feature | Details |
|---|---|
| **Real-time log capture** | Receives logs from any thread the moment they are emitted |
| **Log levels** | Info, Warning, and Error — each with a toggle and a live count badge. See [Filtering](./features/filtering) |
| **Collapse** | Groups consecutive identical logs into a single entry with a repeat counter. See [Filtering](./features/filtering) |
| **Search** | Case-insensitive filter across all log messages, plus tag and AND qualifiers. See [Filtering](./features/filtering) |
| **Clear** | Wipes the full log history and resets all state. See [Filtering](./features/filtering) |
| **Alerting** | Define rules that match logs by severity and pattern, with a toast notification on each hit. See [Alerting](./features/alerting) |
| **Configurable history** | Ring buffer capacity from 100 to 10,000 entries, persisted across sessions; a window label shows the visible range when the buffer wraps |
| **Long press to copy** | Hold any log entry on mobile to copy it; a progress indicator fills while holding. See [Sharing](./features/sharing) |
| **Detail view** | Tap a log to open the detail pane with the full message and stack trace; tap the pane to reveal the actions menu. See [Detailed View](./features/detailed-view) |
| **Keyboard shortcut** | Select a log and press Ctrl+C (Windows / Linux) or Cmd+C (Mac) to copy. See [Sharing](./features/sharing) |
| **Auto-scroll** | Follows new logs automatically; disabled on selection or manual scroll, with a floating button to jump back to the bottom |
| **Tags** | Log messages prefixed with `[TAG]:` are parsed and shown as color-coded chips in the log list and detail view. See [Tags](./features/tags) |
| **Multiple tags per message** | Stack tags before the message — e.g. `[UI][PERF]: rendering took 12ms` — each rendered as its own chip. See [Tags](./features/tags) |
| **Per-tag color overrides** | Assign custom colors to individual tag names via `ConsoleModuleConfiguration.TagColors`. See [Tags](./features/tags) |
| **Custom tag format** | Configurable tag prefix, suffix, and separator via `ConsoleModuleConfiguration.TagFormat`. See [Tags](./features/tags) |
| **Configurable timestamp** | Detail pane and optional history list show game time or device time, with optional milliseconds. See [Detailed View](./features/detailed-view) |
| **Haptics** | Feedback on log copy, toolbar actions, and alert notifications — independent of Core's haptics, but subordinate to its master switch. See [Haptics](./features/haptics) |

## Configuration

The Console module implements `IConfigurableModule`, so a settings button appears in the app bar when the console is active. Tap it to open the configuration tray.

Runtime settings (adjustable from the tray):

- History buffer size (100 – 10,000 entries)
- Timestamp source — game time or device time
- Milliseconds display in timestamps
- Haptics — General (direct interactions) and Alerting toggles, when [haptics are available](./features/haptics#availability) on the current platform

Code-only settings (set via `ConsoleModuleConfiguration` passed to `Initialize()`, all optional):

- `TagColors` — `IReadOnlyDictionary<string, Color32>` mapping tag names to custom colors. See [Tags](./features/tags)
- `TagFormat` — `ConsoleTagFormat` struct (`TagPrefix`, `TagSuffix`, `EndSeparator`) controlling how tags are parsed from log messages. See [Tags](./features/tags)
- `Timestamp` — `ConsoleTimestampConfiguration` with `Mode`, `ShowMilliseconds`, and `ShowInList`; each is applied only if the player has no saved preference yet (first launch). See [Detailed View](./features/detailed-view)
- `DefaultRules` — starter list of `FludexConsoleAlertRule`s, seeded only on first launch — never overwrites rules the player has since created, edited, or removed. See [Alerting](./features/alerting)

## Requirements

- Unity **2022.3** or later
- `com.nakuru.fludex` **1.5.0**

## Installation

Available on the **[Unity Asset Store](https://assetstore.unity.com/packages/slug/367704)**.

## Samples

Import via **Package Manager → FludeX Console Module → Samples tab**.

| # | Sample | What it covers |
|---|--------|----------------|
| 01 | ConsoleShowcase | Fires random `Debug.Log`, `LogWarning`, and `LogError` messages on start and at a configurable interval |
