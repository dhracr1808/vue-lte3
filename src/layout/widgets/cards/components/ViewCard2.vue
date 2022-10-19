<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <InfoCard
        title="Shadow - None"
        class="bg-primary"
        icon="fa-regular fa-envelope"
        shadow="shadow-none"
        :collap="true"
      />
      <InfoCard
        title="Shadow - Small"
        class="bg-success"
        icon="fa-regular fa-flag"
        :collap="true"
        shadow="shadow-sm"
      />

      <InfoCard
        title="Shadow - Regular"
        class="bg-warning"
        icon="fa-solid fa-upload"
        :times="true"
        shadow="shadow"
      />

      <InfoCard
        title="Shadow - Large"
        class="bg-danger"
        icon="fa-regular fa-star"
        :expand="true"
        shadow="shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCard from "./Card.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
