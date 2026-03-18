# Lens — API & Customization

The Lens module (`FludexLensModule`) is fully extensible via code. You can inject custom widgets into the existing system tabs or create entirely new pages to visualize specific game data.

## Initialization 

```csharp
// Make sure to initialize FludeX before using any of the modules
FludeX.Instance.Initialize();

// Get reference to the Lens module
var lensModule = FludeX.Instance.Module<FludexLensModule>();
```

## Add Custom Widgets

```csharp
// a simple toggle property
private bool ToggleValue { get; set; }

// Create a custom widget with a toggle 
private Widget.Descriptor BuildCustomWidget() =>
    Widget.Create()
        .WithTitle("Custom Widget")
        .WithToggle("Custom Toggle", () => ToggleValue)
        .Build();
    

// Add a custom widget to the System page
lensModule.AddSystemWidget(BuildCustomWidget());

// Add a custom widget to the Display page
lensModule.AddDisplayWidget(BuildCustomWidget());

// Add a custom widget to the Build page
lensModule.AddBuildWidget(BuildCustomWidget());

// Add a custom widget to the Runtime page
lensModule.AddRuntimeWidget(BuildCustomWidget());
```

## Add Custom Page

```csharp
// Create a custom page
var customPage = new WidgetsPageDescriptor("Custom Page");

// Add a custom widget to the page
customPage.AddWidget(BuildCustomWidget());

// Add the custom page
lensModule.AddCustomPage(customPage);
```