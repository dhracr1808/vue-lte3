<template>
  <div class="mt-5">
    <h3 class="m-0 fs-5 fw-light">
      {{ text }} <span class="text-danger">bg-gradient-*</span>
    </h3>
    <div class="row mt-2">
      <InfoCardBg
        title="Bookmarks"
        icon="fa-regular fa-bookmark"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-info bg-gradient"
      />

      <InfoCardBg
        title="Likes"
        icon="fa-solid fa-thumbs-up"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-success bg-gradient"
      />
      <InfoCardBg
        title="Events"
        icon="fa-solid fa-calendar-days"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-warning bg-gradient"
      />
      <InfoCardBg
        title="Comments"
        icon="fa-solid fa-comments"
        cant="41,410"
        text="70% Increase in 30 Day"
        class="bg-danger bg-gradient"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCardBg from "./InfoCardBg.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
