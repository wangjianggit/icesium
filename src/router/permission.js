/*
 * @Author: your name
 * @Date: 2019-11-02 17:33:52
 * @LastEditTime: 2020-06-26 23:34:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/router/permission.js
 */ 
// import router from './router'
// // import store from './store'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // 验权

// const whiteList = ['/login'] // 不重定向白名单

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if (getToken()) {
//     if (window.localStorage.getItem('token') - new Date().getTime()/1000 <= 0) {
//       store.dispatch('FedLogOut').then(() => {
//         Message.error(err || '验证失败请重新登录')
//         next({ path: '/' })
//       })
//     } else {
//       if (to.path === '/login') {
//         next({ path: '/' })
//         NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   NProgress.done() 
// })
