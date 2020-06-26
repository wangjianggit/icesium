<template>
  <div class="chart-wrapper">
    <div ref="echarts" :id="id" :data="data" :style="{height: styleHeight}"></div>
  </div>
</template>

<script>
// 引入echarts
import echarts from "echarts";
export default {
  name: "EchartsComponents",
  props: {
    // 接收父组件传递过来的信息
    data: {
      type: Object,
      default: {}
    },
    id: {
      type: String,
      default: "wj"
    },
    styleHeight: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      chartObj: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart(this.id, this.data);
    });
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.drawChart(this.id, this.data);
      },
      deep: true
    }
  },
  methods: {
    drawChart(id, data) {
      const vm = this;
      let chart = document.getElementById(id);
      this.chartObj = echarts.init(chart);
      this.chartObj.setOption(data);
      window.addEventListener("resize", () => {
        vm.chartObj.resize();
      });
      return echarts.init(chart);
    }
  },
  beforeDestroy() {
    if (this.chartObj) this.chartObj.clear();
  }
};
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
}
</style>