<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">Info box{{ text }}</h3>
    <div class="row mt-2">
      <InfoCard
        title="Message"
        cant="None"
        class="bg-info"
        icon="fa-regular fa-envelope"
        shadow="shadow-none"
      />
      <InfoCard
        title="Bookmarks"
        cant="Small"
        class="bg-success"
        icon="fa-regular fa-flag"
        shadow="shadow-sm"
      />

      <InfoCard
        title="Upload"
        cant="Regular"
        class="bg-warning"
        icon="fa-solid fa-upload"
        shadow="shadow"
      />

      <InfoCard
        title="Likes"
        cant="Larger"
        class="bg-danger"
        icon="fa-regular fa-star"
        shadow="shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCard from "./InfoCard.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
