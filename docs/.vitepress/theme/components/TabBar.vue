<!-- docs/.vitepress/theme/components/TabBar.vue -->
<script setup lang="ts">
import type { VideoTab } from '../data/videoTabs'

defineProps<{
  tabs: VideoTab[]
  activeId: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>

<template>
  <div class="tab-bar" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-bar__tab"
      :class="{ 'tab-bar__tab--active': tab.id === activeId }"
      role="tab"
      :aria-selected="tab.id === activeId"
      @click="emit('select', tab.id)"
      @mouseenter="emit('select', tab.id)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped>
.tab-bar {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: var(--space-1);
}

.tab-bar::-webkit-scrollbar {
  display: none;
}

.tab-bar__tab {
  flex-shrink: 0;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-4);
  cursor: pointer;
  transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
  white-space: nowrap;
}

.tab-bar__tab:hover {
  color: var(--color-text-secondary);
  background: var(--color-surface-raised);
}

.tab-bar__tab--active {
  color: var(--color-accent-light);
  background: var(--color-accent-glow);
  border-color: rgba(107, 92, 231, 0.3);
}
</style>
