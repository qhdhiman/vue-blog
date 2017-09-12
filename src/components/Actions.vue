<template>
  <div>
    <mu-flat-button v-if="!isLiked" icon="thumb_up" label="点赞" @click="like"/>
    <mu-flat-button v-else icon="thumb_up" label="取消点赞" @click="unlike"/>
    <mu-flat-button icon="feedback" label="评论" @click="$refs.commentDialog.open()"/>
    <mu-flat-button icon="favorite_border" label="收藏" @click="favorite"/>

    <DialogComment ref="commentDialog" @input="comment"></DialogComment>
  </div>
</template>

<script>
  import DialogComment from './dialog/Comment'
  import ArticleServ from '@/services/ArticleServ'
  export default {
    name: 'actions',
    props: {
      article: [Object]
    },
    data () {
      return {
        isCommenting: false
      }
    },
    computed: {
      user () {
        return this.$root.loginUser
      },
      articleId () {
        return this.article._id
      },
      toast () {
        return this.$root.$children[0]
      },
      isLiked () {
        return this.article.likes && this.article.likes.findIndex(item => item.user._id === this.user._id) >= 0
      }
    },
    methods: {
      /**
       * 点赞
       */
      async like () {
        const res = await ArticleServ.like({articleId: this.articleId})
        if (res.result === 'ok') {
          this.toast.showToast({message: '点赞成功'})
          this.article.likes.push({
            article: this.articleId,
            user: this.user
          })
        } else {
          this.toast.showToast({message: `点赞失败:${res.data}`})
        }
      },
      /**
       * 取消点赞
       */
      async unlike () {
        const res = await ArticleServ.unlike({articleId: this.articleId})
        if (res.result === 'ok') {
          this.toast.showToast({message: '取消点赞成功'})
          const exits = this.article.likes.findIndex(item => item.user._id === this.user._id)
          if (exits !== -1) this.article.likes.splice(exits, 1)
        } else {
          this.toast.showToast({message: `取消点赞失败:${res.data}`})
        }
      },
      /**
       * 评论
       */
      async comment (comment) {
        if (this.isCommenting) return
        this.isCommenting = true
        const params = {
          articleId: this.articleId,
          comment: comment
        }
        const res = await ArticleServ.comment(params)
        if (res.result === 'ok') {
          this.toast.showToast({message: '评论成功'})
          this.article.comments.push({
            article: this.articleId,
            user: this.user,
            comment: comment
          })
          this.$refs.commentDialog.close()
        } else {
          this.toast.showToast({message: `评论失败:${res.data}`})
        }
        this.isCommenting = false
      },
      /**
       * 收藏
       */
      async favorite () {
        const params = {
          articleId: this.articleId
        }
        const res = await ArticleServ.favorite(params)
        if (res.result === 'ok') {
          this.toast.showToast({message: '收藏成功'})
          this.$emit('favorite', res.data)
        } else {
          this.toast.showToast({message: `收藏失败:${res.data}`})
        }
      }
    },
    components: {
      DialogComment
    }
  }
</script>

<style scoped>
</style>
