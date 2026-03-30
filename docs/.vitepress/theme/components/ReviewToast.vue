<!-- docs/.vitepress/theme/components/ReviewToast.vue -->
<script setup lang="ts">
import { useAssetStoreStatus } from '../composables/useAssetStoreStatus'

const { toastVisible } = useAssetStoreStatus()
</script>

<template>
  <Transition name="toast">
    <div v-if="toastVisible" class="review-toast" role="status" aria-live="polite">
      <span class="review-toast__icon">🕐</span>
      <span class="review-toast__text">
        FludeX is currently under Asset Store review — it will be available soon.
      </span>
    </div>
  </Transition>
</template>

<style scoped>
.review-toast {
  position: fixed;
  bottom: var(--space-7);
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  pointer-events: none;
}

.review-toast__icon {
  font-size: 1rem;
  line-height: 1;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
}
</style>
