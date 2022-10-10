<template>
  <div class="toaster-notification"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.toaster-notification {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 0 1rem 1rem;
  z-index: 150;
  display: none;
  max-height: 100vh;
  overflow: hidden;
}

.toaster-notification.active {
  display: block;
}
</style>
