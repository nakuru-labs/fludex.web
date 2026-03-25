<!-- docs/.vitepress/theme/components/VideoPlayer.vue -->
<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  src: string
  poster: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const visible = ref(true)

watch(
  () => props.src,
  async () => {
    visible.value = false
    await nextTick()
    visible.value = true
    await nextTick()
    if (videoRef.value && props.src) {
      videoRef.value.load()
      videoRef.value.play().catch(() => {
        // autoplay blocked — user interaction required
      })
    }
  },
)
</script>

<template>
  <div class="video-player">
    <div class="video-player__frame">
      <Transition name="fade">
        <video
          v-if="visible"
          ref="videoRef"
          class="video-player__video glow-behind"
          :src="src || undefined"
          :poster="poster || undefined"
          autoplay
          muted
          loop
          playsinline
        />
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
  aspect-ratio: 16 / 9;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.video-player__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-player__placeholder {
  position: absolute;
  inset: 0;
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
