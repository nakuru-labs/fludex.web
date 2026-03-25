// docs/.vitepress/theme/index.ts
import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PromoLayout from './layouts/PromoLayout.vue'
import DocsLayout from './layouts/DocsLayout.vue'
import './styles/tokens.css'
import './styles/base.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    if (frontmatter.value.layout === 'promo') {
      return h(PromoLayout)
    }
    return h(DocsLayout)
  },
}
