/**
 * 错误拦截器
 */
export default (request, next) => {
  next(response => {
    if (!response.ok) {
      console.error(response.data)
    } else {
      if (response.data.result !== 'ok') {
        console.error(response.data.data)
      }
    }
  })
}
