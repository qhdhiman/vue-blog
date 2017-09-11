import * as types from '../mutations-type'
import ArticleServ from '@/services/ArticleServ'

const state = {
  article: {
    _id: '',
    owner: {},
    title: '',
    content: '',
    comments: [],
    create_time: ''
  }
}

const getters = {
  article: state => state.article
}

const actions = {
  /**
   * 评论
   * @param {*} param
   * @param {*} playload
   */
  async comment ({commit, state}, playload) {
    const res = await ArticleServ.comment(playload)
    if (res.result === 'ok') {
      commit(types.SET_ARTICLE_COMMENT, res.data)
    }
    return res
  },
  /**
   * 点赞
   * @param {*} param
   * @param {*} playload
   */
  async like ({commit, state}, playload) {
    const res = await ArticleServ.like(playload)
    if (res.result === 'ok') {
      commit(types.SET_ARTICLE_LIKE, res.data)
    }
    return res
  },
  /**
   * 取消点赞
   * @param {*} param
   * @param {*} playload
   */
  async unlike ({commit, state}, playload) {
    const res = await ArticleServ.unlike(playload)
    if (res.result === 'ok') {
      commit(types.SET_ARTICLE_UNLIKE, res.data)
    }
    return res
  }
}

const mutations = {
  [types.SET_ARTICLE] (state, article) {
    state.article = {
      _id: article._id,
      owner: article.owner,
      title: article.title,
      content: article.title,
      comments: article.comments,
      likes: article.likes,
      create_time: article.create_time
    }
  },
  /**
   * 评论
   * @param {*} state
   * @param {*} comment
   */
  [types.SET_ARTICLE_COMMENT] (state, comment) {
    comment.user = state.article.owner
    state.article.comments.push(comment)
  },
  /**
   * 点赞
   * @param {*} state
   * @param {*} like
   */
  [types.SET_ARTICLE_LIKE] (state, like) {
    const user = state.article.owner
    state.article.likes = state.article.likes.filter(item => {
      return user._id !== item.user._id
    })
  },
  /**
   * 取消点赞
   * @param {*} state
   * @param {*} like
   */
  [types.SET_ARTICLE_UNLIKE] (state, like) {
    like.user = state.article.owner
    state.article.likes.push(like)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

