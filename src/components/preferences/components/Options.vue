<template>
  <div class="preferences-options">
    <h2 class="fs-6 fw-bold text-center"><small>filters</small></h2>
    <div class="options-colors">
      <div
        class="select-color info bg-info"
        :class="colorActive()"
        @click="changeColor($event, 'info')"
      ></div>
      <div
        class="select-color blue"
        @click="changeColor($event, 'blue')"
        style="background-color: #35495e"
      ></div>
      <div
        class="select-color warming bg-warning"
        @click="changeColor($event, 'warning')"
      ></div>
      <div
        class="select-color success"
        @click="changeColor($event, 'success')"
        style="background-color: #87cb16"
      ></div>
      <div
        class="select-color danger"
        style="background-color: #fb404b"
        @click="changeColor($event, 'danger')"
      ></div>

      <div
        class="select-color violet"
        style="background-color: #9368e9"
        @click="changeColor($event, 'violet')"
      ></div>
    </div>
    <hr />

    <div class="content-img p-0 m-0">
      <div
        class="card p-1 card-img"
        v-for="img of imgs"
        :key="img.id"
        @click="changeImg(img.img)"
      >
        <figure class="m-0 p-0">
          <img :src="img.img" :alt="img.name" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { imgs, changeColor, changeImg, colorActive } from "./data";
</script>

<style lang="scss" scoped>
.preferences-options {
  position: absolute;
  top: 2px;
  border-radius: 5px;
  width: 300px;
  left: -310px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  user-select: none;
  padding: 0.5rem;
  background-color: #fff;
  z-index: 999;
}
.preferences-options h2 {
  text-transform: uppercase;
}
.options-colors {
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.select-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.options-colors .select-color.active {
  box-shadow: 0 0 3px 4px #00bbff;
}

.content-img {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.card-img {
  width: 70px;
  height: 90px;
  cursor: pointer;
}

.card-img figure {
  height: 100%;
  width: 100%;
}
.card-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}
</style>
