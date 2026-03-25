<!-- docs/.vitepress/theme/layouts/PromoLayout.vue -->
<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import FeatureShowcase from '../components/FeatureShowcase.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import CtaStrip from '../components/CtaStrip.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BokehBackground from '../components/BokehBackground.vue'
</script>

<template>
  <div class="promo-root">
    <BokehBackground />
    <SiteHeader />
    <main class="promo-main">
      <HeroSection />
      <ClientOnly>
        <FeatureShowcase />
      </ClientOnly>
      <FeatureGrid />
      <CtaStrip />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.promo-root {
  min-height: 100vh;
  background: var(--color-bg);
  position: relative;
  z-index: 1;
}

.promo-main {
  width: 100%;
}
</style>
