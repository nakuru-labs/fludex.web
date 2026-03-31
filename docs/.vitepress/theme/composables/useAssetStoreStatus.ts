// docs/.vitepress/theme/composables/useAssetStoreStatus.ts
import { ref } from 'vue'

// Flip to false when the asset is live on the store — all buttons will work normally
const IN_REVIEW = true

const toastVisible = ref(false)
let dismissTimer: ReturnType<typeof setTimeout> | null = null

export function useAssetStoreStatus() {
  function handleAssetStoreClick(e: MouseEvent): void {
    window.gtag?.('event', 'asset_store_click', {
      event_category: 'engagement',
      event_source: (e.currentTarget as HTMLElement)?.closest('[data-cta-location]')?.getAttribute('data-cta-location') ?? 'unknown',
    })

    if (!IN_REVIEW) return
    e.preventDefault()
    toastVisible.value = true
    if (dismissTimer) clearTimeout(dismissTimer)
    dismissTimer = setTimeout(() => {
      toastVisible.value = false
    }, 4000)
  }

  return {
    inReview: IN_REVIEW,
    toastVisible,
    handleAssetStoreClick,
  }
}
