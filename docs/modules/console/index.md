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

To pass a configuration, supply a `ConsoleModuleConfiguration` to `Initialize()`:

```csharp
private void Awake()
{
    FludeX.Instance.Initialize(new ConsoleModuleConfiguration
    {
        TagColors = new Dictionary<string, Color>
        {
            { "UI",   Color.cyan  },
            { "PERF", Color.yellow }
        },
        TagFormat = new ConsoleTagFormat
        {
            Prefix    = "[",
            Suffix    = "]",
            Separator = ":"
        }
    });
}
```

## Features

| Feature | Details |
|---|---|
| **Real-time log capture** | Receives logs from any thread the moment they are emitted |
| **Log levels** | Info, Warning, and Error — each with a toggle and a live count badge |
| **Collapse** | Groups consecutive identical logs into a single entry with a repeat counter |
| **Search** | Case-insensitive filter across all log messages |
| **Clear** | Wipes the full log history and resets all state |
| **Configurable history** | Ring buffer capacity from 100 to 10,000 entries, persisted across sessions; a window label shows the visible range when the buffer wraps |
| **Long press to copy** | Hold any log entry on mobile to copy it; a progress indicator fills while holding |
| **Detail view** | Tap a log to open the detail pane with the full message and stack trace; tap the pane to reveal the actions menu |
| **Keyboard shortcut** | Select a log and press Ctrl+C (Windows / Linux) or Cmd+C (Mac) to copy |
| **Auto-scroll** | Follows new logs automatically; disabled on selection or manual scroll, with a floating button to jump back to the bottom |
| **Tags** | Log messages prefixed with `[TAG]:` are parsed and shown as color-coded chips in the log list and detail view |
| **Multiple tags per message** | Stack tags before the message — e.g. `[UI][PERF]: rendering took 12ms` — each rendered as its own chip |
| **Per-tag color overrides** | Assign custom colors to individual tag names via `ConsoleModuleConfiguration.TagColors` |
| **Custom tag format** | Configurable tag prefix, suffix, and separator via `ConsoleModuleConfiguration.TagFormat` |
| **Configurable timestamp** | Detail pane and optional history list show game time or device time, with optional milliseconds |

## Configuration

The Console module implements `IConfigurableModule`, so a settings button appears in the app bar when the console is active. Tap it to open the configuration tray.

Runtime settings (adjustable from the tray):

- History buffer size (100 – 10,000 entries)
- Timestamp source — game time or device time
- Milliseconds display in timestamps

Code-only settings (set via `ConsoleModuleConfiguration` passed to `Initialize()`):

- `TagColors` — `Dictionary<string, Color>` mapping tag names to custom colors
- `TagFormat` — `ConsoleTagFormat` with `Prefix`, `Suffix`, and `Separator` controlling how tags are parsed from log messages

## Requirements

- Unity **2022.3** or later
- `com.nakuru.fludex` **1.2.0**

## Installation

Available on the **[Unity Asset Store](https://assetstore.unity.com/packages/slug/367704)**.

## Samples

Import via **Package Manager → FludeX Console Module → Samples tab**.

| # | Sample | What it covers |
|---|--------|----------------|
| 01 | ConsoleShowcase | Fires random `Debug.Log`, `LogWarning`, and `LogError` messages on start and at a configurable interval |
