/*
 * @Author: your name
 * @Date: 2019-11-22 17:44:36
 * @LastEditTime: 2020-06-26 23:28:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/router/module/common.js
 */ 
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/login')
  },
]