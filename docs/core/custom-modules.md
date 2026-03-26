---
title: Custom Modules
---

# Custom Modules

Each module ships a `FludexModuleDescriptor` ScriptableObject asset — FludeX loads all descriptors at startup and activates the enabled ones. No code registration needed.

To build your own module, create **4 classes**, **2 UXML views**, and **1 descriptor asset**.

## Classes

```csharp
// 1. Model — holds the module's data and unique ID
public class MyModuleModel : FludexModuleModel
{
    public const string MODULE_ID = "myapp.module.example";
    public override string Id => MODULE_ID;
    public MyModuleModel(string moduleAssetsPath) : base(moduleAssetsPath) { }
}

// 2. Page presenter — the full-page view shown when the module is selected
public class MyPagePresenter : Presenter<MyModuleModel>
{
    public MyPagePresenter(IViewProvider viewProvider, MyModuleModel model)
        : base(viewProvider, model) { }
}

// 3. Shortcut presenter — the icon/button shown in the panel tab bar
public class MyShortcutPresenter : StatelessPresenter
{
    public MyShortcutPresenter(IViewProvider viewProvider) : base(viewProvider) { }
}

// 4. Module — wires everything together
public class MyModule : FludexModule<MyModuleModel, MyPagePresenter, MyShortcutPresenter>
{
    public MyModule(IFludexResolvingFactory resolvingFactory, FludexModuleDescriptor descriptor)
        : base(resolvingFactory, descriptor) { }
}
```

## UXML Assets

Place two UXML files under `Resources/FludeX/Modules/<ResourcesDirectoryName>/`:

- `ModuleShortcutView` — rendered in the panel tab bar
- `ModulePageView` — rendered as the full-screen page

## Module Descriptor

Create a `FludexModuleDescriptor` asset via **Assets → Create → FludeX → Module Descriptor**, then:

1. Drag your module's `.cs` file into the **Module Script** field
2. Fill in **Name** and **Resources Directory Name**
3. Place the asset anywhere under a `Resources/` folder

FludeX discovers and loads it automatically on the next run — no registration or code changes needed.

## Reference

See **Sample 03 – CustomModule** for a complete working example covering all four classes, both UXML files, and the descriptor asset setup.
