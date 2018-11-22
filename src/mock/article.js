import Mock from 'mockjs'
const Random = Mock.Random
const store = window.localStorage

/**
 * 获取全部数据
 */
export const all = (options) => {
  const query = new URLSearchParams(options.url.substr(options.url.indexOf('?')))
  let list = []
  let token = store.getItem('token')
  for (let i = 0; i < query.get('limit'); i++) {
    let comments = []
    let max = Random.integer(0, 5)
    for (let j = 0; j < max; j++) {
      comments.push(newComment())
    }
    let article = {
      _id: Random.guid(),
      owner: token && Math.floor(Math.random() * 2) ? loginUser(token) : newUser(),
      title: Random.ctitle(5, 20),
      content: Random.cparagraph(5, 20),
      tags: '',
      comments: comments,
      likes: [],
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
/**
 * 发布文章
 */
export const add = (options) => {
  // const query = new URLSearchParams(options.body)
  console.log('options', options)
  let token = store.getItem('token')
  let comments = []
  let max = Random.integer(0, 5)
  for (let j = 0; j < max; j++) {
    comments.push(newComment())
  }
  let article = {
    _id: Random.guid(),
    owner: loginUser(token),
    title: Random.ctitle(5, 20),
    content: Random.cparagraph(5, 20),
    tags: '',
    comments: comments,
    likes: [],
    create_time: Random.now(),
    origin: {}
  }
  return {
    result: 'ok',
    code: 200,
    data: article
  }
}
/**
 * 获用户数据
 */
export const list = (options) => {
  const query = new URLSearchParams(options.url.substr(options.url.indexOf('?')))
  let list = []
  const user = newUser('某一个')
  for (let i = 0; i < query.get('limit'); i++) {
    let comments = []
    let max = Random.integer(0, 5)
    for (let j = 0; j < max; j++) {
      comments.push(newComment())
    }
    let article = {
      _id: Random.guid(),
      owner: user,
      title: Random.ctitle(5, 20),
      content: Random.cparagraph(5, 20),
      tags: '',
      comments: comments,
      likes: [],
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
/**
 * 点赞
 */
export const like = () => {
  const success = Math.floor(Math.random() * 2)
  return success ? {
    result: 'ok',
    code: 200,
    data: []
  } : {
    result: 'false',
    code: 0,
    data: 'mock 模拟失败'
  }
}
/**
 * 评论
 */
export const comment = (options) => {
  const success = Math.floor(Math.random() * 2)
  const query = new URLSearchParams(options.body)
  return success ? {
    result: 'ok',
    code: 200,
    data: newComment(query.get('comment'), true)
  } : {
    result: 'false',
    code: 0,
    data: 'mock 模拟失败'
  }
}
/**
 * 收藏
 */
export const favorite = (options) => {
  const success = Math.floor(Math.random() * 2)
  // const query = new URLSearchParams(options.body)
  return success ? {
    result: 'ok',
    code: 200,
    data: []
  } : {
    result: 'false',
    code: 0,
    data: 'mock 模拟失败'
  }
}

function loginUser (token) {
  return JSON.parse(store.getItem(token))
}

function newUser (name = Random.cname()) {
  return {
    _id: Random.guid(),
    name: name,
    phone: 1234567890,
    head: Random.image('100x100', Random.color(), name.slice(0, 1))
  }
}
function newComment (content = Random.csentence(5, 7), isNow) {
  return {
    _id: Random.guid(),
    user: newUser(),
    comment: content,
    create_time: isNow ? Random.now() : Random.now('week')
  }
}
