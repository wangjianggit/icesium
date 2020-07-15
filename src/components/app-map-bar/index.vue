<!--
 * @Author: your name
 * @Date: 2020-06-26 21:55:22
 * @LastEditTime: 2020-07-15 19:30:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/login.vue
--> 
<template>
  <div class="map">
    <eCharts :id="'map'" ref="map" :data="option" :styleHeight="'100%'" />
  </div>
</template>
<script>
import echarts from 'echarts'
import "echarts/lib/chart/map";  //这个是必须的
import "echarts/map/js/world.js";
import eCharts from '@/components/app-echarts/chart'
export default {
  components: { eCharts },
  data() {
    return {
      option: {
        backgroundColor: echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
          offset: 0,
          color: '#4b5769'
        }, {
          offset: 1,
          color: '#404a59'
        }]),

        tooltip: {
          trigger: 'axis'
        },
        geo: {
          map: 'world',
          silent: true,
          roam: true,
          zoom: 1.2,
          center: [11.48534081107986, 48.55595569334055],
          label: {
            emphasis: {
              show: false,
              areaColor: '#eee'
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 0.2,
              borderColor: '#404a59'
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: []
      },
      Instance: null
    }
  },
  mounted() {
    this.Instance = this.$refs.map.returnInstance('map')
    console.log(this.Instance)
    var geoCoordMap = {
      "Amsterdam": [4.895168, 52.370216],
    };
    var rawData = [
      ["Amsterdam", 101.6, 90.1, 77.1, 69.1, 78.3, 69.4, 1755, 24, 15, 7, 9, 44, 720, 1.651, 1.59, 2.205, 0.974, 0.93, 2.477, 67.4, 364, 690, 1113, 4960, 3.19, 30.05, 16.34, 24000, 689, 1.8, 50, 200, 390, 690, 1040, 2331, 1580, 17.5, 25.5, 30, 48400, 39200, 26300, 30200, 55400, 39800, 104400, 58700, 64600, 49200, 40300, 31100, 40300, 27700, 66700, 66700],
    ];
    this.makeMapData(rawData, geoCoordMap)

    let vm = this
    setTimeout(() => {
      vm.renderEachCity(rawData, geoCoordMap)
    }, 100);
    // var throttledRenderEachCity = vm.throttle(vm.renderEachCity(rawData, geoCoordMap), 130);
    this.Instance.on('geoRoam', ()=>{
      vm.throttle(vm.renderEachCity(rawData, geoCoordMap), 130);
    });
  },
  methods: {
    makeMapData(rawData, geoCoordMap) {
      var mapData = [];
      for (var i = 0; i < rawData.length; i++) {
        var geoCoord = geoCoordMap[rawData[i][0]];
        if (geoCoord) {
          mapData.push({
            name: rawData[i][0],
            value: geoCoord.concat(rawData[i].slice(1))
          });
        }
      }
      return mapData;
    },


    renderEachCity(rawData, geoCoordMap) {
      let vm = this
      var options = { xAxis: [], yAxis: [], grid: [], series: [] };
      var inflationStartIdx = 14;
      var inflationYearCount = 6;
      var inflationYearStart = '2006';
      var xAxisCategory = [];
      for (var i = 0; i < inflationYearCount; i++) {
        xAxisCategory.push((+inflationYearStart + i) + '');
      }

      echarts.util.each(rawData, function (dataItem, idx) {
        var geoCoord = geoCoordMap[dataItem[0]];
        var coord = vm.Instance.convertToPixel('geo', geoCoord);
        var boundL = -12.782788213627585;
        var boundR = 35.92763028872384;
        var boundT = 32.22854555899493;
        var boundB = 95.18817097360194;
        if (!coord
          || geoCoord[0] < boundL
          || geoCoord[0] > boundR
          || geoCoord[1] > boundB
          || geoCoord[1] < boundT
        ) {
          return;
        }
        idx += '';

        let inflationData = [];
        for (var k = 0; k < inflationYearCount; k++) {
          inflationData.push(dataItem[inflationStartIdx + k]);
        }

        options.xAxis.push({
          id: idx,
          gridId: idx,
          type: 'category',
          name: dataItem[0],
          nameStyle: {
            color: '#ddd',
            fontSize: 12
          },
          nameLocation: 'middle',
          nameGap: 3,
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#bbb'
            }
          },
          data: xAxisCategory,
          z: 100
        });
        options.yAxis.push({
          id: idx,
          gridId: idx,
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          axisLine: {
            lineStyle: {
              color: '#bbb'
            }
          },
          z: 100
        });
        options.grid.push({
          id: idx,
          width: 30,
          height: 30,
          left: coord[0] - 15,
          top: coord[1] - 15,
          z: 100
        });
        options.series.push({
          id: idx,
          type: 'bar',
          xAxisId: idx,
          yAxisId: idx,
          data: inflationData,
          z: 100
        });
      });
      vm.Instance.setOption(options);
    },

    throttle(fn, delay, debounce) {
      var currCall;
      var lastCall = 0;
      var lastExec = 0;
      var timer = null;
      var diff;
      var scope;
      var args;

      delay = delay || 0;

      function exec() {
        lastExec = (new Date()).getTime();
        timer = null;
        fn.apply(scope, args || []);
      }

      var cb = ()=> {
        currCall = (new Date()).getTime();
        scope = this;
        args = arguments;
        diff = currCall - (debounce ? lastCall : lastExec) - delay;

        clearTimeout(timer);

        if (debounce) {
          timer = setTimeout(exec, delay);
        }
        else {
          if (diff >= 0) {
            exec();
          }
          else {
            timer = setTimeout(exec, -diff);
          }
        }

        lastCall = currCall;
      };

      return cb;
    }

  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>