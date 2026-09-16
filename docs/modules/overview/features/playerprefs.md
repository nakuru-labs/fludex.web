---
title: Overview PlayerPrefs
description: FludeX Overview PlayerPrefs — watch, edit, and clear the game's own PlayerPrefs keys at runtime, with encryption status and a one-tap clear-all.
head:
  - - meta
    - name: keywords
      content: Unity PlayerPrefs viewer, Unity PlayerPrefs editor runtime, Unity PlayerPrefs debug panel, Unity save data inspector, PlayerPrefs clear all Unity
---

# PlayerPrefs

Watch, edit, and clear the game's own `PlayerPrefs` directly from the panel — built on Core's [PlayerPrefs Access](../../../core/playerprefs) service.

<img src="/overview/playerprefs.jpg" alt="Overview module's PlayerPrefs tab, showing the WATCHING KEYS list, Manage keys, Encryption status, and Danger Zone sections" width="645" height="1192" style="display: block; margin: 0 auto;" />

## WATCHING KEYS

Add any PlayerPrefs key to the watch list to see it here, showing its live value and type at a glance.

Tap a watched key to:

- Set a new value
- Clear it
- Stop watching it

## Manage Keys

A separate drill-down for checking, setting, or clearing any key by name — with its own **Add to watch list** button if you decide it's worth tracking. Useful for a one-off look at a key without cluttering WATCHING KEYS long-term, or as a way to inspect a key before adding it.

## Encryption

An **Encryption** row reports whether the game has registered a custom `IFludexPlayerPrefsEncryptor` — see [Encryption](../../../core/playerprefs#encryption). This isn't FludeX encrypting anything itself: it's how the panel decrypts and displays the real value of a key the game already encrypts with its own scheme, instead of showing raw ciphertext. With none configured, values are shown exactly as stored.

## Danger Zone

A single card clears every PlayerPrefs entry for the game at once — not just keys this tab is watching or managing — behind a confirm/cancel dialog.

## See Also

- [PlayerPrefs Access](../../../core/playerprefs) — the underlying `IFludexPlayerPrefsService` this tab is built on
- [Encryption](../../../core/playerprefs#encryption) — how to tell FludeX about encryption the game already does
