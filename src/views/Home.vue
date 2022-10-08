<template>
  <div class="home">
    Home
    <div>
      <button @click="toaster">notification</button>
    </div>
  </div>
</template>

<script setup>
import { store } from "./../store";
import { toaster } from "./../components/notifications/notifications";

const imgStore = store();

console.log(imgStore.datas);
</script>

<style lang="scss" scoped>
.home {
  background-color: violet;
  transition: background 0.5s ease-in-out;
}

.hijo {
  background-color: var(--color-subtitle);
}
</style>
