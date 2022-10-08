<template>
  <div class="toaster-notification">notification</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.toaster-notification {
  width: 200px;
  height: 80px;
  background-color: red;
  position: absolute;
  top: 4rem;
  right: 0;
  z-index: 150;
  display: none;
}

.toaster-notification.active {
  display: block;
}
</style>
