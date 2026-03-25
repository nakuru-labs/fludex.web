// docs/.vitepress/theme/data/features.ts

export interface FeatureCard {
  id: string
  icon: string
  title: string
  description: string
}

export const features: FeatureCard[] = [
  {
    id: 'modular',
    icon: '◈',
    title: 'Modular architecture',
    description:
      'Install only what you need. Core, Overview, and Playground are independent UPM packages — no bloat, no unused code.',
  },
  {
    id: 'uitoolkit',
    icon: '⬡',
    title: 'UIToolkit-native',
    description:
      'Built on Unity UIToolkit and AppUI. The panel feels native on every platform — no legacy IMGUI, no OnGUI overhead.',
  },
  {
    id: 'cross-device',
    icon: '⊡',
    title: 'Any screen, any device',
    description:
      'Not limited to mobile. The panel adapts fluidly across phones, tablets, and desktops — scaling and repositioning to fit.',
  },
  {
    id: 'gesture',
    icon: '◎',
    title: 'Gesture-triggered',
    description:
      'Triple-tap the on-screen hit area to open the panel. Works on all platforms — no separate debug button in your UI.',
  },
  {
    id: 'binding',
    icon: '⟳',
    title: 'Live data binding',
    description:
      'Widgets stay in sync with your runtime values automatically. No manual refresh calls, no polling.',
  },
  {
    id: 'extensible',
    icon: '⊕',
    title: 'Built to extend',
    description:
      'Inject custom widgets into any built-in tab, add new pages at runtime, or build a fully custom module with your own UI.',
  },
]
