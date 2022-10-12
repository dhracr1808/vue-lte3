<template>
  <div class="container">
    <div class="content">
      <vue-echarts :option="option" style="height: 400px" ref="chart" />
    </div>
  </div>
</template>

<script setup>
import { VueEcharts } from "vue3-echarts";

const option = {
  title: {
    text: "Cuadro de precios",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["aaa", "bbb", "ccc", "ddd", "eee"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: true,
    data: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "octubre",
      "noviembre",
      "Diciembre",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "s1",
      type: "line",
      stack: "1",
      data: [150, 132, 101, 134, 90, 230, 210, 350, 250, 310, 90, 80],
    },
    {
      name: "s2",
      type: "line",
      stack: "2",
      data: [220, 182, 191, 234, 290, 330, 310, 450, 210, 90, 80, 150],
    },
    {
      name: "s3",
      type: "line",
      stack: "3",
      data: [150, 232, 201, 154, 190, 330, 410, 600, 700, 500, 590, 800],
    },
    {
      name: "s4",
      type: "line",
      stack: "4",
      data: [320, 332, 301, 334, 390, 330, 320, 200, 250, 210, 300, 350],
    },
    {
      name: "s5",
      type: "line",
      stack: "5",
      data: [250, 300, 400, 550, 600, 700, 800, 850, 950, 800, 810, 850],
    },
    {
      name: "s6",
      type: "line",
      stack: "6",
      data: [120, 300, 400, 550, 500, 700, 900, 850, 950, 800, 810, 850],
    },
  ],
};
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
