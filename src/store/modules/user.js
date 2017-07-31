import * as types from '../mutations-type'
import UserServ from '@/services/UserServ'
import Token from '@/api/Token'
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
      console.log(res)
      const _token = res.data.token
      const user = await UserServ.getLoginUser(_token)
      if (user.result === 'ok') {
        Token.setItem(res.data.token)
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
    const res = await UserServ.signin(user)
    if (res.result === 'ok') commit(types.SET_LOGIN_USER, res.data)
    return res
  },
  async signout ({commit, state}) {
    // const res = await UserServ.signout(state.user)
    // if (res.result === 'ok')
    commit(types.SET_LOGIN_USER, {})
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

