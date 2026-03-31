<!-- docs/.vitepress/theme/components/VideoPlayer.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  poster: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const paused = ref(false)

watch(videoRef, (el) => {
  if (!el) return
  el.setAttribute('playsinline', '')
  el.setAttribute('webkit-playsinline', '')
  setTimeout(() => {
    if (el.paused) paused.value = true
  }, 500)
})

function onPlaying() { paused.value = false }
function onPause()   { paused.value = true }

function onUserPlay() {
  videoRef.value?.play().catch(() => {})
}

function onFullscreen() {
  const el = videoRef.value
  if (!el) return
  if (el.requestFullscreen) {
    el.requestFullscreen()
  } else if ((el as any).webkitEnterFullscreen) {
    // iOS Safari
    (el as any).webkitEnterFullscreen()
  }
}
</script>

<template>
  <div class="video-player">
    <div class="video-player__frame">
      <div class="video-player__titlebar">
        <span class="titlebar-dot dot-close" />
        <span class="titlebar-dot dot-minimize" />
        <span class="titlebar-dot dot-fullscreen" />
      </div>

      <div class="video-player__viewport">
        <video
          v-if="src"
          :key="src"
          ref="videoRef"
          class="video-player__video"
          :src="src"
          :poster="poster || undefined"
          autoplay
          muted
          loop
          playsinline
          @playing="onPlaying"
          @pause="onPause"
        />

        <div v-if="!src" class="video-player__placeholder">
          <span>Video coming soon</span>
        </div>

        <button
          v-if="src"
          class="video-player__fullscreen-btn"
          aria-label="Fullscreen"
          @click="onFullscreen"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </button>

        <button
          v-if="paused && src"
          class="video-player__play-btn"
          aria-label="Play video"
          @click="onUserPlay"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
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

.video-player__viewport {
  position: relative;
}

.video-player__video {
  width: 100%;
  height: auto;
  display: block;
}

.video-player__play-btn {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  border: none;
  cursor: pointer;
  color: #fff;
  transition: background 0.15s ease;
}

.video-player__play-btn:hover {
  background: rgba(0, 0, 0, 0.6);
}

.video-player__fullscreen-btn {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  opacity: 0;
  transition: opacity 0.15s ease;
}

.video-player__viewport:hover .video-player__fullscreen-btn {
  opacity: 1;
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
</style>
