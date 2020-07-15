<!--
 * @Author: your name
 * @Date: 2020-06-30 16:37:44
 * @LastEditTime: 2020-07-09 11:00:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/cesium/index.vue
--> 
<template>
  <!-- //放置Cesium的容器 -->
  <div id="cesiumContainer"></div>
</template>

<script>
//导入Cesium源码中的Viewer组件，注意这里是用的Viewer组件的方式加载，而不是加载整个Cesium
// import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
//我们刚才所说的如何让Cesium知道静态资源在哪里的API
// import buildModuleUrl from "cesium/Source/Core/buildModuleUrl"
//导入必须的样式表
// import "cesium/Source/Widgets/widgets.css";

export default {
  name: "cesiumContainer",
  data() {
    return {
      'viewer': {}
    }
  },
  mounted: function () {
    //设置静态资源目录
    // buildModuleUrl.setBaseUrl('../../../../static/Cesium/')
    //创建viewer实例
    // this.viewer = new Viewer('cesiumContainer');
    //     var Cesium = this.Cesium;
//     var cesiumContainer = document.getElementById("cesiumContainer");
//     var viewer = new Cesium.Viewer("cesiumContainer",{
//       //加载在线谷歌地图
//       imageryProvider: new Cesium.UrlTemplateImageryProvider({
//          url:"http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}"
//       })
//     })
  },
  
}
</script>

<style scoped>
</style>

