/*
 * @Author: your name
 * @Date: 2020-06-23 23:13:07
 * @LastEditTime: 2020-06-26 23:33:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/router/index.js
 */ 
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import test from '@/components/test'
// import Index from '@/page/Index'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: Index
//     }
//   ]
// })


import Vue from 'vue'
import Router from 'vue-router'

import common from "./module/common" // 公共路由模块
import home from "./module/home" // 主页

Vue.use(Router)

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...home,
    ...common,
  ]
})



