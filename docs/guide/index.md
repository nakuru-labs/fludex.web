---
title: Introduction
---

# Introduction

FludeX is a modular, in-game runtime debug panel for Unity — built to feel native on any device and designed with UX first.

Debugging a shipped or near-shipped build means you need a debug panel that actually runs on device, stays out of the way until you need it, and doesn't require rebuilding every time you add a new control. FludeX solves this with a modular architecture built on Unity UIToolkit and AppUI: install the modules you need, populate your panel at runtime, and open it with a configurable tap gesture — no hacks, no boilerplate.

## Packages

FludeX is split into independent UPM packages. Install only what you need.

| Package | Description |
|---|---|
| **Core** | Panel engine, gesture trigger, WidgetsBook widget library, descriptor-based module discovery, and reflection-based DI container |
| **Overview Module** | Pre-built diagnostic dashboard with System, Display, Build, and Runtime tabs |
| **Playground Module** | Blank-canvas debug panel you populate entirely at runtime |
| **Console Module** | *(Coming in a future update)* |

## Requirements

- Unity **2021.3.0f1** or later

## Dependencies

| Package | Version | Notes |
|---|---|---|
| `com.unity.dt.app-ui` | 2.1.6 | Installed automatically as a UPM dependency — no manual step required |
