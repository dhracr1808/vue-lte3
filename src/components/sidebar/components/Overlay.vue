<template>
  <div class="overlay">
    <img :src="storeSidebar.img" alt="overlay" />
    <div class="slide"></div>
  </div>
</template>

<script setup>
import { store } from "./../../../store";
const storeSidebar = store();
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  opacity: 0.3;
  z-index: -1;
}
.slide {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
  top: 0;
  left: 0;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 center;
}
</style>
