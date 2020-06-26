<template>
  <div class="time-axis">
    <echart :id="'test'" :data="option" :styleHeight="'100%'" />
  </div>
</template>
<script>
import echart from '@/components/app-echarts/chart'
import o from "@/components/app-echarts/option"

export default {
  components: {echart},
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    console.log(o)
    let a = o.generateData(30)
    this.option = o.option(a)
    // this.scale("btn1", "bar1");
  },
  methods: {
    
  }
};
</script>
<style>

.time-axis {
  height: 400px;
}
</style>