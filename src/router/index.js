import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/Home.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("./../views/Profile.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./../views/Login.vue"),
  },
];

export const router = createRouter({ routes, history: createWebHistory() });
