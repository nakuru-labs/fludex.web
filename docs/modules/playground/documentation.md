---
title: Playground — Getting Started
layout: doc
---

# Playground — Documentation

## Installation

::: info
**Included in FludeX Core (Paid)**  
Playground is part of the **FludeX Core** package, available on the Unity Asset Store.  
No separate installation is required — it’s automatically included and initialized with Core.  
FludeX Core provides the shared runtime, WidgetBook framework, and module registration system that Playground uses.
:::

### Option A — Full FludeX Bundle
If you purchased the **FludeX Bundle**, Playground is already available inside the Core package.  
Simply open the FludeX panel in Play Mode to access it.

### Option B — Core Only
If you’re using only the **FludeX Core** package, Playground is still included.  
You can access and extend it programmatically or through your debug UI.

---

## Overview

Playground is a runtime environment for **game tweaking and experimentation** —  
a space to create and use in-game tools such as cheats, toggles, and gameplay modifiers.

It’s designed for **designers, QA, and developers** who want to test and adjust game behavior directly during runtime.

---

## Accessing Playground

Playground exposes its own `IWidgetsBook` interface:

```csharp
var module = Fludex.Instance.Module<FludexPlaygroundModule>();
var widgetsBook = module.WidgetsBook;

widgetsBook.AddPage();
widgetsBook.RemovePage();