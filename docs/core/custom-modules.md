---
title: Custom Modules
---

# Custom Modules

Each module ships a `FludexModuleDescriptor` ScriptableObject asset — FludeX loads all descriptors at startup and activates the enabled ones. To build your own module, implement 4 C# classes and place 2 UXML assets in the right location.

## What You Need to Implement

| Artifact | Description |
|---|---|
| **Model** | Holds the data your module displays or controls |
| **PagePresenter** | Drives the main panel screen — binds model data to UXML |
| **ShortcutPresenter** | Drives the small shortcut view shown in the panel tab bar |
| **Module** | Entry point — wires the model, presenters, and lifecycle together |

## UXML Assets

Place two UXML files in a `Resources/FludeX/Modules/` subfolder inside your package or project:

- `PageView.uxml` — the main screen layout
- `ShortcutView.uxml` — the tab bar shortcut layout

## Module Descriptor

Create a `FludexModuleDescriptor` asset via **Assets → Create → FludeX → Module Descriptor**, then assign your Module type and UXML paths. FludeX discovers and loads it automatically on the next run.

## Reference

See **Sample 03 – CustomModule** for a complete working example covering all four classes, both UXML files, and the descriptor asset setup.
