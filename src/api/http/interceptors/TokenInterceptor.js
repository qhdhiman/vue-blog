import Token from '@/api/Token'
/**
 * token 设置
 */
export default (request, next) => {
  request.headers.set('Authorization', `Bearer ${Token.getItem()}`)
  next()
}
