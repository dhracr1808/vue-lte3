<script setup>
import SidebarVue from "./components/sidebar/Sidebar.vue";
import PreferencesVue from "./components/preferences/Preferences.vue";
import NavbarVue from "./components/navbar/Navbar.vue";
import FooterVue from "./components/footer/Footer.vue";
import NotificationVue from "./components/notifications/Notification.vue";

import { useUserStore } from "./store/userStore";
import { computed } from "vue";

const user = useUserStore();

const isAuth = computed(() => (user.isAuthenticated ? "separate" : "full"));
const container = computed(() => (user.isAuthenticated ? "container" : ""));
const navbar = computed(() => (user.isAuthenticated ? "content-views" : ""));
</script>

<template>
  <div class="wrapper m-0 p-0 bg-light" :class="isAuth">
    <SidebarVue v-if="user.isAuthenticated" />
    <div :class="navbar">
      <div v-if="user.isAuthenticated">
        <NavbarVue />
        <PreferencesVue />
      </div>

      <div :class="container">
        <router-view />
      </div>
      <NotificationVue />
      <FooterVue />
    </div>
  </div>
</template>

<style scoped>
.content-views {
  position: relative;
  padding-top: 4rem;
}
.container {
  min-height: calc(100vh - (4rem + 80px));
}
</style>
