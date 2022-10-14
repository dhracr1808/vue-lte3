<template>
  <div class="content-sidebar">
    <ul>
      <LinksVue to="/" text="dashboard" icon="fa-solid fa-gauge" option="new" />
      <LinksVue
        to="/widgets"
        text="widgets"
        icon="fa-solid fa-border-all"
        option="pro"
      />
      <LabelVue text="components" />
      <LinksVue to="/profile" text="profile" icon="fa-regular fa-user" />
      <LinksVue to="/dashboard" text="notification" icon="fa-regular fa-bell" />
      <LabelVue text="Pages" />
      <AcordionVue
        text="forms"
        icon="fa-brands fa-wpforms"
        :elements="elements"
      />
      <AcordionVue
        text="notifications"
        icon="fa-regular fa-bell"
        :elements="element1"
      />
      <AcordionVue
        text="notifications"
        icon="fa-regular fa-bell"
        :elements="element1"
      />
      <AcordionVue
        text="notifications"
        icon="fa-regular fa-bell"
        :elements="element1"
      />

      <LabelVue text="socials" />
    </ul>
  </div>
</template>

<script setup>
import LinksVue from "./components/Links.vue";
import LabelVue from "./components/Label.vue";
import AcordionVue from "./components/Acordion.vue";
import { ref, provide } from "vue";

const toogleAcordion = ref("false");
provide("toogleAcordion", toogleAcordion);

const elements = [
  {
    text: "Login",
    icon: "fa-regular fa-bell",
    path: "login",
  },
  {
    text: "Register",
  },
  {
    text: "data",
  },
];

const element1 = [
  {
    text: "alerts",
    path: "login",
  },
  {
    text: "badge",
  },
  {
    text: "modals",
  },
  {
    text: "toasts",
    path: "profile",
  },
];
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
.content-sidebar {
  overflow-y: auto;
  overflow-x: hidden;
  height: 75vh;
  padding-bottom: 1rem;
}
</style>
