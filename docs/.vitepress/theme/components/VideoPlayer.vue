<!-- docs/.vitepress/theme/components/VideoPlayer.vue -->
<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps<{
  src: string
  poster: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const visible = ref(true)

function tryPlay() {
  const el = videoRef.value
  if (!el || !props.src) return
  el.load()
  el.play().catch(() => {
    // autoplay blocked — user interaction required
  })
}

onMounted(() => {
  tryPlay()
})

watch(
  () => props.src,
  async () => {
    visible.value = false
    await nextTick()
    visible.value = true
    await nextTick()
    tryPlay()
  },
)
</script>

<template>
  <div class="video-player">
    <div class="video-player__frame">
      <!-- macOS window chrome -->
      <div class="video-player__titlebar">
        <span class="titlebar-dot dot-close" />
        <span class="titlebar-dot dot-minimize" />
        <span class="titlebar-dot dot-fullscreen" />
      </div>

      <Transition name="fade">
        <video
          v-if="visible"
          ref="videoRef"
          class="video-player__video glow-behind"
          :poster="poster || undefined"
          autoplay
          muted
          loop
          playsinline
        >
          <source v-if="src" :src="src" type="video/mp4" />
        </video>
      </Transition>
      <div v-if="!src" class="video-player__placeholder">
        <span>Video coming soon</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-player {
  width: 100%;
}

.video-player__frame {
  position: relative;
  width: 100%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* macOS title bar */
.video-player__titlebar {
  flex-shrink: 0;
  height: 20px;
  background: var(--color-surface-raised);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 9px;
}

.titlebar-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot-close      { background: #ff5f57; }
.dot-minimize   { background: #febc2e; }
.dot-fullscreen { background: #28c840; }

.video-player__video {
  width: 100%;
  height: auto;
  display: block;
}

.video-player__placeholder {
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
