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
  width: 580px;
  height: 460px;
  top: -8%;
  left: -10%;
  background: rgba(85, 42, 128, 0.30);
  filter: blur(90px);
}

/* top-right blob */
.bokeh__blob--2 {
  width: 420px;
  height: 340px;
  top: 5%;
  right: -5%;
  background: rgba(75, 38, 118, 0.20);
  filter: blur(100px);
}

/* mid-left blob */
.bokeh__blob--3 {
  width: 360px;
  height: 300px;
  top: 40%;
  left: -5%;
  background: rgba(72, 36, 110, 0.22);
  filter: blur(85px);
}

/* mid-right blob */
.bokeh__blob--4 {
  width: 400px;
  height: 300px;
  top: 50%;
  right: 5%;
  background: rgba(68, 34, 105, 0.18);
  filter: blur(100px);
}

/* bottom-center blob */
.bokeh__blob--5 {
  width: 340px;
  height: 260px;
  bottom: 5%;
  left: 35%;
  background: rgba(65, 32, 100, 0.20);
  filter: blur(80px);
}
</style>
