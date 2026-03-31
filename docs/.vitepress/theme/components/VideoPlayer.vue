<!-- docs/.vitepress/theme/components/VideoPlayer.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  poster: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const paused = ref(false)
const errorMsg = ref('')

// fires whenever videoRef changes — on mount and on every :key recreation (tab switch)
watch(videoRef, (el) => {
  if (!el) return

  // ensure inline playback on all iOS versions
  el.setAttribute('playsinline', '')
  el.setAttribute('webkit-playsinline', '')

  // after a short delay, check if autoplay was blocked
  setTimeout(() => {
    if (el.paused) paused.value = true
  }, 500)
})

function onPlaying() {
  paused.value = false
  errorMsg.value = ''
}

function onPause() {
  paused.value = true
}

function onVideoError(e: Event) {
  const el = e.target as HTMLVideoElement
  const err = el.error
  errorMsg.value = err
    ? `MediaError ${err.code}: ${err.message || '(no message)'}`
    : 'unknown video error'
}

function onUserPlay() {
  const el = videoRef.value
  if (!el) return
  el.play()
    .then(() => { paused.value = false })
    .catch((e: Error) => { errorMsg.value = `play() failed: ${e.message}` })
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
        <!--
          :key="src" — recreates the element on tab switch so native autoplay
          fires fresh each time; no programmatic load()/play() calls needed
        -->
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
          webkit-playsinline
          @playing="onPlaying"
          @pause="onPause"
          @error="onVideoError"
        />

        <div v-if="!src" class="video-player__placeholder">
          <span>Video coming soon</span>
        </div>

        <!-- shown when autoplay is blocked -->
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

        <!-- debug bar: remove before launch -->
        <div v-if="errorMsg" class="video-player__debug">{{ errorMsg }}</div>
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

/* custom play button — only shown when autoplay is blocked */
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

.video-player__debug {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 10px;
  background: rgba(220, 38, 38, 0.9);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  line-height: 1.4;
  word-break: break-all;
}
</style>
