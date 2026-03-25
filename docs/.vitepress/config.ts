// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FludeX',
  description: 'Modular in-game runtime debug panel for Unity.',
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    ],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/guide/' },
      { text: 'Asset Store', link: '#' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' },
        ],
      },
      {
        text: 'Core',
        items: [
          { text: 'Overview', link: '/core/' },
          { text: 'Triggers', link: '/core/triggers' },
          { text: 'WidgetsBook', link: '/core/widgets-book' },
          { text: 'Custom Modules', link: '/core/custom-modules' },
          { text: 'Changelog', link: '/core/changelog' },
        ],
      },
      {
        text: 'Overview Module',
        items: [
          { text: 'Documentation', link: '/modules/overview/' },
          { text: 'Changelog', link: '/modules/overview/changelog' },
        ],
      },
      {
        text: 'Playground Module',
        items: [
          { text: 'Documentation', link: '/modules/playground/' },
          { text: 'Changelog', link: '/modules/playground/changelog' },
        ],
      },
      {
        text: 'Console Module',
        items: [
          { text: 'Documentation', link: '/modules/console/' },
          { text: 'Changelog', link: '/modules/console/changelog' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Samples', link: '/samples' },
        ],
      },
    ],

    socialLinks: [],
  },
})
