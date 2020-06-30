/*
 * @Author: your name
 * @Date: 2020-06-23 23:13:07
 * @LastEditTime: 2020-06-30 16:25:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
let Cesium = require('cesium/Cesium')
import widgets from 'cesium/Widgets/widgets.css'
// import animatecss from 'animate.css';  //引入第三方动画库
// Vue.use(animatecss)

import iView from 'iview'; //引入iview
import 'iview/dist/styles/iview.css'; //引入iview的css样式文件
Vue.use(iView)

import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(ant)

import axios from './utils/http'
Vue.prototype.$axios = axios

import myCharts from "echarts";
Vue.prototype.$echarts = myCharts

import '@/permission'


Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets
require('./mock')
// import Mock from '@/mock'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
