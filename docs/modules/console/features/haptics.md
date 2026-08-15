---
title: Console Haptics
description: "FludeX Console haptics — direct-interaction and alert feedback, gated by platform availability and Core's global Haptics switch."
head:
  - - meta
    - name: keywords
      content: Unity console haptics, Unity haptic feedback console, Unity log copy haptics, Unity alert haptics, mobile haptic feedback Unity debug
---

# Haptics

Console wires haptic feedback into its own direct interactions and alert notifications, layered on top of Core's [Haptics](../../../core/haptics) system.

<!-- TODO: screenshot/video — HAPTICS settings section, including the "(Disabled Globally)" title state -->

## What's Wired In

- **Log copy** — long-press on mobile, and the detail view's copy action
- **Toolbar actions** — clear, collapse, filter chip toggles, search submit, search focus-in
- **Alert notifications** — fires only for a genuinely new alert match, not a repeat of one already on screen

## Settings

The **HAPTICS** section in Console Settings has two independent toggles:

| Toggle | Controls |
|---|---|
| General | Direct interactions — log copy, clear, filters |
| Alerting | Alert notification haptics |

## Availability

The whole HAPTICS section only appears if haptic feedback is actually possible on the device — same [platform gate](../../../core/haptics#platform-availability) as everywhere else in FludeX. On a Desktop build it can't produce any feedback, so the section doesn't appear at all.

## Disabled Globally

The section's own toggles are independent of — but still subordinate to — the master **Enabled** switch in [Core Settings](../../../core/core-settings). If that master switch is off:

- The section's title updates live to **"HAPTICS (Disabled Globally)"**.
- **General** and **Alerting** stay visible and toggleable, but produce no actual feedback while the master switch is off — the title exists so that's obvious at a glance instead of silently looking normal.
- Turning the master switch back on updates the title immediately.

## See Also

- [Core Haptics](../../../core/haptics) — the underlying per-domain haptics system Console builds on
- [Core Settings](../../../core/core-settings) — where the master Haptics switch lives
