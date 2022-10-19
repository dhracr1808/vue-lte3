<template>
  <Cardview1 text="Cards" />
  <Cardview2 text="Custom Shadows Variations" />
  <Cardview3 text="Colors Variations" />
</template>

<script setup>
import Cardview1 from "./components/viewCard1.vue";
import Cardview2 from "./components/ViewCard2.vue";
import Cardview3 from "./components/ViewCard3.vue";

defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
