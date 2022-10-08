<template>
  <div class="acordion">
    <div @click="changeAcordion" class="headerAcordion">
      <LinksVue :icon="icon" :text="text" />
      <div class="down-arrow">
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>

    <div class="acordion-body">
      <ul>
        <SimpleLink :elements="elements" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import LinksVue from "./Links.vue";
import SimpleLink from "./SimpleLink.vue";

import { changeAcordion } from "./utils";

defineProps({
  text: String,
  icon: String,
  elements: Array,
});
</script>

<style lang="scss" scoped>
.acordion {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 50px;
  transition: 0.5s ease;
  flex-direction: column;
  margin-top: 0.4rem;
  transition: all 0.5s ease;
}

.down-arrow {
  position: absolute;
  top: 15px;
  right: 10%;
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in;
  font-size: 1.1rem;
  opacity: 0.5;
  z-index: 60;
}

.acordion.show .down-arrow {
  transform: rotate(180deg);
}

.acordion.show .acordion-body {
  margin: 0 10px;
  background-color: var(--color-link-active);
  transform: translateY(0px);
  transition: 0.5s ease 0.1s;
}

.acordion-body {
  margin: 0 10px;
  transform: translateY(-500%);
  z-index: 10;
}

ul {
  margin: 0;
  padding: 0;
}

.headerAcordion {
  position: relative;
  z-index: 5;
}

.headerAcordion::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: transparent;
}

.headerAcordion:hover .down-arrow {
  opacity: 1;
}
</style>
