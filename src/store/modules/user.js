import * as types from '../mutations-type'
import UserServ from '@/services/UserServ'
import TokenServ from '@/api/Token'
/**
 * 登录用户信息
 * @type {{user: {name: string, password: string, head: string, phone: string}}}
 */
const state = {
  user: {
    name: '',
    password: '',
    head: '',
    phone: ''
  }
}

const getters = {
  loginUser: state => state.user
}

const actions = {
  async signin ({commit, state}, user) {
    const res = await UserServ.signin(user)
    if (res.result === 'ok') {
      const token = res.data.token
      TokenServ.setItem(token)
      const user = await UserServ.getLoginUser(token)
      if (user.result === 'ok') {
        commit(types.SET_LOGIN_USER, user.data)
      }
    }
    return res
  },
  async getLoginUser ({commit, state}, token) {
    const res = await UserServ.getLoginUser(token)
    if (res.result === 'ok') {
      commit(types.SET_LOGIN_USER, res.data)
    }
    return res
  },
  async signup ({commit, state}, user) {
    const res = await UserServ.signup(user)
    if (res.result === 'ok') {
      TokenServ.setItem(res.data.token)
      delete res.data.token
      commit(types.SET_LOGIN_USER, res.data)
    }
    return res
  },
  async signout ({commit, state}) {
    // const res = await UserServ.signout()
    // if (res.result === 'ok') {
    TokenServ.setItem('')
    commit(types.SET_LOGIN_USER, {})
    // }
    // return res
  }
}

const mutations = {
  [types.SET_LOGIN_USER] (state, user) {
    console.log('user', user)
    state.user = {
      name: user.name,
      password: user.password,
      head: user.head,
      phone: user.phone
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

