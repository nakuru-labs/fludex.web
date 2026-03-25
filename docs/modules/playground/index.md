---
title: Playground Module
---

# Playground Module

A blank-canvas debug panel with no pre-built pages. Populate it entirely at runtime with your own pages and widgets — useful for cheats, feature flags, test actions, or any ad-hoc debug controls, without writing a custom module.

## Usage

```csharp
private void Awake()
{
    FludeX.Instance.Initialize();

    if (!FludeX.Instance.TryGetModule<FludexPlaygroundModule>(out var playground))
        return;

    var page = new WidgetsPageDescriptor("My Controls");
    page.AddWidget(Widget.Create()
        .WithTitle("GAMEPLAY")
        .WithToggle("God Mode", () => godMode)
        .WithButton("Reload Scene", ButtonType.Accent, OnReloadPressed)
        .Build());

    playground.AddPage(page);
}
```

## API Reference

| Method | Description |
|---|---|
| `AddPage(pageDescriptor)` | Add a page to the Playground at runtime |
| `RemovePage(pageId)` | Remove a page by its stable string id |
| `TryGetPage(pageId, out page)` | Look up a page by id — returns `false` if not found |

See **Sample 07 – Getting Started** and **Sample 09 – Showcase** for full examples.
