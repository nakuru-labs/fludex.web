<!-- docs/.vitepress/theme/components/FeatureGrid.vue -->
<script setup lang="ts">
import { features } from '../data/features'
</script>

<template>
  <section class="feature-grid">
    <div class="feature-grid__inner">
      <h2 class="feature-grid__heading">
        <span class="accent">Built different.</span>
        <span class="heading"> Designed to ship.</span>
      </h2>
      <div class="feature-grid__cards">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="feature-card"
        >
          <div class="feature-card__icon">{{ feature.icon }}</div>
          <h3 class="feature-card__title">{{ feature.title }}</h3>
          <p class="feature-card__description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-grid {
  padding: var(--space-9) var(--space-6);
  border-top: 1px solid var(--color-border);
}

.feature-grid__inner {
  max-width: var(--content-width);
  margin: 0 auto;
}

.feature-grid__heading {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0 0 var(--space-7);
  text-align: center;
}

.feature-grid__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.feature-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: border-color 0.15s ease, background 0.15s ease;
}

.feature-card:hover {
  border-color: rgba(107, 92, 231, 0.4);
  background: var(--color-surface-raised);
}

.feature-card__icon {
  font-size: 1.5rem;
  color: var(--color-accent-light);
  line-height: 1;
}

.feature-card__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-heading);
  margin: 0;
}

.feature-card__description {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 900px) {
  .feature-grid__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .feature-grid {
    padding: var(--space-7) var(--space-5);
  }

  .feature-grid__cards {
    grid-template-columns: 1fr;
  }
}
</style>
