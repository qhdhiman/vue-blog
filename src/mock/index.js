import Mock from 'mockjs'
import * as Article from './article'

Mock.setup({
  timeout: 400
})

Mock.mock(/\/article\/all/, Article.all)

export default Mock
