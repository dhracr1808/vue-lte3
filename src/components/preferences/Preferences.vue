<template>
  <div class="preferences">
    <div class="preferences-icon" @click="toogleOptions">
      <i class="fa-solid fa-gear"></i>
    </div>
    <OptionsVue v-show="options" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import OptionsVue from "./components/Options.vue";

const options = ref(false);

const toogleOptions = () => {
  options.value = !options.value;
};
</script>

<style lang="scss" scoped>
.preferences {
  position: fixed;
  right: 0;
  top: 80px;
  margin: 0;
  padding: 0;
  z-index: 110;
}
.preferences-icon {
  width: 50px;
  height: 50px;
  background-color: #b3b3b370;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0 0 5px;
  font-size: 1.5rem;
  cursor: pointer;
}

.preferences-icon:hover {
  background-color: #b3b3b398;
}
</style>
