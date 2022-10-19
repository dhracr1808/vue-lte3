<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="content mt-2">
      <div class="row">
        <OverlayCard img="https://adminlte.io/themes/v3/dist/img/photo1.png" />
        <OverlayCard img="https://adminlte.io/themes/v3/dist/img/photo2.png" />
        <OverlayCard
          img="https://adminlte.io/themes/v3/dist/img/photo3.jpg"
          class="text-primary"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import OverlayCard from "./components/OverlayCard.vue";
defineProps({
  text: String,
});
</script>

<style lang="scss" scoped></style>
