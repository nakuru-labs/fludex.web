---
title: Console Filtering
description: FludeX Console filtering — log level toggles, collapse, and a search bar grammar supporting tag and boolean-AND qualifiers.
head:
  - - meta
    - name: keywords
      content: Unity console log filter, Unity log search runtime, Unity console search syntax, collapse duplicate logs Unity, Unity debug console log levels
---

# Filtering

Narrow down the log list with level toggles, duplicate collapsing, and a small search grammar that goes beyond plain substring matching.

<img src="/console/filtering.jpg" alt="Console filter bar with clear, collapse, search, and Info/Warning/Error count toggles" width="640" height="127" style="display: block; margin: 0 auto;" />

## Log Levels

Three toggles — **Info**, **Warning**, **Error** — sit in the filter bar, each with a live count badge. Toggle any of them off to hide that severity from the list.

## Collapse

When enabled (default on), consecutive logs with an identical message are merged into a single row with a repeat counter chip. Disable it in settings to see every log line individually.

## Search Bar Grammar

The search field supports more than plain text matching:

| Syntax | Behavior |
|---|---|
| `plain text` | Case-insensitive substring match against the message or any tag |
| `/tag <name>` | Restrict results to logs tagged with `name` (case-insensitive, exact match) |
| `/tag name1\|name2` | Same as above, but matches **any** of the pipe-separated tag names (OR) |
| `/alert` | Restrict results to logs that match at least one enabled [alert rule](./alerting) |
| `term1 && term2` | Require **all** AND-separated terms to match (each still a substring check) |

All of these combine freely. For example:

```
/tag net|http xxx && retry
```

filters to logs tagged `net` or `http`, further narrowed to messages containing both `xxx` and `retry`.

## Clear

The **Clear** action wipes the entire log history and resets list state, including collapse counters and alert session hit counts.

## See Also

- [Tags](./tags) — how tag chips are parsed and rendered
- [Alerting](./alerting) — rule matching reuses this same search grammar for its pattern field
