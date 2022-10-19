<template>
  <InfoBox text="Info Box" />
  <InfoBoxShadow text="Info Box With Custom Shadows" />
  <InfoCardBg text="Info Box With" />
  <InfoCardGradient text="Info Box With" />
  <SmallBox text="Small box" />
</template>

<script setup>
import InfoBox from "./InfoBox.vue";
import InfoBoxShadow from "./infoShadow/InfoBoxShadow.vue";
import InfoCardBg from "./infoBg/InfoBoxBg.vue";
import InfoCardGradient from "./infoBg/InfoBoxBgGradient.vue";
import SmallBox from "./smallBox/SmallBox.vue";
</script>

<style lang="scss" scoped></style>
