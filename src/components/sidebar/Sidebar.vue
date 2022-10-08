<template>
  <div>
    <aside class="inicial sidebar" :class="bgColorSidebar()">
      <LogoVue />
      <Avatar />
      <hr class="divider" />
      <ListMenuVue />
      <OverlayVue />
    </aside>
  </div>
</template>

<script setup>
import LogoVue from "./components/Logo.vue";
import Avatar from "./components/Avatar.vue";
import ListMenuVue from "./ListMenu.vue";
import OverlayVue from "./components/Overlay.vue";

const bgColorSidebar = () => {
  return JSON.parse(localStorage.getItem("sidebar"))?.bg || "sidebar";
};
</script>

<style lang="scss" scoped></style>
