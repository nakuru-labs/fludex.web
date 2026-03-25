<!-- docs/.vitepress/theme/components/SiteFooter.vue -->
<script setup lang="ts">
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <span class="site-footer__copy">© 2025 Nakuru Labs</span>
      <nav class="site-footer__links">
        <a href="https://nakurulabs.com" class="site-footer__link" target="_blank" rel="noopener">nakurulabs.com</a>
        <a href="/guide/" class="site-footer__link">Docs</a>
        <a href="#" class="site-footer__link">Asset Store</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) var(--space-6);
  background: var(--color-bg);
}

.site-footer__inner {
  max-width: var(--content-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.site-footer__copy {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.site-footer__links {
  display: flex;
  gap: var(--space-5);
}

.site-footer__link {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.site-footer__link:hover {
  color: var(--color-text-primary);
}

@media (max-width: 480px) {
  .site-footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
