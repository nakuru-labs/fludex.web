<!-- docs/.vitepress/theme/components/HeroSection.vue -->
<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__badge">Unity Runtime Debug Tool</div>
      <h1 class="hero__headline">
        <span class="accent">Debug at runtime.</span><br />
        <span class="heading">No rebuilds. No hacks.</span>
      </h1>
      <p class="hero__subline">
        FludeX is a modular runtime debug panel for Unity. Describe your controls
        in code, get a fully-rendered debug UI with live data binding — no views
        to implement, no prefabs to wire up.
      </p>
      <div class="hero__actions">
        <a href="https://u3d.as/3TW4" target="_blank" rel="noopener" class="hero__cta">Get FludeX on Asset Store</a>
        <a href="/guide/" class="hero__secondary">Read the docs →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: var(--space-10) var(--space-6) var(--space-9);
}

.hero__inner {
  max-width: var(--content-width);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
}

.hero__badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.688rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.25);
  padding: var(--space-2) var(--space-4);
  border-radius: 4px;
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0;
}


.hero__subline {
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 680px;
  line-height: 1.7;
  margin: 0;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-2);
}

.hero__cta {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: var(--color-accent);
  text-decoration: none;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  transition: background 0.15s ease, transform 0.15s ease;
}

.hero__cta:hover {
  background: var(--color-accent-light);
  color: var(--color-bg);
  transform: translateY(-1px);
}

.hero__secondary {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.hero__secondary:hover {
  color: var(--color-text-primary);
}



@media (max-width: 640px) {
  .hero {
    padding: var(--space-8) var(--space-5) var(--space-7);
  }

  .hero__headline {
    font-size: 2.25rem;
  }

  .hero__subline {
    font-size: 1rem;
  }
}
</style>
