import $http from '@/api/http'
const act = 'article'
/**
 * 获取文章列表
 * @param page 当前页
 * @param limit 条数
 */
const all = async ({page, limit}) => {
  const params = {
    page: page,
    limit: limit
  }
  const res = await $http.get(`${act}/all`, {params: params}).then(res => res.json())
  return res
}
/**
 * 获取默一用户文章列表
 * @param userId 用户id
 * @param page 当前页
 * @param limit 条数
 */
const listByUserId = async (userId, {page, limit}) => {
  const params = {
    page: page,
    limit: limit
  }
  const res = await $http.get(`${act}/list/${userId}`, {params: params}).then(res => res.json())
  return res
}
/**
 * 添加文章
 * @param title
 * @param content
 * @param tags
 * @returns {res}
 */
const add = async ({title, content, tags}) => {
  const params = {
    title, content, tags
  }
  const res = await $http.post(`${act}/add`, params).then(res => res.json())
  return res
}
/**
 * 评论
 * @param articleId
 * @param comment
 * @returns {Promise.<TResult>}
 */
const comment = async ({articleId, comment}) => {
  const params = {
    articleId, comment
  }
  const res = await $http.post(`${act}/comment`, params).then(res => res.json())
  return res
}
/**
 * 点赞
 * @param {*} param0
 */
const like = async ({articleId}) => {
  const params = {
    articleId
  }
  const res = await $http.post(`${act}/like`, params).then(res => res.json())
  return res
}
/**
 * 取消点赞
 * @param {*} param0
 */
const unlike = async ({articleId}) => {
  const params = {
    articleId
  }
  const res = await $http.post(`${act}/unlike`, params).then(res => res.json())
  return res
}
/**
 * 收藏
 * @param {*} param
 */
const favorite = async ({articleId}) => {
  const params = {
    articleId
  }
  return await $http.post(`${act}/favorite`, params).then(res => res.json())
}

export default {
  listByUserId,
  all,
  add,
  comment,
  like,
  unlike,
  favorite
}

