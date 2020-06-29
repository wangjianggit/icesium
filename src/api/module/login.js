/*
 * @Author: your name
 * @Date: 2020-06-27 15:01:28
 * @LastEditTime: 2020-06-27 17:44:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/api/module/login.js
 */
import Mock from 'mockjs'
import axios from 'axios'

const token = {
  "token": "@guid"
};
Mock.mock('/api/getToken', 'post', token)


export default {
  login (param) {
    return axios.post('/api/getToken',param)
  },
  Mock
}
