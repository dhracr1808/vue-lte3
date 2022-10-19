<template>
  <WidgetHeader />
  <infoBoxView />
  <Cards />
  <Chat text="Direct Chat" />
  <SocialWidget text="Widget Social" />
  <ViewOverlay text="Card with Image Overlay" />
</template>

<script setup>
import WidgetHeader from "./components/WidgetHeader.vue";
import infoBoxView from "./infoBox/InfoBoxView.vue";
import Cards from "./cards/Cards.vue";
import Chat from "./chat/ChatView1.vue";
import SocialWidget from "./social/SocialView1.vue";

import ViewOverlay from "./overlay/ViewOverlay.vue";
</script>

<style lang="scss" scoped></style>
