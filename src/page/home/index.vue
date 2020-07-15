<!--
 * @Author: your name
 * @Date: 2020-06-30 16:37:44
 * @LastEditTime: 2020-07-01 10:24:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/cesium/index.vue
--> 
<template>
  <div class="home-wrapper">
    <topHeader />
    <div class="content">
      <div class="left item">
        <div class="section animate__animated animate__fadeInLeftBig animate__faster"></div>
        <div class="section animate__animated animate__fadeInLeftBig animate__faster animate__delay-1s"></div>
        <div class="section animate__animated animate__fadeInLeftBig animate__faster animate__delay-2s"></div>
      </div>
      <div class="center item">
        <div class="section"></div>
      </div>
      <div class="right item">
        <div class="section"></div>
      </div>
    </div>
    <foot />
  </div>
</template>
<script>
import topHeader from '@/components/app-head/head'
import foot from '@/components/app-foot/foot'
export default {
  components: { topHeader, foot },
  methods: {
    click() {
      this.$router.push('/cesiumm')
    }
  }
}
</script>
<style lang="scss" scoped>
// @import './app.css';
.home-wrapper {
  width: 100%;
  height: 100%;
  background: #0a1631 url("~img/common/bg.png") 0 0 / 100% 100% no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    height: calc(100% - 120px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .item {

      .section {
        min-width: 200px;
        min-height: 200px;
        background: url('~img/common/panel.png') 0 0 / 100% 100% no-repeat;
      }
    }
    .left {
      width: 30%;
    }
    .center {
      width: 40%;
    }
    .right {
      width: 30%;
    }
  }
}
</style>