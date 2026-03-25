<!-- docs/.vitepress/theme/components/SiteHeader.vue -->
<script setup lang="ts">
import SiteLogo from './SiteLogo.vue'
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <SiteLogo />
      <nav class="site-header__nav">
        <a href="/guide/" class="site-header__link">Docs</a>
        <a href="https://u3d.as/3TW4" target="_blank" rel="noopener" class="site-header__link site-header__link--cta">Asset Store</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(19, 17, 31, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.site-header__inner {
  padding: 0 var(--space-6);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.site-header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.site-header__link {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.15s ease;
}

.site-header__link:hover {
  color: var(--color-text-primary);
}

.site-header__link--cta {
  padding: var(--space-2) var(--space-4);
  background: var(--color-accent);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  transition: background 0.15s ease, color 0.15s ease;
}

.site-header__link--cta:hover {
  background: var(--color-accent-light);
  color: var(--color-bg);
}
</style>
