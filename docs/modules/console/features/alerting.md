---
title: Console Alerting
description: FludeX Console alerting — define rules that match incoming logs by severity and pattern, and get a toast notification the moment one fires.
head:
  - - meta
    - name: keywords
      content: Unity console alerts, Unity runtime log alerting, Unity debug console notifications, Unity log pattern matching, Unity exception alert toast
---

# Alerting

Stop hunting through log history by hand — define an alert rule once, and get a toast notification the instant a matching log appears.

<!-- TODO: demo video/gif -->

## How Matching Works

Each rule matches a log when **both** are true:

1. The rule's severity includes the log's severity — mapped as `Log → Info`, `Warning → Warning`, `Error`/`Assert → Error`, uncaught `Exception → Exception`.
2. The rule's pattern matches, using the same [search bar grammar](./filtering#search-bar-grammar) as the log search field — an empty pattern matches every log of that severity; otherwise it supports the `/tag` qualifier and `&&`-separated AND terms, or falls back to a plain case-insensitive substring check.

A single log can trigger multiple rules — each is handled independently.

## Notifications

Every match pushes a toast notification:

- The toast message is the **rule's name**, so repeated matches of the same rule merge into one toast instead of spamming one per log line.
- Toast color follows severity — info is blue, warning is orange, error/exception is red.
- Tapping the toast jumps straight to the triggering log in the list.
- A running **session hit count** is shown on the toast badge — how many times this rule has fired since the app started (or since it was last reset by editing a rule or clearing the console), not just how many times the toast itself reappeared.

If the console is already open and focused when a match fires, the toast is suppressed — you're already looking at it — but the hit count still increments.

## Alert Indicator in the Log List

When alerting and "Show in Logs History" are both enabled, matching rows get a small bell icon in the log list, so you can spot a hit even after the toast disappears.

## Filtering by Alert

Use `/alert` in the search bar to show only logs that match at least one enabled rule — see [Filtering](./filtering).

## Settings UI

The **ALERTING** settings widget offers:

- **Enable Alerting** toggle
- **Show in Logs History** toggle (controls the bell icon above)
- One row per existing rule — tap to edit its name, severity, pattern, and enabled state, or delete it
- **Create Alert** button to add a new rule (defaults to Error + Exception severity)

## Seeding Default Rules From Code

Supply a starter set of rules via `ConsoleModuleConfiguration.DefaultRules`, passed to `Initialize()` — each rule carries an `Id`, `Name`, `Severity`, `TextPattern`, and `IsEnabled` flag.

This only applies **once**, on first launch — the first time the app runs and no rules have ever been saved yet. It never overwrites or merges with rules a player has since created, edited, or removed.

## See Also

- [Filtering](./filtering) — the search grammar alert patterns reuse
- [Tags](./tags) — alert patterns can match against tag names via `/tag`
