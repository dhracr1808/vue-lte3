<template>
  <div class="sidebar_logo">
    <router-link to="/" class="text-decoration-none text-white">
      <div class="d-flex align-items-center">
        <div class="p-2 rounded-circle logo bg-white">
          <img
            src="https://demos.creative-tim.com/vue-light-bootstrap-dashboard/static/img/vue-logo.png"
          />
        </div>
        <div class="ms-3 text-logo">
          <h2 class="m-0 fs-6 fw-bolder">VUE-LTE</h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo {
  width: 40px;
  height: 40px;
}
</style>
