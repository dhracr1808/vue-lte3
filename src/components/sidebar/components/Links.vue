<template>
  <li class="aside-item-li">
    <div class="aside-item">
      <router-link
        v-if="to"
        class="content-item rounded"
        :to="to"
        @click="showRemove"
      >
        <i :class="icon"></i>
        <p class="text-icon fw-bold m-0 ms-4 p-0">
          <small>{{ text }}</small>
        </p>
        <div v-if="option" class="list-option" :class="bgOptions()">
          <span>{{ option }}</span>
        </div>
      </router-link>

      <span v-else class="content-item rounded">
        <i :class="icon"></i>
        <p class="text-icon fw-bold m-0 ms-4 p-0">
          <small>{{ text }}</small>
        </p>
        <div v-if="option" class="list-option" :class="bgOptions()">
          <span>{{ option }}</span>
        </div>
      </span>
    </div>
  </li>
</template>

<script setup>
import { showRemove } from "./utils";

const props = defineProps({
  to: String,
  text: String,
  icon: String,
  option: String,
});

const bgOptions = function () {
  const colors = { new: "primary", pro: "danger", lab: "success" };
  return `bg-${colors[props.option]}`;
};
</script>

<style lang="scss" scoped>
.aside-item {
  position: relative;
}
.aside-item .content-item {
  margin: 10px;
  padding: 0.3rem;
  display: flex;
  flex-wrap: nowrap;
  text-decoration: none;
  align-items: center;
  height: 50px;
  transition: all 0.5s ease-in;
  color: #ffffff;
  opacity: 0.6;
}

.aside-item .content-item:hover,
.acordion:hover .aside-item-li .aside-item .content-item {
  background-color: var(--color-second);
  opacity: 1;
}

i {
  font-size: 1.2rem;
}

.router-link-active,
.acordion.show .aside-item-li .aside-item span {
  background-color: var(--color-link-active) !important;
  opacity: 1 !important;
}

.acordion .aside-item-li .aside-item span {
  position: relative;
  margin: 0 10px;
  z-index: 50;
}

.acordion.show .aside-item-li .aside-item .content-item {
  border-radius: 0 !important;
}

.text-icon {
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 0.9rem;
}
.list-option {
  position: absolute;
  right: 20px;
  top: 0;
  height: 22px;
  padding: 0.2rem 0.5rem;
  bottom: 0;
  margin: auto;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
</style>
