<!-- <template>
  <vue-echarts :option="option" style="height: 500px" ref="chart" />
</template>

<script>
import { VueEcharts } from "vue3-echarts";

export default {
  name: "Echarts",
  components: {
    VueEcharts,
  },
  computed: {
    option() {
      return {
        fontFamily: "Roboto Condensed",
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            color: ["#cd3e49", "#33849d", "#b9e0e7", "#5f86f7", "#61c6c0"],

            name: "Food production",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: true,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },

            data: [
              {
                value: 1048,
                name: "seafood",
              },
              { value: 735, name: "meat" },
              { value: 580, name: "wheat" },
              { value: 484, name: "fish" },
              { value: 300, name: "other" },
            ],
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.chart {
  height: 100vh;
}
.icon_wrapper {
  position: absolute;
  width: 100%;
}
.icon {
  position: absolute;
  margin-top: 217px;
  margin-left: -50px;
  width: 100px;
}
.container {
  position: relative;
  height: 600px;
}
</style>

<style>
body {
  margin: 0;
}
</style>
 -->

<!-- <template>
  <Bubble
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bubble } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);

export default {
  name: "Profile",
  components: {
    Bubble,
  },
  props: {
    chartId: {
      type: String,
      default: "bubble-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              {
                x: 20,
                y: 25,
                r: 5,
              },
              {
                x: 40,
                y: 10,
                r: 10,
              },
              {
                x: 30,
                y: 22,
                r: 30,
              },
            ],
          },
          {
            label: "Data Two",
            backgroundColor: "#7C8CF8",
            data: [
              {
                x: 10,
                y: 30,
                r: 15,
              },
              {
                x: 20,
                y: 20,
                r: 10,
              },
              {
                x: 15,
                y: 8,
                r: 30,
              },
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script> -->
