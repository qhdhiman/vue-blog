const store = window.localStorage
const key = 'token'
/**
 * 设置token
 */
const setItem = (token) => {
  store.setItem(key, token)
}
const getItem = () => {
  return store.getItem(key)
}

export default {
  setItem,
  getItem
}
