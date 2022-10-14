<template>
  <div class="mt-4">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <SmallBoxCard
        title="New Orders"
        cant="150"
        class="bg-info"
        icon="fa-solid fa-cart-plus"
        shadow="shadow-none"
      />
      <SmallBoxCard
        title="Bounce Rate"
        cant="53 %"
        class="bg-success"
        icon="fa-solid fa-chart-simple"
        shadow="shadow-sm"
      />

      <SmallBoxCard
        title="User Registrations"
        cant="44"
        class="bg-warning"
        icon="fa-solid fa-user-plus"
        shadow="shadow"
      />

      <SmallBoxCard
        title="Unique Visitors"
        cant="65"
        class="bg-danger"
        icon="fa-solid fa-chart-pie"
        shadow="shadow-lg"
      />

      <SmallBoxCard
        title="New Orders"
        cant="150"
        class="bg-info"
        icon="fa-solid fa-cart-plus"
        shadow="shadow-none"
        loading="light"
      />
      <SmallBoxCard
        title="Bounce Rate"
        cant="53 %"
        class="bg-success"
        icon="fa-solid fa-chart-simple"
        shadow="shadow-sm"
        loading="dark"
      />
    </div>
  </div>
</template>

<script setup>
import SmallBoxCard from "./SmallBoxCard.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
