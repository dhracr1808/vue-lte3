<template>
  <div class="my-2 d-flex align-items-center justify-content-between">
    <h1 class="m-0 p-0 fs-4 text-muted">
      {{ $router.currentRoute.value.name }}
    </h1>
    <p class="p-0 m-0 text-muted fw-bold fs-6">
      Home /
      <span class="text-info">{{ $router.currentRoute.value.name }}</span>
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
