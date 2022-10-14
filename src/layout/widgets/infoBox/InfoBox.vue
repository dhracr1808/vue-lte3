<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <InfoCard
        title="Message"
        cant="1,200"
        class="bg-info"
        icon="fa-regular fa-envelope"
      />
      <InfoCard
        title="Bookmarks"
        cant="410"
        class="bg-success"
        icon="fa-regular fa-flag"
      />

      <InfoCard
        title="Upload"
        cant="2,190"
        class="bg-warning"
        icon="fa-solid fa-upload"
      />

      <InfoCard
        title="Likes"
        cant="82,780"
        class="bg-danger"
        icon="fa-regular fa-star"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCard from "./infoShadow/InfoCard.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
