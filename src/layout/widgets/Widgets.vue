<template>
  <WidgetHeader />
  <InfoBox text="Info Box" />
  <InfoBoxShadow text="Info Box With Custom Shadows" />
  <InfoCardBg text="Info Box With" />
  <InfoCardGradient text="Info Box With" />
  <SmallBox text="Small box" />
  <Cards />
</template>

<script setup>
import WidgetHeader from "./components/WidgetHeader.vue";
import InfoBox from "./infoBox/InfoBox.vue";
import InfoBoxShadow from "./infoBox/infoShadow/InfoBoxShadow.vue";
import InfoCardBg from "./infoBox/infoBg/InfoBoxBg.vue";
import InfoCardGradient from "./infoBox/infoBg/InfoBoxBgGradient.vue";
import SmallBox from "./infoBox/smallBox/SmallBox.vue";
import Cards from "./cards/Cards.vue";
</script>

<style lang="scss" scoped></style>
