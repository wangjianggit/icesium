import echarts from "echarts"

export default {
  generateData(count) {
    var baseValue = Math.random() * 1000
    var time = +new Date()
    var smallBaseValue
    function next(idx) {
      smallBaseValue = idx % 30 === 0 ?
        Math.random() * 700 :
        (smallBaseValue + Math.random() * 500 - 250)
      baseValue += Math.random() * 20 - 10
      return Math.max(
        0,
        Math.round(baseValue + smallBaseValue) + 3000
      )
    }

    var categoryData = []
    var valueData = []

    for (var i = 0; i < count; i++) {
      const category = echarts.format.formatTime('yyyy-MM-dd', time)
      categoryData.push(category)
      valueData.push(next(i).toFixed(2))
      // for (let j = 0; j < count; j++) {
      //   datas.push(next(j).toFixed(2))
      // }
      // valueData.push({
      //   name: category,
      //   type: 'bar',
      //   data: datas
      // })
      time -= 24 * 60 * 60 * 1000
    }

    return {
      categoryData: categoryData.reverse(),
      valueDataOne: valueData.reverse(),
      valueDataTwo: valueData.reverse().map(item => item * 1.32),
      valueDataThree: valueData.reverse().map(item => item * 1.5)
    }
  },
  option(data) {
    // var count = 30
    // var data = data


    var timeToday = echarts.format.formatTime('yyyy-MM-dd', new Date())
    var timeTodayBefore7 = echarts.format.formatTime('yyyy-MM-dd', new Date(Date.now() - 24 * 60 * 60 * 1000 * 7))
    return {
      timeline: {
        data: data.categoryData,
        left: '10%',
        right: '10%',
        bottom: 90,
        height: 50,
        axisType: 'category',
        show: true,
        autoPlay: false,
        playInterval: 1000,
        checkpointStyle: {
          color: '#04a5f1',
          borderColor: 'rgba(4, 165, 261, .5)'
        },
        dataZoom: [{
          type: 'inside',
          startValue: timeToday,
          endValue: timeTodayBefore7
        },
        {
          type: 'slider',
          startValue: timeToday,
          endValue: timeTodayBefore7
        }
        ],
        label: {
          normal: {
            formatter: function (v) {
              var _txt = v.replace(/\//igm, '\n');
              return _txt;
            },
            rotate: -30, //角度
            position: 'bottom'
          }
        },
        itemStyle: {
          normal: {
            color: '#04a5f1'
          },
          emphasis: {
            color: '#04a5f1'
          }
        },
        lineStyle: {
          color: '#ddd'
        },
        controlStyle: {
          show: false,
        },
      },
      // title: {
      //   subtext: '最近30天',
      //   left: 70,
      //   top: -5,
      //   subtextStyle: {
      //     fontWeight: 'bolder'
      //   }
      // },
      // toolbox: {
      //   show: true,
      //   right: 80,
      //   feature: {
      //     // dataZoom: {
      //     //   yAxisIndex: false,
      //     //   xAxisIndex: false
      //     // },
      //     saveAsImage: {}
      //   }
      // },
      // legend: {
      //   type: 'scroll',
      //   data: ['上岗人力', '出单人力', '在职人力']
      // },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        bottom: 90
      },
      dataZoom: [{
        type: 'inside',
        startValue: timeToday,
        endValue: timeTodayBefore7
      },
      {
        type: 'slider',
        startValue: timeToday,
        endValue: timeTodayBefore7
      }
      ],
      xAxis: {
        // type: 'time',
        data: data.categoryData,
        silent: false,
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        }
      },
      yAxis: {
        splitArea: {
          show: false
        }
      },
      series: [{
        name: '上岗人力',
        type: 'line',
        data: 1
      },

      ]
    }
  }
}