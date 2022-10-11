<template>
  <div class="m-0 p-0" v-show="toggleVisible">
    <div class="content" :class="toggleActive">
      <div
        class="bg-light d-flex justify-content-between align-items-center"
        style="height: 40px"
      >
        <div>
          <h3 class="text-muted fs-5 fw-lighter m-0">
            Line graph
            <small class="fs-6 fw-light">Sessions</small>
          </h3>
        </div>
        <div class="d-flex gap-2 text-muted">
          <div class="icon-data" @click="changeActive">
            <i
              class="fa-solid fa-angle-down"
              :style="downIcon"
              style="transition: all 0.5s ease"
            ></i>
          </div>
          <div class="icon-data">
            <i class="fa-solid fa-wrench"></i>
          </div>
          <div class="icon-data" @click="changeVisible">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      <hr class="p-0 m-0" style="opacity: 0.15" />
      <div class="mt-2 d-flex justify-content-center">
        <div class="col-11">
          <canvas :id="id" width="100" height="100"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, ref, computed } from "vue";

const active = ref(true);
const visibleData = ref(true);

const toggleActive = computed(() => (active.value ? "active" : "desactive"));
const toggleVisible = computed(() => !!visibleData.value);

const downIcon = computed(() =>
  active.value
    ? { transform: "rotate( -180deg)" }
    : { transform: "rotate( 0deg)" }
);

const changeActive = () => (active.value = !active.value);
const changeVisible = () => (visibleData.value = !visibleData.value);
const props = defineProps({ type: String, id: String });

onMounted(() => {
  const ctx = document.getElementById(props.id);

  new Chart(ctx, {
    type: props.type, //doughnut
    data: {
      labels: ["Carlos", "Juan", "Maria", "Lucas", "Matheo", "Carla"],
      datasets: [
        {
          label: "# de votos",
          data: [12, 19, 3, 5, 10, 15],
          backgroundColor: [
            "rgba(15, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "liner", //easeInOutElastic
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<style lang="scss" scoped>
div .icon-data {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-out;
  font-size: 1rem;
  padding: 0.7rem;
}
div .icon-data:hover {
  background-color: rgb(224, 224, 224);
  cursor: pointer;
  color: rgb(85, 85, 85);
}
</style>
