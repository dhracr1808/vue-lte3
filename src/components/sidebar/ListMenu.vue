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
      <AcordionVue
        text="Layout Options"
        icon="fa-regular fa-clone"
        :elements="elements"
      />

      <AcordionVue
        text="Chats"
        icon="fa-solid fa-chart-pie"
        :elements="elements"
      />
      <AcordionVue
        text="ui elements"
        icon="fa-solid fa-tree"
        :elements="elements"
      />

      <AcordionVue
        text="fomrs"
        icon="fa-regular fa-pen-to-square"
        :elements="elements"
      />
      <AcordionVue
        text="tables"
        icon="fa-solid fa-table"
        :elements="elements"
      />
      <LabelVue text="Examples" />
      <LinksVue to="/" text="calendar" icon="fa-regular fa-calendar" />
      <LinksVue to="/" text="galery" icon="fa-regular fa-image" />
      <LinksVue to="/" text="notification" icon="fa-regular fa-bell" />

      <LabelVue text="Pages" />

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
    text: "top naviagtion",
    icon: "fa-regular fa-bell",
    path: "login",
  },
  {
    text: "boxed",
  },
  {
    text: "foxed sidebar",
  },
  {
    text: "foxed sidebar custom",
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
