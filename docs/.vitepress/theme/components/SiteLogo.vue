<!-- docs/.vitepress/theme/components/SiteLogo.vue -->
<script setup lang="ts">
defineProps<{ linked?: boolean }>()
</script>

<template>
  <a v-if="linked !== false" href="/" class="site-logo">
    <img src="/fludex-logo.png" class="site-logo__mark" alt="" aria-hidden="true" />
    <span class="site-logo__text">Flude<span class="site-logo__x">X</span></span>
  </a>
  <div v-else class="site-logo">
    <img src="/fludex-logo.png" class="site-logo__mark" alt="" aria-hidden="true" />
    <span class="site-logo__text">Flude<span class="site-logo__x">X</span></span>
  </div>
</template>

<style scoped>
.site-logo {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
}

.site-logo__mark {
  height: calc(1.25rem + 2px);
  width: auto;
  display: block;
}

.site-logo__text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.75rem;
  font-weight: 300;
  color: var(--color-text-primary);
  letter-spacing: 0.01em;
}

.site-logo__x {
  color: var(--color-accent);
}
</style>
