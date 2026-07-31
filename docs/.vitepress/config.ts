// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd())
const gaId = env.VITE_GA_ID

export default defineConfig({
  title: 'FludeX',
  titleTemplate: ':title | FludeX — Unity Runtime Debug Panel',
  description: 'FludeX is a modular runtime debug panel for Unity — gesture-triggered, built on UI Toolkit. Add an in-game debug console, runtime inspector, and live controls to any Unity project without rebuilding.',
  base: '/',
  appearance: 'force-dark',

  sitemap: {
    hostname: 'https://fludex.dev',
  },

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
    // SEO
    ['meta', { name: 'keywords', content: 'Unity debug panel, Unity runtime debug, in-game console Unity, Unity debug console, Unity UI Toolkit debug, Unity debug overlay, runtime debug tool Unity, Unity developer tools, in-game debug tool, Unity game debugging, Unity mobile debug, debug panel Unity asset, UIToolkit runtime debug' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'FludeX' }],
    // JSON-LD structured data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'FludeX',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, iOS, Android, WebGL',
      description: 'Modular runtime debug panel for Unity — gesture-triggered in-game debug console, runtime inspector, and live widget controls. Built on UI Toolkit and AppUI.',
      url: 'https://fludex.dev',
      image: 'https://fludex.dev/og.png',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://u3d.as/3TW4',
      },
      keywords: 'Unity debug panel, in-game debug console, Unity runtime debug, UI Toolkit debug tool',
      softwareVersion: '1.4.0',
      releaseNotes: 'https://fludex.dev/core/changelog',
      documentation: 'https://fludex.dev/guide/',
    })],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'FludeX' }],
    ['meta', { property: 'og:title', content: 'FludeX — Runtime Debug Panel for Unity' }],
    ['meta', { property: 'og:description', content: 'Modular in-game debug panel for Unity. Gesture-triggered, UI Toolkit-based, with a runtime console, inspector, and live widget controls.' }],
    ['meta', { property: 'og:image', content: 'https://fludex.dev/og.png' }],
    ['meta', { property: 'og:url', content: 'https://fludex.dev' }],
    // Twitter / X
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'FludeX — Runtime Debug Panel for Unity' }],
    ['meta', { name: 'twitter:description', content: 'Modular in-game debug panel for Unity. Gesture-triggered, UI Toolkit-based, with a runtime console, inspector, and live widget controls.' }],
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
          { text: 'Core Settings', link: '/core/core-settings' },
          { text: 'Haptics', link: '/core/haptics' },
          { text: 'Custom Modules', link: '/core/custom-modules' },
          { text: 'Module Lifecycle', link: '/core/module-lifecycle' },
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
          { text: 'Tags', link: '/modules/console/features/tags' },
          { text: 'Filtering', link: '/modules/console/features/filtering' },
          { text: 'Alerting', link: '/modules/console/features/alerting' },
          { text: 'Detailed View', link: '/modules/console/features/detailed-view' },
          { text: 'Sharing', link: '/modules/console/features/sharing' },
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
