/*
 * @Author: WangJiang
 * @Date: 2020-06-27 14:00:43
 * @LastEditTime: 2020-06-27 14:14:51
 * @LastEditors: Please set LastEditors
 * @Description: 获取TOKEN用于登陆鉴权
 * @FilePath: /icesium/src/utils/auth.js
 */
const token = 'token'

export function getToken() {
  return localStorage.getItem(token)
}
export function setToken(str) {
  return localStorage.setItem(token, str)
}
export function removeToken() {
  return localStorage.removeItem(token)
}
