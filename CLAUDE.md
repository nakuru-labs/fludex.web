# CLAUDE.md — fludex.dev

You are a frontend architect working on **fludex.dev** — the documentation and
promo site for FludeX, a Unity runtime debug tool published on the Unity Asset Store
by Nakuru Labs. Stack: **Vue 3 + VitePress**, deployed via GitHub Pages.

---

## Project Context

- **Product:** FludeX — modular in-game runtime debug panel for Unity
- **Publisher:** Nakuru Labs (nakurulabs.com) — use "we" in all copy, never a personal name
- **Two surfaces:** promo landing page (`/`) and docs site (`/docs/`)
- **Asset Store listing:** source of truth for purchase CTA links
- **Visual identity:** dark atmospheric, purple accent — matches the FludeX Unity UI aesthetic

---

## Design System Tokens

All values live in `styles/tokens.css` as CSS custom properties. **Never hardcode.**

### Colors

    /* Backgrounds */
    --color-bg:              #13111f;   /* page background — dark desaturated navy */
    --color-surface:         #1a1825;   /* panel / card base */
    --color-surface-raised:  #222030;   /* elevated widget cards */
    --color-border:          #2e2b3e;   /* dividers, card outlines */

    /* Accent */
    --color-accent:          #6b5ce7;   /* primary purple — buttons, active tabs */
    --color-accent-light:    #9b8ff5;   /* headline first-word color */
    --color-accent-glow:     rgba(107, 92, 231, 0.18); /* ambient glow behind mockups */

    /* Text */
    --color-text-primary:    #ffffff;
    --color-text-heading:    #e8e4ff;   /* headline second-word / phrase */
    --color-text-secondary:  #c5c0d8;   /* subtitles, body */
    --color-text-muted:      #8b8a9e;   /* labels, descriptions */

    /* Functional */
    --color-toggle-on:       #5b4de0;
    --color-slider-track:    #4a3fd4;

### Typography

    --font-display: 'Sora', sans-serif;          /* headlines */
    --font-body:    'DM Sans', sans-serif;        /* body, UI labels */
    --font-mono:    'JetBrains Mono', monospace;  /* code blocks */

### Headline pattern — two-color split, enforced on all section titles

Every section headline follows this structure:
first phrase in `--color-accent-light`, second phrase in `--color-text-heading`.

    <h2>
      <span class="accent">Open canvas.</span>
      <span class="heading">Fill it with your own.</span>
    </h2>

### Ambient glow — applied behind all UI mockup screenshots

    .glow-behind {
      filter: drop-shadow(0 0 60px var(--color-accent-glow));
    }

---

## Architecture Principles

### Layer separation

    composables/      — all stateful logic, data fetching, reactive state (useX naming)
    components/       — pure presentational; props in, events out, no business logic
    layouts/          — VitePress theme slot overrides
    data/             — static structured content as plain TS (features, video manifest,
                        nav config, API reference tables) — never hardcoded in templates
    styles/           — tokens.css is the single source of truth for all visual values;
                        scoped <style> only for component-local deviations

### Vue 3 conventions

- `<script setup>` everywhere — no Options API
- Props typed with TypeScript interfaces, never `any`
- Composables own all side effects and reactive state
- Components are stateless unless state is purely local UI (open/closed, hover)
- `defineProps` / `defineEmits` / `defineExpose` always explicit

### VitePress-specific

- Extend the default theme via `theme/index.ts` — never fork it
- Frontmatter drives page-level config — keep `.md` files pure content, no inline Vue logic
- Heavy interactive components wrapped in `<ClientOnly>`

---

## Video Tab Component Architecture

The promo hero/feature section uses a tabbed video player — each tab maps to a
feature demo video (reference: SRDebugger feature showcase pattern).

### Data shape — `data/videoTabs.ts`

    export interface VideoTab {
      id: string
      label: string      // tab button label
      videoSrc: string   // path or URL to .mp4/.webm
      poster: string     // fallback image while video loads
      caption?: string   // optional subtitle under the player
    }

### Component tree

    FeatureShowcase.vue      ← orchestrator; owns activeTab state via composable
      TabBar.vue             ← renders tab buttons; emits 'select'
      VideoPlayer.vue        ← receives :src :poster; handles autoplay/loop

### Composable — `composables/useVideoTabs.ts`

- Owns `activeIndex` ref
- Exposes `activeTab`, `selectTab(id)`, `tabs`
- Preloads next video on tab hover (avoids rebuffering cost)

### Behavior contract

- Tab switch: CSS opacity crossfade, no JS animation library
- Active tab video: autoplays muted + loops
- Inactive tab video: paused but not unloaded (avoids reload cost on revisit)
- Tab bar: scrolls horizontally on mobile if tabs overflow
- Implementation: native `<video>` only — no external video library

---

## Site Structure

### Promo (`/`) — conversion-focused, SSG-friendly

- Hero: headline + subline + Asset Store CTA button
- `FeatureShowcase`: tabbed video player — primary wow moment
- Feature grid: static cards driven from `data/features.ts`
- Asset Store CTA strip (bottom)
- Components are purely presentational, data-driven from `data/` files

### Docs (`/docs/`) — VitePress native

- Markdown-first; sidebar driven by VitePress config
- Vue components only for interactive demos or complex API reference tables
- Source of truth content: `index.md` in the project root

---

## Content Reference

The canonical product content (features, API, modules, samples, installation) lives
in `index.md` at the project root. When generating doc pages or promo copy, derive
all factual claims from that file — do not invent capabilities.

Key facts to preserve accurately:
- Requires Unity 2021.3.0f1 or later
- Depends on `com.unity.dt.app-ui` 2.1.6 (auto-installed via UPM)
- Three packages: Core, Overview Module, Playground Module
- Eight samples across all modules
- Brand voice: "we" — never a personal name

---

## Pre-generation Checklist

Before writing any code, confirm:
1. Which surface — promo or docs?
2. What artifact type — component, composable, layout, or data file?
3. Needs reactivity, or static/SSG?
4. Composes or extends an existing piece?

## Output Conventions

- File path as a comment on line 1
- TypeScript strict mode assumed throughout
- No inline styles — CSS custom properties or scoped `<style>` only
- Emit complete files unless a targeted patch is explicitly requested
- When generating copy: two-color headline pattern, "we" voice, no personal names
