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

export default {
  all,
  add
}

