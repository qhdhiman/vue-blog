<template>
  <mu-dialog :open="value" title="评论" titleClass="title" @close="close">
    <mu-card-text>
      <mu-text-field label="评论内容" labelFloat multiLine :rows="3" :rowsMax="6" v-model="comment" :fullWidth="true"/>
    </mu-card-text>
    <mu-raised-button slot="actions" label="取消" @click="close" />
    <mu-raised-button slot="actions" label="确定" :disabled="!canSave" @click="save" primary/>
  </mu-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'comment',
  props: {
    value: [Boolean]
  },
  data () {
    return {
      comment: ''
    }
  },
  computed: {
    ...mapGetters(['article']),
    canSave () {
      return this.comment
    },
    toast () {
      return this.$root.$children[0]
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    ...mapActions({
      setComment: 'comment'
    }),
    async save () {
      console.log(this.article)
      const params = {
        articleId: this.article._id,
        comment: this.comment
      }
      const res = await this.setComment(params)
      if (res.result === 'ok') {
        this.toast.showToast({message: '评论成功'})
        this.close()
      } else {
        this.toast.showToast({message: `评论失败:${res.data}`})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .title {
    background-color: #7e57c2;
    color: #fff;
  }
</style>
