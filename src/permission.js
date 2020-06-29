/*
 * @Author: your name
 * @Date: 2019-11-02 17:33:52
 * @LastEditTime: 2020-06-27 17:48:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/router/permission.js
 */ 
import router from './router'
import store from './store'
//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


// import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (window.localStorage.getItem('token') - new Date().getTime()/1000 <= 0) {
      store.dispatch('FedLogOut').then(() => {
        Message.error(err || '验证失败请重新登录')
        next({ path: '/' })
      })
    } else {
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done() 
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() 
})
