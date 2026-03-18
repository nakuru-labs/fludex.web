import { defineConfig } from 'vitepress'
import { modules } from './modules';

const modulesDropdown = modules.map(m => (
    {text: m.name, link: m.base }
));

const changelogDropdown = [
  { text: 'Core', link: '/changelog/' },
  ...modules.map(m => ({ text: m.name, link: m.changelog }))
];

function buildSidebars() {
  const out: Record<string, any[]> = {};
  for (const m of modules) {
    out[m.base] = [
      {
        text: m.name,
        items: [
          { text: 'Overview', link: m.base },
          { text: 'Changelog', link: m.changelog }
        ]
      }
    ];
  }
  out['/changelog/'] = [{ text: 'Core', items: [{ text: 'Changelog', link: '/changelog/' }] }];
  return out;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FludeX",
  description: "Unity runtime debug & iteration toolkit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Modules', items: modulesDropdown },
      { text: 'Changelog', items: changelogDropdown }
    ],

    sidebar: buildSidebars(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/'
})
