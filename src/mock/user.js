import Mock from 'mockjs'
const Random = Mock.Random
const store = window.localStorage
let user = {}

/**
 * 登录
 */
export const signin = (options) => {
  const query = new URLSearchParams(options.body)
  user.name = query.get('name')
  user.password = query.get('password')
  user.token = Random.guid()
  return {
    result: 'ok',
    code: 200,
    data: {
      token: user.token
    }
  }
}
/**
 * 注册
 */
export const signup = (options) => {
  const query = new URLSearchParams(options.body)
  user.name = query.get('name')
  user.password = query.get('password')
  user.phone = query.get('phone')
  user = newUser(user)
  const token = Random.guid()
  store.setItem(token, JSON.stringify(user))
  return {
    result: 'ok',
    code: 200,
    data: {token, ...user}
  }
}
/**
 * 获取用户信息
 */
export const getLoginUser = (options) => {
  const query = new URLSearchParams(options.body)
  let token = query.get('token')
  let loginUser = JSON.parse(store.getItem(token))
  if (!loginUser || !loginUser._id) {
    loginUser = newUser(user)
    store.setItem(token, JSON.stringify(loginUser))
  }
  return {
    result: 'ok',
    code: 200,
    data: loginUser
  }
}

export const signout = () => {
  store.clear()
  return {
    result: 'ok',
    code: 200,
    data: []
  }
}

function newUser ({name = Random.cname(), password, phone = 1234567890} = {}) {
  return {
    _id: Random.guid(),
    name: name,
    phone: phone,
    head: Random.image('100x100', Random.color(), name.slice(0, 1))
  }
}
