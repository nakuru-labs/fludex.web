<!-- docs/.vitepress/theme/layouts/DocsLayout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import SiteLogo from '../components/SiteLogo.vue'
</script>

<template>
  <DefaultTheme.Layout>
<template #nav-bar-title-before>
      <SiteLogo :linked="false" />
    </template>
  </DefaultTheme.Layout>
</template>
