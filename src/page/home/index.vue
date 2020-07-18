<!--
 * @Author: your name
 * @Date: 2020-06-30 16:37:44
 * @LastEditTime: 2020-07-18 19:13:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/cesium/index.vue
--> 
<template>
  <div class="home-wrapper">
    <topHeader />
    <div class="content">
      <div class="left item">
        <div class="section animate__animated animate__fadeInLeftBig animate__faster">
          <vChart :id="'leftOption'"  :data="leftOption" :styleHeight="'100%'"/>
        </div>
        <div class="section animate__animated animate__fadeInLeftBig animate__faster animate__delay-1s">
          <vChart :id="'left02Option'"  :data="left02Option" :styleHeight="'100%'"/>
        </div>
        <div class="section animate__animated animate__fadeInLeftBig animate__faster animate__delay-2s"></div>
      </div>
      <div class="center item">
        <div class="section">
          <vChart :id="'center01Option'"  :data="center01Option" :styleHeight="'100%'"/>
        </div>
      </div>
      <div class="right item">
        <div class="section">
          <vChart :id="'right01Option'"  :data="right01Option" :styleHeight="'100%'"/>
        </div>
        <div class="section">
          <!-- <vChart :id="'right02Option'"  :data="right02Option" :styleHeight="'100%'"/> -->
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>
<script>
import topHeader from '@/components/app-head/head'
import foot from '@/components/app-foot/foot'
import vChart from '@/components/app-echarts/chart'
import option from './option'
export default {
  components: { topHeader, foot , vChart},
  data() {
    return {
      leftOption: {},
      left02Option: {},
      center01Option: {},
      right01Option: {},
      right02Option: {}
    }
  },
  mounted() {
    this.leftOption = option.leftOption()
    this.left02Option = option.left02Option()
    this.center01Option = option.center01Option()
    this.right01Option = option.right01Option()
    this.right02Option = option.right02Option()
  },
  methods: {
    click() {
      this.$router.push('/cesiumm')
    }
  }
}
</script>
<style lang="scss" scoped>
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
    padding:  0 20px;
    .item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .section {
        height: calc(33.333333% - 12px);
        padding: 14px;
        background: url('~img/common/panel.png') 0 0 / 100% 100% no-repeat;
      }
    }
    .left {
      width: calc(30% - 18px);
    }
    .center {
      width: 40%;
    }
    .right {
      width: calc(30% - 18px);
    }
  }
}
</style>