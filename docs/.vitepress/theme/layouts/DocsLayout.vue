<!-- docs/.vitepress/theme/layouts/DocsLayout.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import SiteLogo from '../components/SiteLogo.vue'
import ReviewToast from '../components/ReviewToast.vue'
import { useAssetStoreStatus } from '../composables/useAssetStoreStatus'

const { handleAssetStoreClick } = useAssetStoreStatus()

function onDocumentClick(e: MouseEvent) {
  const link = (e.target as HTMLElement).closest('a[href="https://u3d.as/3TW4"]')
  if (!link) return
  if (!link.hasAttribute('data-cta-location')) {
    (link as HTMLElement).setAttribute('data-cta-location', 'docs')
  }
  handleAssetStoreClick(e)
}

onMounted(() => document.addEventListener('click', onDocumentClick))
onUnmounted(() => document.removeEventListener('click', onDocumentClick))
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-before>
      <SiteLogo :linked="false" />
    </template>
    <template #layout-bottom>
      <ReviewToast />
    </template>
  </DefaultTheme.Layout>
</template>
