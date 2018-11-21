import Mock from 'mockjs'
const Random = Mock.Random

/**
 * 获取全部数据
 */
export const all = () => {
  let list = []
  for (let i = 0; i < 10; i++) {
    let comments = []
    let max = Random.integer(0, 5)
    for (let j = 0; j < max; j++) {
      comments.push(newComment())
    }
    let article = {
      _id: Random.natural(),
      owner: newUser(),
      title: Random.ctitle(5, 20),
      content: Random.cparagraph(5, 20),
      tags: '',
      comments: comments,
      create_time: Random.now('week'),
      origin: {}
    }
    list.push(article)
  }
  return {
    result: 'ok',
    code: 200,
    data: list
  }
}

function newUser () {
  const name = Random.cname()
  return {
    name: name,
    phone: 1234567890,
    head: Random.image('100x100', Random.color(), name.slice(0, 1))
  }
}
function newComment () {
  return {
    _id: Random.natural(),
    user: newUser(),
    comment: Random.csentence(5, 7),
    create_time: Random.now('week')
  }
}
