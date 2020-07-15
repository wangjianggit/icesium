/*
 * @Author: your name
 * @Date: 2020-06-23 23:13:07
 * @LastEditTime: 2020-07-09 10:13:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
let Cesium = require('cesium/Cesium')
import widgets from 'cesium/Widgets/widgets.css'
import animatecss from 'animate.css'; //引入第三方动画库
Vue.use(animatecss)

import iView from 'iview'; //引入iview
import 'iview/dist/styles/iview.css'; //引入iview的css样式文件
Vue.use(iView)

import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(ant)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

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
