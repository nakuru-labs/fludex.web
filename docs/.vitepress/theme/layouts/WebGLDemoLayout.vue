<!-- docs/.vitepress/theme/layouts/WebGLDemoLayout.vue -->
<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import BokehBackground from '../components/BokehBackground.vue'
</script>

<template>
  <div class="demo-root">
    <BokehBackground />
    <SiteHeader />
    <main class="demo-main">
      <div class="demo-inner">
        <div class="demo-header">
          <div class="demo-badge">Interactive Preview</div>
          <h1 class="demo-title">
            <span class="accent">Try FludeX</span>
            <span class="heading"> — WebGL Demo</span>
          </h1>
          <p class="demo-description">
            Experience FludeX directly in your browser. Open the debug panel,
            explore modules, and see how runtime controls look and feel in a live Unity build.
          </p>
        </div>
        <p class="demo-hint">
          <span class="demo-hint__icon">👆</span>
          <span>Triple-tap the trigger at the bottom center of the screen, or press <kbd>`</kbd> to show / hide the debug panel. Select a log and press <kbd>Ctrl+C</kbd> / <kbd>Cmd+C</kbd> to copy it.</span>
        </p>
        <div class="demo-player">
          <iframe
            src="/webgl/index.html"
            class="demo-iframe"
            allowfullscreen
            title="FludeX WebGL Demo"
          />
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.demo-root {
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.demo-main {
  width: 100%;
  padding: var(--space-9) var(--space-6) var(--space-10);
}

.demo-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-7);
}

/* Header */
.demo-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  max-width: 640px;
}

.demo-badge {
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

.demo-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0;
}

.demo-description {
  font-family: var(--font-body);
  font-size: 1.0625rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Player */
.demo-player {
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  aspect-ratio: 16 / 9;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4);
}

.demo-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Hint */
.demo-hint {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  background: rgba(107, 92, 231, 0.06);
  border: 1px solid rgba(107, 92, 231, 0.18);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.demo-hint span:last-child {
  line-height: 1.6;
}

.demo-hint__icon {
  font-size: 1rem;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .demo-main {
    padding: var(--space-7) var(--space-5) var(--space-8);
  }

  .demo-title {
    font-size: 1.75rem;
  }

  .demo-description {
    font-size: 0.95rem;
  }
}
</style>
