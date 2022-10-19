<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <ChatVue outline="border-primary" />
      <ChatVue outline="border-success" />
      <ChatVue class="bg-warning" />
      <ChatVue class="bg-danger" />
    </div>
  </div>
</template>

<script setup>
import ChatVue from "./components/Chat.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
