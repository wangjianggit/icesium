// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
let Cesium = require('cesium/Cesium')
import widgets from 'cesium/Widgets/widgets.css'

import axios from './utils/http'
Vue.prototype.$axios = axios

import myCharts  from "echarts";
Vue.prototype.$echarts = myCharts


Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets
require('./mock')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
