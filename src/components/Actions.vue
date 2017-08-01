<template>
  <div>
    <mu-flat-button icon="thumb_up" label="点赞" @click="like"/>
    <mu-flat-button icon="feedback" label="评论" @click="comment"/>
    <mu-flat-button icon="favorite_border" label="收藏" @click="favorite"/>
    <DialogComment v-model="dialog"></DialogComment>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import * as types from '@/store/mutations-type'
  import DialogComment from './dialog/Comment'
  export default {
    name: 'actions',
    props: {
      article: [Object]
    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      ...mapMutations({
        setArticle: types.SET_ARTICLE
      }),
      like () {

      },
      comment () {
        this.setArticle(this.article)
        this.dialog = true
      },
      favorite () {

      }
    },
    components: {
      DialogComment
    }
  }
</script>

<style scoped>
</style>
