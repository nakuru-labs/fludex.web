<!-- docs/.vitepress/theme/components/FeatureShowcase.vue -->
<script setup lang="ts">
import { useVideoTabs } from '../composables/useVideoTabs'
import TabBar from './TabBar.vue'
import VideoPlayer from './VideoPlayer.vue'

const { tabs, activeTab, selectTab, preloadTab } = useVideoTabs()
</script>

<template>
  <section class="feature-showcase">
    <div class="feature-showcase__inner">
      <h2 class="feature-showcase__heading">
        <span class="accent">See it in action.</span>
        <span class="heading"> Every module, live.</span>
      </h2>

      <TabBar
        :tabs="tabs"
        :active-id="activeTab.id"
        @select="selectTab"
        @mouseenter.native="preloadTab"
      />

      <VideoPlayer
        :src="activeTab.videoSrc"
        :poster="activeTab.poster"
      />

      <p v-if="activeTab.caption" class="feature-showcase__caption">
        {{ activeTab.caption }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.feature-showcase {
  padding: var(--space-9) var(--space-6);
  border-top: 1px solid var(--color-border);
}

.feature-showcase__inner {
  max-width: var(--content-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.feature-showcase__heading {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0;
  text-align: center;
}

.feature-showcase__caption {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-align: center;
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 560px) {
  .feature-showcase {
    padding: var(--space-7) var(--space-5);
  }
}
</style>
