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
  async comment ({commit, state}, playload) {
    const res = await ArticleServ.comment(playload)
    if (res.result === 'ok') {
      commit(types.SET_ARTICLE_COMMENT, res.data)
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
      create_time: article.create_time
    }
  },
  [types.SET_ARTICLE_COMMENT] (state, comment) {
    comment.user = state.article.owner
    state.article.comments.push(comment)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

