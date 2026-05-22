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
    videoSrc: '/videos/overview-module.mp4',
    poster: '/videos/overview-module.jpg',
    caption: 'Pre-built diagnostic dashboard — System, Display, Build, and Runtime tabs out of the box.',
  },
  {
    id: 'playground',
    label: 'Playground Module',
    videoSrc: '/videos/playground-module.mp4',
    poster: '/videos/playground-module.jpg',
    caption: 'Blank-canvas debug panel. Populate it entirely at runtime with your own pages and widgets.',
  },
  {
    id: 'console',
    label: 'Console Module',
    videoSrc: '/videos/console-module.mp4',
    poster: '/videos/console-module.png',
    caption: 'Full-featured runtime log viewer — real-time capture, filtering, search, and copy support.',
  },
]
