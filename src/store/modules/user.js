/*
 * @Author: your name
 * @Date: 2020-06-27 14:41:32
 * @LastEditTime: 2020-06-28 20:07:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/store/modules/user.js
 */
import loginMoudle from '@/api/module/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

const user = {
  state: {
    token: '',
    // token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  },

  actions: {
    Login({commit}, userInfo) {
      console.log(loginMoudle)
      userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginMoudle.login(userInfo).then(res => {
          setToken(res.data.token)
          commit('SET_TOKEN', res.data.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 前端退出
    FedLoginOut({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}


export default user