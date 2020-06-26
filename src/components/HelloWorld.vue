<template>
  <div class="container">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
//     var Cesium = this.Cesium;
//     var cesiumContainer = document.getElementById("cesiumContainer");
//     var viewer = new Cesium.Viewer("cesiumContainer",{
//       //加载在线谷歌地图
//       imageryProvider: new Cesium.UrlTemplateImageryProvider({
//          url:"http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}"
//       })
//     })
    this.$axios.get('/parameter/query', {}).then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width:100%;
  height:100%
}
#cesiumContainer{
  width: 100%;
  height: 100%
}
</style>
