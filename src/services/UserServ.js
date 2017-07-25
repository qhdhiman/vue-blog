import $http from '@/api/http'
const act = 'user'
/**
 * 注册
 * @param name
 * @param phone
 * @param password
 * @returns {Promise.<TResult>}
 */
const signup = async ({name, phone, password}) => {
  const params = {
    name, phone, password
  }
  const res = await $http.post(`${act}/signup`, params).then(res => res.json())
  return res
}
/**
 * 登录
 * @param name
 * @param password
 * @returns {Promise.<TResult>}
 */
const signin = async ({name, password}) => {
  const params = {
    name, password
  }
  const res = await $http.post(`${act}/signin`, params).then(res => res.json())
  return res
}
/**
 * 退出操作
 * @param name
 * @param password
 * @returns {Promise.<TResult>}
 */
const signout = async ({name, password}) => {
  const params = {
    name, password
  }
  const res = await $http.post(`${act}/signout`, params).then(res => res.json())
  return res
}
export default {
  signup,
  signin,
  signout
}

