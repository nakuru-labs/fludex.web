---
title: Console Sharing
description: FludeX Console sharing — copy any log entry to the clipboard via long-press on mobile or a keyboard shortcut on desktop.
head:
  - - meta
    - name: keywords
      content: Unity console copy log, Unity clipboard debug console, Unity long press copy mobile, Unity keyboard shortcut copy log
---

# Sharing

Get a log entry out of the panel and into a bug report, chat message, or ticket in one action — no manual retyping.

<video src="/console/sharing.mp4" width="360" height="289" style="display: block; margin: 0 auto;" autoplay loop muted playsinline></video>

## Copy Methods

| Platform | Method |
|---|---|
| Mobile (iOS/Android) | Long-press a log row — an animated progress bar fills while holding, then copies on completion |
| Desktop | Select a log, then press **Ctrl+C** (Windows/Linux) or **Cmd+C** (Mac) |
| Any platform | Open the [detail view](./detailed-view) action menu and tap **Copy** |

## What Gets Copied

```
timestamp :: [TAGS]: message
stacktrace
```

The timestamp and tag formatting match whatever is currently configured for [tags](./tags) and [timestamp mode](./detailed-view#timestamp).

## See Also

- [Detailed View](./detailed-view) — where the action menu Copy button lives
- [Tags](./tags) — how tags are formatted in the copied text
