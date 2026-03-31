<!-- docs/.vitepress/theme/components/VideoPlayer.vue -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  src: string
  poster: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const paused = ref(false)

function tryPlay() {
  const el = videoRef.value
  if (!el) return
  el.load()
  if (props.src) {
    el.play()
      .then(() => { paused.value = false })
      .catch(() => { paused.value = true })
  }
}

function onUserPlay() {
  const el = videoRef.value
  if (!el) return
  el.play()
    .then(() => { paused.value = false })
    .catch(() => {})
}

onMounted(() => {
  // set attributes programmatically for older iOS webkit
  const el = videoRef.value
  if (el) {
    el.setAttribute('playsinline', '')
    el.setAttribute('webkit-playsinline', '')
  }
  tryPlay()
})

watch(() => props.src, () => {
  tryPlay()
})
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

      <div class="video-player__viewport">
        <video
          ref="videoRef"
          class="video-player__video glow-behind"
          :poster="poster || undefined"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
        >
          <source v-if="src" :src="src" type="video/mp4" />
        </video>

        <!-- shown only when autoplay is blocked -->
        <button v-if="paused && src" class="video-player__play-btn" aria-label="Play video" @click="onUserPlay">
          <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <div v-if="!src" class="video-player__placeholder">
          <span>Video coming soon</span>
        </div>
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

.video-player__viewport {
  position: relative;
}

.video-player__video {
  width: 100%;
  height: auto;
  display: block;
}

/* custom play button overlay — shown only when autoplay blocked */
.video-player__play-btn {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  cursor: pointer;
  color: #fff;
  transition: background 0.15s ease;
}

.video-player__play-btn:hover {
  background: rgba(0, 0, 0, 0.55);
}

.video-player__play-btn svg {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
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
