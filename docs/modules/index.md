---
title: Modules
---

# Modules

FludeX modules are independent UPM packages that extend the debug panel with additional screens and functionality. Each module ships as a separate package and has its own `FludexModuleDescriptor` asset — FludeX loads all descriptors at startup and activates the enabled ones automatically.

## Available Modules

| Module | Status | Description |
|---|---|---|
| [Overview Module](/modules/overview/) | Available | Pre-built diagnostic dashboard with System, Display, Build, and Runtime tabs |
| [Playground Module](/modules/playground/) | Available | Blank-canvas panel you populate entirely at runtime |
| [Console Module](/modules/console/) | Coming soon | In-game log console |

## Building Your Own

You can create a fully custom module with its own screen and shortcut views. See [Custom Modules](/core/custom-modules) in the Core docs.
