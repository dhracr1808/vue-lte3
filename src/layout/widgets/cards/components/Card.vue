<template>
  <div class="col-xl-3 col-md-6 mb-3">
    <div class="rounded border">
      <div class="position-relative shadow-sm" :class="cardSize">
        <div class="px-3 py-2 w-100 rounded-top" :class="class">
          <div :class="textColor">
            <span class="d-flex justify-content-between align-center">
              {{ title }}
              <div
                class="icon d-flex align-items-center"
                @click="chaneStateIcon"
              >
                <i :class="stateIcon"></i>
              </div>
            </span>
          </div>
        </div>
        <div class="px-3">
          <p class="m-0 mt-2 p-0">The body of the card</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  title: String,
  text: String,
  icon: String,
  class: String,
});

const textColor = computed(
  () => "text-" + (props.class === "bg-warning" ? "dark" : "white")
);

const iconCollapce = ref(false);
const stateIcon = computed(() =>
  iconCollapce.value ? "fa-solid fa-plus" : "fa-solid fa-minus"
);

const cardSize = computed(() => (iconCollapce.value ? "desactive" : "active"));

const chaneStateIcon = () => (iconCollapce.value = !iconCollapce.value);
</script>

<style lang="scss" scoped>
.text-content-center {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
}

.icon {
  cursor: pointer;
}

.active {
  height: 100px;
  transition: all 0.5s ease;
  overflow-y: hidden;
  overflow-x: auto;
}
.desactive {
  height: 40px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
</style>
