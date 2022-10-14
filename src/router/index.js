import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "./../store/userStore";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingUser = true;
  const user = await userStore.currentUser();
  if (user) next();
  else next("/login");
  userStore.loadingUser = false;
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/Home.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/widgets",
    name: "Widgets",
    component: () => import("./../views/Widgets.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("./../views/Profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./../views/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("./../views/Register.vue"),
  },
];

export const router = createRouter({ routes, history: createWebHistory() });
