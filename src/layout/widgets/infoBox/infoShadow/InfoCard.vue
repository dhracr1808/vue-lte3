<template>
  <div class="col-xl-3 col-md-6 mb-2">
    <div class="p-2 rounded border" :class="shadow">
      <div class="d-flex gap-2">
        <div
          class="rounded d-flex justify-content-center align-items-center"
          :class="class"
          style="width: 60px; height: 60px"
        >
          <i :class="icon" class="fs-1 text-white"></i>
        </div>
        <div class="text-content-center">
          <span class="fw-light text-muted">{{ title }}</span>
          <span class="fw-bold fs-6">
            <small>{{ cant }}</small>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  cant: String,
  icon: String,
  class: String,
  shadow: String,
});
</script>

<style lang="scss" scoped>
.text-content-center {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}
</style>
