<!-- docs/.vitepress/theme/layouts/PromoLayout.vue -->
<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import FeatureShowcase from '../components/FeatureShowcase.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
</script>

<template>
  <div class="promo-root">
    <SiteHeader />
    <main class="promo-main">
      <HeroSection />
      <ClientOnly>
        <FeatureShowcase />
      </ClientOnly>
      <FeatureGrid />
    </main>
  </div>
</template>

<style scoped>
.promo-root {
  min-height: 100vh;
  background: var(--color-bg);
}

.promo-main {
  width: 100%;
}
</style>
