<template>
  <div class="col-xl-3 col-md-6 mb-3">
    <div class="rounded border" :class="class">
      <div :class="textColor" class="position-relative">
        <div v-if="loading" class="card-loading" :style="loadingCard">
          <i class="fa-solid fa-rotate"></i>
        </div>
        <div class="d-flex gap-2 p-3" style="flex-direction: row-reverse">
          <div
            class="d-flex justify-content-center align-items-center"
            style="width: 80px; height: 100px; font-size: 4rem"
          >
            <i :class="icon" class="text-dark" style="opacity: 0.5"></i>
          </div>
          <div class="text-content-center w-100">
            <span class="fw-bolder fs-2">{{ cant }}</span>
            <span class="fw-bold fs-6">
              <small>{{ title }}</small>
            </span>

            <span class="fs-6">
              <small class="fw-light">{{ text }}</small>
            </span>
          </div>
        </div>
        <div class="card-footer">
          <div class="text-center fs-6">
            <samp class="me-2">More info</samp>
            <i class="fa-regular fa-circle-right"></i>
          </div>
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
  loading: String,
});

const textColor = computed(
  () => "text-" + (props.class === "bg-warning" ? "dark" : "white")
);

const styleCard = {
  background:
    props.loading === "light" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)",
  color: props.loading === "light" ? "#444" : "#fff",
};

const loadingCard = computed(() => styleCard);
</script>

<style lang="scss" scoped>
.text-content-center {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}
.card-footer {
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.card-footer:hover {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.card-loading {
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
