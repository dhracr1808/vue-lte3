<template>
  <div class="sidebar_logo">
    <div class="d-flex align-items-center">
      <div class="rounded-circle logo" :class="randomBg()">
        <p v-if="!img" class="letter_icon">
          {{ email?.slice(0, 1).toUpperCase() }}
        </p>
        <img v-else :src="img" alt="img" />
      </div>
      <div class="ms-3 text-logo">
        <h2 class="m-0 fs-6 fw-lighter text-white d-flex">
          <small>{{ email.slice(0, 20) }}</small>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "./../../../store/userStore";
const randomBg = () => {
  const colors = ["info", "success", "primary", "danger", "warning"];
  return `bg-${colors[Math.floor(Math.random() * colors.length)]}`;
};

const email = useUserStore().isAuthenticated.email;
const img = useUserStore().isAuthenticated.img;
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo {
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.letter_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.6rem;
  height: 100%;
}
</style>
