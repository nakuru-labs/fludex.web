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
  width: 620px;
  height: 500px;
  top: -10%;
  left: -8%;
  background: rgba(90, 45, 140, 0.50);
  filter: blur(90px);
}

/* upper-center blob */
.bokeh__blob--2 {
  width: 480px;
  height: 380px;
  top: 8%;
  left: 20%;
  background: rgba(80, 40, 125, 0.42);
  filter: blur(100px);
}

/* mid-left blob */
.bokeh__blob--3 {
  width: 420px;
  height: 340px;
  top: 40%;
  left: -6%;
  background: rgba(78, 38, 120, 0.44);
  filter: blur(85px);
}

/* center diagonal blob */
.bokeh__blob--4 {
  width: 460px;
  height: 340px;
  top: 48%;
  left: 18%;
  background: rgba(72, 36, 112, 0.35);
  filter: blur(100px);
}

/* bottom-left blob */
.bokeh__blob--5 {
  width: 380px;
  height: 300px;
  top: 74%;
  left: 4%;
  background: rgba(75, 38, 115, 0.40);
  filter: blur(80px);
}
</style>
