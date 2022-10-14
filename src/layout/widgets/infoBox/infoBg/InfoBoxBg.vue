<template>
  <div class="mt-5">
    <h3 class="m-0 fs-5 fw-light">
      {{ text }} <span class="text-danger">bg-*</span>
    </h3>
    <div class="row mt-2">
      <InfoCardBg
        title="Bookmarks"
        icon="fa-regular fa-bookmark"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-info"
      />

      <InfoCardBg
        title="Likes"
        icon="fa-solid fa-thumbs-up"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-success"
      />
      <InfoCardBg
        title="Events"
        icon="fa-solid fa-calendar-days"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-warning"
      />
      <InfoCardBg
        title="Comments"
        icon="fa-solid fa-comments"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-danger"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCardBg from "./InfoCardBg.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
