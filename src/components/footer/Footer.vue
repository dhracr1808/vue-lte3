<template>
  <div class="footer d-flex bg-primary m-0 p-3">
    <div>
      <h3 class="text-white m-0 p-0 fs-5 fw-bold">Dashboard</h3>
    </div>
    <div class="text-white">
      <p class="m-0 p-0">
        Todos los derechos reservados
        <span class="text-light fw-bold">{{ date }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const date = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer {
  height: 80px;
  justify-content: space-between;
  align-items: center;
  animation: 0.01s showFooter forwards;
}

@keyframes showFooter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 800px) {
  .footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
}
</style>
