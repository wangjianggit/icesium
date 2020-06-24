// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
let Cesium = require('cesium/Cesium')
import widgets from 'cesium/Widgets/widgets.css'
 
Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets
if (process.env.MOCK) {    // 判断是否为mock模式
  require('./mock/index.js')
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
