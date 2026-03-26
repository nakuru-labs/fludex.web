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
      'Each module is independently scoped and self-contained. Extend your debug panel by adding new modules as your project grows.',
  },
  {
    id: 'uitoolkit',
    icon: '⬡',
    title: 'UIToolkit & AppUI',
    description:
      'Built on the same UIToolkit and AppUI stack Unity itself ships with. Consistent, crisp, and platform-native without extra integration.',
  },
  {
    id: 'cross-device',
    icon: '⊡',
    title: 'Any screen, any device',
    description:
      'Not limited to mobile. The panel adapts fluidly across phones, tablets, and desktops — scaling and repositioning to fit.',
  },
  {
    id: 'trigger',
    icon: '◎',
    title: 'Configurable trigger',
    description:
      'Tap, keyboard, composite, or none. Swap the default trigger for your own implementation or control the panel directly from code.',
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
    title: 'Declarative widget API',
    description:
      'Describe your controls in code — what to show, what to bind, what to call. FludeX handles the entire presentation layer out of the box. No views to implement, no UI to wire up.',
  },
]
