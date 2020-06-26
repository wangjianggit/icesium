/*
 * @Author: your name
 * @Date: 2020-06-24 14:54:00
 * @LastEditTime: 2020-06-26 22:49:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/mock/user.js
 */ 
import Mock from 'mockjs'
 
const token={ 
  "token":"@guid"
};
 
Mock.mock('/api/getToken', 'post', token)
 
export default Mock