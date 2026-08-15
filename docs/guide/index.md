---
title: Introduction
description: Learn what FludeX is — a modular runtime debug panel for Unity built on UI Toolkit. Explore modules, requirements, and how to get started with in-game debugging.
head:
  - - meta
    - name: keywords
      content: FludeX introduction, Unity runtime debug panel, Unity UI Toolkit debug tool, in-game debug panel Unity, Unity developer tools overview
---

# Introduction

FludeX is a modular runtime debug panel for Unity — built on UIToolkit and AppUI, designed with UX first.

Debugging on device means you need a panel that actually runs at runtime, stays out of the way until you need it, and doesn't require rebuilding every time you add a new control. FludeX solves this with a declarative widget API: describe your controls in code, get a fully-rendered debug UI with live data binding — no views to implement, no boilerplate.

## Modules

FludeX uses a modular architecture — each module is independently scoped with its own API and UI. New modules can be added as they become available, or you can build your own with the same ease.

| Package | Description |
|---|---|
| **Core** | Panel engine, gesture trigger, WidgetsBook widget library, descriptor-based module discovery, and reflection-based DI container |
| **Overview Module** | Pre-built diagnostic dashboard with System, Display, Build, and Runtime tabs |
| **Playground Module** | Blank-canvas debug panel you populate entirely at runtime |
| **Console Module** | Full-featured runtime log viewer with filtering, search, and copy support |

## Requirements

- Unity **2022.3** or later

## Dependencies

| Package | Version | Notes |
|---|---|---|
| `com.unity.dt.app-ui` | 2.1.12 | Installed automatically as a UPM dependency — no manual step required |
