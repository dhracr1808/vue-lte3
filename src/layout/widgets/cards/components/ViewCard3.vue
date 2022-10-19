<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <InfoCard
        title="Primary"
        class="bg-primary"
        icon="fa-regular fa-envelope"
        :collap="true"
      />
      <InfoCard
        title="Success"
        class="bg-success"
        icon="fa-regular fa-flag"
        :times="true"
      />

      <InfoCard
        title="Warning"
        class="bg-warning"
        icon="fa-solid fa-upload"
        :collap="true"
      />
      <InfoCard title="Danger" class="bg-danger" icon="fa-regular fa-star" />
      <InfoCard
        title="Primary Outline"
        :collap="true"
        outline="border-primary"
        icon="fa-regular fa-star"
        shadow="shadow-sm"
      />
      <InfoCard
        title="Primary Outline"
        :times="true"
        outline="border-success"
        icon="fa-regular fa-star"
        shadow="shadow-sm"
      />
      <InfoCard
        title="Warning Outline"
        outline="border-warning"
        :collap="true"
        icon="fa-regular fa-star"
        shadow="shadow-sm"
      />
      <InfoCard
        title="Danger Outline"
        outline="border-danger"
        icon="fa-regular fa-star"
        shadow="shadow-sm"
      />

      <InfoCard
        title="Primary"
        bg="bg-primary"
        icon="fa-regular fa-envelope"
        :collap="true"
      />
      <InfoCard
        title="Success"
        bg="bg-success"
        icon="fa-regular fa-flag"
        :times="true"
      />

      <InfoCard
        title="Warning"
        bg="bg-warning"
        icon="fa-solid fa-upload"
        :collap="true"
      />
      <InfoCard title="Danger" bg="bg-danger" icon="fa-regular fa-star" />
      <InfoCard
        title="Primary gradient"
        bg="bg-primary bg-gradient"
        icon="fa-regular fa-envelope"
        :collap="true"
      />
      <InfoCard
        title="Success gradient"
        bg="bg-success bg-gradient"
        icon="fa-regular fa-flag"
        :times="true"
      />

      <InfoCard
        title="Warning gradient"
        bg="bg-warning bg-gradient"
        icon="fa-solid fa-upload"
        :collap="true"
      />
      <InfoCard
        title="Danger gradient"
        bg="bg-danger bg-gradient"
        icon="fa-regular fa-star"
      />
    </div>
  </div>
</template>

<script setup>
import InfoCard from "./Card.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
