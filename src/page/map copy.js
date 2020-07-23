/*
 * @Author: your name
 * @Date: 2020-07-21 17:36:50
 * @LastEditTime: 2020-07-21 17:48:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/map copy.js
 */ 

$.getJSON(ROOT_PATH + '/data-gl/asset/data/population.json', function (data) {

  data = data.filter(function (dataItem) {
      return dataItem[2] > 0;
  }).map(function (dataItem) {
      return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
  });

  myChart.setOption({
      backgroundColor: '#cdcfd5',
      geo3D: {
          map: 'world',
          shading: 'lambert',
          light: {
              main: {
                  intensity: 5,
                  shadow: true,
                  shadowQuality: 'high',
                  alpha: 30,
                  beta:30 //主光源绕 y 轴偏离的角度
              },
              ambient: {
                  intensity: 0
              },
              ambientCubemap: {
                  // texture: 'data-gl/asset/canyon.hdr',
                  exposure: 1,
                  diffuseIntensity: 0.5
              }
          },
          viewControl: {
              distance: 50,
              panMouseButton: 'left',
              rotateMouseButton: 'right',
              alpha:50 // 让canvas在x轴有一定的倾斜角度
          },
          groundPlane: {
              show: true,
              color: '#999'
          },
          postEffect: {
              enable: true,
              bloom: {
                  enable: false
              },
              SSAO: {
                  radius: 1,
                  intensity: 1,
                  enable: true
              },
              depthOfField: {
                  enable: false,
                  focalRange: 10,
                  blurRadius: 10,
                  fstop: 1
              }
          },
          temporalSuperSampling: {
              enable: true
          },
          itemStyle: {//三维图形的视觉属性
              color:'#2355ac',
              borderWidth: 0.5,
              // borderColor:'rgba(0,0,0,0.2)'
          },

          regionHeight: 3
      },
      // visualMap: {
      //     max: 40,
      //     calculable: true,
      //     realtime: false,
      //     inRange: {
      //         color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      //     },
      //     outOfRange: {
      //         colorAlpha: 0
      //     }
      // },
      series: [{
          type: 'bar3D',
          coordinateSystem: 'geo3D',
          shading: 'lambert',
          data: [],
          barSize: 0.1,
          minHeight: 0.2,
          silent: true,
          itemStyle: {
              color: 'red'
              // opacity: 0.8
          }
      }]
  });
});