<template>
  <div class="col-xl-3 col-md-6 mb-2">
    <div class="p-2 rounded border" :class="class">
      <div class="d-flex gap-2" :class="textColor">
        <div
          class="d-flex justify-content-center align-items-center"
          style="width: 60px; height: 100px"
        >
          <i :class="icon" class="fs-2"></i>
        </div>
        <div class="text-content-center w-100">
          <span class="fw-light">{{ title }}</span>
          <span class="fw-bold fs-6">
            <small>{{ cant }}</small>
          </span>

          <div
            class="bg-secondary w-100 rounded d-flex align-items-center"
            style="height: 2px"
          >
            <div class="bg-light" style="height: 2px; width: 70%"></div>
          </div>
          <span class="fs-6">
            <small class="fw-light">{{ text }}</small>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  text: String,
  icon: String,
  cant: String,
  class: String,
});

const textColor = computed(
  () => "text-" + (props.class === "bg-warning" ? "dark" : "white")
);
</script>

<style lang="scss" scoped>
.text-content-center {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}
</style>
