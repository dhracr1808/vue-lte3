<template>
  <div class="mt-3">
    <h3 class="m-0 fs-5 fw-light">{{ text }}</h3>
    <div class="row mt-2">
      <SocialCard1 class="bg-warning bg-gradient" />
      <SocialCard2
        class="bg-custom"
        position="text-center"
        :avatar="avatar1"
        skill="Founder & CEO"
        name="Alexander Pierce"
      />
      <SocialCard2
        :img="img"
        position="text-end"
        :avatar="avatar2"
        name="Elizabeth Pierce"
        skill="Web Designer"
      />
    </div>
  </div>
</template>

<script setup>
import SocialCard1 from "./components/SocialCard1.vue";
import SocialCard2 from "./components/SocialCard2.vue";
defineProps(["text"]);

const img = "https://adminlte.io/themes/v3/dist/img/photo1.png";
const avatar1 = "https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg";
const avatar2 = "https://adminlte.io/themes/v3/dist/img/user3-128x128.jpg";
</script>

<style lang="scss">
.bg-custom {
  background: linear-gradient(180deg, #221840, #121212);
}
</style>
