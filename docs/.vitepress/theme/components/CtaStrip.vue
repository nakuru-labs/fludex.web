<!-- docs/.vitepress/theme/components/CtaStrip.vue -->
<script setup lang="ts">
</script>

<template>
  <section class="cta-strip">
    <div class="cta-strip__glow" aria-hidden="true" />
    <div class="cta-strip__inner">
      <h2 class="cta-strip__heading">
        <span class="accent">Ready to ship?</span>
        <span class="heading"> Add FludeX to your project.</span>
      </h2>
      <p class="cta-strip__sub">
        Available now on the Unity Asset Store. Requires Unity 2021.3.0f1 or later.
      </p>
      <a href="https://u3d.as/3TW4" target="_blank" rel="noopener" class="cta-strip__button">Get FludeX on Asset Store</a>
    </div>
  </section>
</template>

<style scoped>
.cta-strip {
  position: relative;
  overflow: hidden;
  padding: var(--space-10) var(--space-6);
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

.cta-strip__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse at center, var(--color-accent-glow) 0%, transparent 70%);
  pointer-events: none;
}

.cta-strip__inner {
  position: relative;
  max-width: var(--content-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  text-align: center;
}

.cta-strip__heading {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0;
}

.cta-strip__sub {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0;
}

.cta-strip__button {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: var(--color-accent);
  text-decoration: none;
  padding: var(--space-3) var(--space-7);
  border-radius: var(--radius-md);
  transition: background 0.15s ease, transform 0.15s ease;
}

.cta-strip__button:hover {
  background: var(--color-accent-light);
  color: var(--color-bg);
  transform: translateY(-1px);
}

@media (max-width: 560px) {
  .cta-strip {
    padding: var(--space-8) var(--space-5);
  }
}
</style>
