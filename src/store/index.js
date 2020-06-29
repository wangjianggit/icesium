/*
 * @Author: your name
 * @Date: 2020-06-27 14:42:38
 * @LastEditTime: 2020-06-27 16:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/store/modules/index.js
 */ 
import Vue from 'vue'
import VueX from 'vuex'
import user from './modules/user'


import getters from './getters'


Vue.use(VueX)

const store = new VueX.Store({
  modules: {
    user
  },
  getters
})


export default store