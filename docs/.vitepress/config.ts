// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd())
const gaId = env.VITE_GA_ID

export default defineConfig({
  title: 'FludeX',
  description: 'Modular in-game runtime debug panel for Unity.',
  base: '/',
  appearance: false,

  head: [
    // Fonts
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&family=Sora:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    ],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'FludeX' }],
    ['meta', { property: 'og:title', content: 'FludeX — Runtime Debug Tool for Unity' }],
    ['meta', { property: 'og:description', content: 'Modular in-game debug panel for Unity. Gesture-triggered, device-native, and built to extend.' }],
    ['meta', { property: 'og:image', content: 'https://fludex.dev/og.png' }],
    ['meta', { property: 'og:url', content: 'https://fludex.dev' }],
    // Twitter / X
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'FludeX — Runtime Debug Tool for Unity' }],
    ['meta', { name: 'twitter:description', content: 'Modular in-game debug panel for Unity. Gesture-triggered, device-native, and built to extend.' }],
    ['meta', { name: 'twitter:image', content: 'https://fludex.dev/og.png' }],
    // Google Analytics
    ...(gaId
      ? [
          ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` }],
          ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`],
        ] as [string, Record<string, string>][]
      : []),
  ],

  themeConfig: {
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/guide/' },
      { text: 'Asset Store', link: 'https://u3d.as/3TW4', target: '_blank', rel: 'noopener' },
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
