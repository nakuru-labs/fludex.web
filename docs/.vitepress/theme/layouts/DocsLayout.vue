<!-- docs/.vitepress/theme/layouts/DocsLayout.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import SiteLogo from '../components/SiteLogo.vue'

function onDocumentClick(e: MouseEvent) {
  const link = (e.target as HTMLElement).closest('a[href*="u3d.as"]')
  if (!link) return
  window.gtag?.('event', 'asset_store_click', {
    event_category: 'engagement',
    event_label: 'docs_nav',
  })
}

onMounted(() => document.addEventListener('click', onDocumentClick, true))
onUnmounted(() => document.removeEventListener('click', onDocumentClick, true))
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-before>
      <SiteLogo :linked="false" />
    </template>
  </DefaultTheme.Layout>
</template>
