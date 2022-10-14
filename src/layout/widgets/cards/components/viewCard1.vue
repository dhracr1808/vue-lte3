<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <InfoCard
        title="Expandable"
        class="bg-primary"
        icon="fa-regular fa-envelope"
      />
      <InfoCard
        title="Collapsable"
        class="bg-success"
        icon="fa-regular fa-flag"
      />

      <InfoCard
        title="Removable"
        class="bg-warning"
        icon="fa-solid fa-upload"
      />

      <InfoCard
        title="Maximizable"
        class="bg-danger"
        icon="fa-regular
      fa-star"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCard from "./Card.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
