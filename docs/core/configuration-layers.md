---
title: Configuration Layers
---

# Configuration Layers

A FludeX setting can get its starting value from up to four places. They're listed here from the lowest priority to the highest — a higher layer wins over everything below it.

| Layer | Where it comes from | Used when |
|---|---|---|
| **0 — Built-in defaults** | Values built into FludeX itself | Nothing above exists |
| **1 — Editor defaults** | What you set in the [Editor Settings window](./editor-settings) | You didn't pass a configuration object to `Initialize()` |
| **2 — Code configuration** | The `FludexConfig` (Core) or `ConsoleModuleConfiguration` (Console) you pass to `Initialize()` | You passed one |
| **3 — User settings** | What a player or tester changes in the settings UI on their device | They changed that particular setting |

Layers 0, 1 and 2 are alternatives: they decide the **default** (also called the *seed*) for a setting. Layer 3 is applied on top of whichever default was chosen.

## Layer 0 — Built-in defaults

The values hardcoded in FludeX. You get them when neither code configuration nor Editor defaults are present — for example in a new project where the Editor Settings window has never been opened, or when the Editor defaults file is missing or can't be read (Console ignores an unreadable file and logs a warning).

## Layer 1 — Editor defaults

Everything you configure in the [Editor Settings window](./editor-settings). The values are stored in your project's `ProjectSettings` folder and copied into the build automatically, so a device gets them without you writing any code. Use this layer for the defaults your whole team should share.

Editor defaults are read once when FludeX starts, so a change made in the window takes effect the next time the app (or Play Mode) starts.

## Layer 2 — Code configuration

The configuration object you pass to `Initialize()`:

```csharp
FludeX.Instance.Initialize(new FludexConfig
{
    Haptics = new FludexHapticsConfiguration { Enabled = false }
});
```

::: warning A configuration object replaces the Editor defaults — it doesn't layer on top
When you pass a `FludexConfig`, FludeX uses it **instead of** the Core Editor defaults, not together with them. Any value your object doesn't set falls back to the built-in default (layer 0), **not** to what's configured in the Editor window. The same holds for Console: once you pass a `ConsoleModuleConfiguration`, the Console Editor defaults are no longer used.

If you want the Editor defaults to apply, don't pass a configuration object for that scope.
:::

Example: the Console Editor defaults set a log history capacity of 3000. Your code passes `new ConsoleModuleConfiguration { CollapseLogs = false }`. The capacity on a fresh install is then the built-in 1500, not 3000, because the Editor defaults weren't used at all.

Core and Console are independent: passing a `FludexConfig` doesn't affect whether Console uses its Editor defaults, and the other way around.

## Layer 3 — User settings

Whatever the user changes in a settings UI at runtime — Core Settings, Console Settings — is saved on the device and wins over the default. See [Core Settings](./core-settings#persistence-vs-fludexconfig) and [Persistent Storage](./persistent-storage).

Only the values the user actually changed are stored. Every setting they haven't touched keeps following the default, so changing a default in a later release (in the Editor window, or in your code) reaches existing installs too. A value changed back to equal the default is dropped from the file and follows the default again.

### Reset

**Reset Settings** (in the Danger Zone of Core Settings and Console Settings) clears the user's stored changes. Every setting goes back to the default that layers 0–2 chose for it: your code configuration if you pass one, otherwise the Editor defaults, otherwise the built-in values. It doesn't go to the Editor defaults specifically.

## The exception: default trigger

The type of trigger a device opens FludeX with is chosen separately from `FludexConfig`. In order, the first one that applies wins:

1. A trigger you pass explicitly, as in `Initialize(trigger)` — see [Triggers](./triggers).
2. The **Default Trigger** set in the [Editor Settings window](./editor-settings), if any. It applies even when you pass your own `FludexConfig`, because the trigger isn't part of that object.
3. The trigger this device used the last time it ran FludeX — so installs that predate the setting keep the trigger they already had.
4. The [Sticky Trigger](./sticky-trigger), for a brand-new install with nothing configured.

The keyboard trigger is added alongside whichever of 2–4 is chosen.
