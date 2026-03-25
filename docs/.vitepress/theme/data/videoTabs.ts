// docs/.vitepress/theme/data/videoTabs.ts

export interface VideoTab {
  id: string
  label: string
  videoSrc: string
  poster: string
  caption?: string
}

export const videoTabs: VideoTab[] = [
  {
    id: 'overview',
    label: 'Overview Module',
    videoSrc: '',
    poster: '',
    caption: 'Pre-built diagnostic dashboard — System, Display, Build, and Runtime tabs out of the box.',
  },
  {
    id: 'playground',
    label: 'Playground Module',
    videoSrc: '',
    poster: '',
    caption: 'Blank-canvas debug panel. Populate it entirely at runtime with your own pages and widgets.',
  },
  {
    id: 'widgets',
    label: 'WidgetsBook',
    videoSrc: '',
    poster: '',
    caption: 'Toggles, sliders, buttons, selectors — a full widget library with live data binding.',
  },
  {
    id: 'trigger',
    label: 'Gesture Trigger',
    videoSrc: '',
    poster: '',
    caption: 'Triple-tap the on-screen hit area to open the panel. Works on every platform.',
  },
]
