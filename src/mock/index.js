import Mock from 'mockjs'
import * as Article from './article'
import * as User from './user'

Mock.setup({
  timeout: 400
})

Mock.mock(/\/article\/all/, Article.all)  // 获取全部文章列表
Mock.mock(/\/article\/add/, Article.add)  // 发布文章
Mock.mock(/\/article\/like/, Article.like) // 点赞
Mock.mock(/\/article\/comment/, Article.comment) // 评论
Mock.mock(/\/article\/favorite/, Article.favorite) // 收藏
Mock.mock(/\/article\/list/, Article.list) // 获取用户文章列表

Mock.mock(/\/user\/signin/, User.signin) // 登录
Mock.mock(/\/user\/signup/, User.signup) // 注册
Mock.mock(/\/user\/getLoginUser/, User.getLoginUser) // 获取用户信息
Mock.mock(/\/user\/signout/, User.signout) // 退出

export default Mock
