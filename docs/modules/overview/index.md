---
title: Overview Module
---

# Overview Module

A pre-built diagnostic dashboard that ships with a `FludexModuleDescriptor` asset — FludeX loads it automatically and the module appears in the panel on the next run.

## Built-in Tabs

| Tab | What it shows |
|---|---|
| **System** | Hardware and OS info: device, processor, graphics card, memory, and device capabilities |
| **Display** | Screen configuration: resolution, DPI, safe area, orientation, and fullscreen mode |
| **Build** | Application and build info: product name, version, platform, Unity version, scripting backend, and built-in scenes |
| **Runtime** | Live application state: quality level, frame timing, and currently loaded scenes |

## Extending the Overview Module

Inject custom widgets into any built-in tab, or add entirely new pages at runtime:

```csharp
private void Awake()
{
    FludeX.Instance.Initialize();

    if (!FludeX.Instance.TryGetModule<FludexOverviewModule>(out var overview))
        return;

    // Add a custom widget to an existing tab
    overview.AddSystemWidget(Widget.Create()
        .WithTitle("MY APP")
        .WithInfo("Environment", () => "Production")
        .Build());

    // Add an entirely new tab
    var page = new WidgetsPageDescriptor("Custom");
    page.AddWidget(Widget.Create()
        .WithTitle("FEATURE FLAGS")
        .WithToggle("Dark Mode", () => mySettings.darkMode)
        .Build());
    overview.AddCustomPage(page);
}
```

## API Reference

| Method | Description |
|---|---|
| `AddSystemWidget(descriptor)` | Append a widget to the **System** tab |
| `RemoveSystemWidget(widgetId)` | Remove a widget from the **System** tab by id |
| `AddDisplayWidget(descriptor)` | Append a widget to the **Display** tab |
| `RemoveDisplayWidget(widgetId)` | Remove a widget from the **Display** tab by id |
| `AddBuildWidget(descriptor)` | Append a widget to the **Build** tab |
| `RemoveBuildWidget(widgetId)` | Remove a widget from the **Build** tab by id |
| `AddRuntimeWidget(descriptor)` | Append a widget to the **Runtime** tab |
| `RemoveRuntimeWidget(widgetId)` | Remove a widget from the **Runtime** tab by id |
| `AddCustomPage(pageDescriptor)` | Add a new tab to the Overview module |
| `RemoveCustomPage(pageId)` | Remove a custom tab by id |
| `TryGetCustomPage(pageId, out page)` | Look up a custom tab by id — returns `false` if not found |

See **Sample 06 – Customization** and **Sample 08 – Showcase** for full examples.
