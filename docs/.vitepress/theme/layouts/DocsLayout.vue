<!-- docs/.vitepress/theme/layouts/DocsLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import SiteLogo from '../components/SiteLogo.vue'
import BokehBackground from '../components/BokehBackground.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <BokehBackground />
    </template>
    <template #nav-bar-title-before>
      <SiteLogo :linked="false" />
    </template>
  </DefaultTheme.Layout>
</template>
