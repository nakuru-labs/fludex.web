---
title: Troubleshooting
---

# Troubleshooting

Known issues and workarounds. Each entry lists the affected FludeX version and Unity version so you can quickly confirm whether it applies to your setup.

---

## Android build fails — `cannot find symbol UnityPlayerGameActivity`

| | |
|---|---|
| **FludeX versions** | 1.0.0 and later |
| **Unity versions** | 2021.3.x |
| **Platform** | Android |
| **Root cause** | `com.unity.dt.app-ui` dependency |

### What's happening

The App UI package ships two Java activity files to support different Android entry points across Unity versions:

- `AppUIActivity.java` — extends `UnityPlayerActivity` (Unity 2021 and earlier)
- `AppUIGameActivity.java` — extends `UnityPlayerGameActivity` (Unity 2022+)

`UnityPlayerGameActivity` does not exist in Unity 2021. When both files are included in the Gradle build, the compiler tries to resolve `AppUIGameActivity.java` and fails with a cascade of "cannot find symbol" errors.

### Workaround

Exclude the incompatible file from the Android build by editing `mainTemplate.gradle` in your project (`Assets/Plugins/Android/mainTemplate.gradle`). If the file doesn't exist yet, create it via **Edit → Project Settings → Player → Publishing Settings → Custom Main Gradle Template**.

Add the `sourceSets` block inside the `android { }` section:

```gradle
android {
    // ... your existing config ...

    sourceSets {
        main {
            java {
                exclude '**/AppUIGameActivity.java'
            }
        }
    }
}
```

This tells Gradle to skip `AppUIGameActivity.java` during compilation. `AppUIActivity.java` — the correct entry point for Unity 2021 — remains included and everything builds normally.

### After applying the fix

Clean the build cache before rebuilding: **Edit → Preferences → External Tools → Regenerate project files**, then delete the `Library/Bee` folder and build again.
