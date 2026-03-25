<!-- docs/.vitepress/theme/components/BokehBackground.vue -->
<template>
  <div class="bokeh" aria-hidden="true">
    <div class="bokeh__blob bokeh__blob--1" />
    <div class="bokeh__blob bokeh__blob--2" />
    <div class="bokeh__blob bokeh__blob--3" />
    <div class="bokeh__blob bokeh__blob--4" />
    <div class="bokeh__blob bokeh__blob--5" />
  </div>
</template>

<style scoped>
.bokeh {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.bokeh__blob {
  position: absolute;
  border-radius: 50%;
}

/* top-left large blob */
.bokeh__blob--1 {
  width: 600px;
  height: 480px;
  top: -10%;
  left: -8%;
  background: rgba(85, 42, 128, 0.28);
  filter: blur(90px);
}

/* mid-left blob */
.bokeh__blob--2 {
  width: 380px;
  height: 300px;
  top: 42%;
  left: -6%;
  background: rgba(72, 36, 110, 0.22);
  filter: blur(80px);
}

/* bottom-left blob */
.bokeh__blob--3 {
  width: 320px;
  height: 260px;
  top: 72%;
  left: 8%;
  background: rgba(65, 32, 100, 0.18);
  filter: blur(75px);
}

/* top-center subtle blob */
.bokeh__blob--4 {
  width: 450px;
  height: 320px;
  top: -8%;
  left: 28%;
  background: rgba(70, 35, 108, 0.13);
  filter: blur(100px);
}

/* center-right faint blob */
.bokeh__blob--5 {
  width: 280px;
  height: 220px;
  top: 50%;
  left: 42%;
  background: rgba(60, 30, 95, 0.10);
  filter: blur(85px);
}
</style>
