// docs/.vitepress/theme/composables/useVideoTabs.ts
import { ref, computed } from 'vue'
import { videoTabs, type VideoTab } from '../data/videoTabs'

export function useVideoTabs() {
  const activeIndex = ref(0)

  const activeTab = computed<VideoTab>(() => videoTabs[activeIndex.value])

  function selectTab(id: string): void {
    const index = videoTabs.findIndex((t) => t.id === id)
    if (index !== -1) activeIndex.value = index
  }

  function preloadTab(id: string): void {
    const tab = videoTabs.find((t) => t.id === id)
    if (!tab?.videoSrc) return
    if (typeof document === 'undefined') return

    const existing = document.querySelector(`link[rel="preload"][href="${tab.videoSrc}"]`)
    if (existing) return

    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'video'
    link.href = tab.videoSrc
    document.head.appendChild(link)
  }

  return {
    tabs: videoTabs,
    activeTab,
    activeIndex,
    selectTab,
    preloadTab,
  }
}
