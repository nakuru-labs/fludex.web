<!-- docs/.vitepress/theme/layouts/DocsLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import SiteLogo from '../components/SiteLogo.vue'
import ReviewToast from '../components/ReviewToast.vue'
import { useAssetStoreStatus } from '../composables/useAssetStoreStatus'

const { handleAssetStoreClick } = useAssetStoreStatus()
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-before>
      <SiteLogo :linked="false" />
    </template>
    <template #nav-bar-content-after>
      <a
        href="https://u3d.as/3TW4"
        target="_blank"
        rel="noopener"
        class="docs-nav-cta"
        data-cta-location="docs_nav"
        @click="handleAssetStoreClick"
      >Asset Store</a>
    </template>
    <template #layout-bottom>
      <ReviewToast />
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.docs-nav-cta {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
  background: var(--color-accent);
  text-decoration: none;
  padding: 5px 14px;
  border-radius: var(--radius-sm);
  transition: background 0.15s ease;
  white-space: nowrap;
}

.docs-nav-cta:hover {
  background: var(--color-accent-light);
}
</style>
