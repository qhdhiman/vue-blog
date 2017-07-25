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
  console.log('res', res)
  return res
}

export default {
  all
}

