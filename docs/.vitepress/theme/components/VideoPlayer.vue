<!-- docs/.vitepress/theme/components/VideoPlayer.vue -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  src: string
  poster: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const paused = ref(false)
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
})

// desktop only: watch for tab switches and reload
watch(videoRef, (el) => {
  if (!el || isMobile.value) return
  el.setAttribute('playsinline', '')
  setTimeout(() => {
    if (el.paused) paused.value = true
  }, 500)
})

function onPlaying() { paused.value = false }
function onPause()   { paused.value = true }

function onUserPlay() {
  const el = videoRef.value
  if (!el) return
  el.play().catch(() => {})
}
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

        <!-- mobile: poster + tap opens system player -->
        <a
          v-if="isMobile && src"
          :href="src"
          target="_blank"
          rel="noopener"
          class="video-player__mobile-tap"
        >
          <img :src="poster" class="video-player__poster" alt="Video preview" />
          <span class="video-player__tap-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </a>

        <!-- desktop: autoplay inline -->
        <video
          v-else-if="src"
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

        <!-- desktop: custom play button when autoplay blocked -->
        <button
          v-if="!isMobile && paused && src"
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

/* mobile tap target */
.video-player__mobile-tap {
  display: block;
  position: relative;
  line-height: 0;
}

.video-player__poster {
  width: 100%;
  height: auto;
  display: block;
}

.video-player__tap-icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  transition: background 0.15s ease;
}

.video-player__mobile-tap:active .video-player__tap-icon {
  background: rgba(0, 0, 0, 0.55);
}

.video-player__tap-icon svg {
  filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6));
}

/* desktop video */
.video-player__video {
  width: 100%;
  height: auto;
  display: block;
}

.video-player__play-btn {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
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
