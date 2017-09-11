<template>
  <mu-dialog :open="show" title="评论" titleClass="title" @close="close">
    <mu-card-text>
      <mu-text-field label="评论内容" labelFloat multiLine :rows="2" :rowsMax="6" v-model="comment" :fullWidth="true"/>
    </mu-card-text>
    <mu-raised-button slot="actions" label="取消" @click="close" />
    <mu-raised-button slot="actions" label="确定" :disabled="!canSave" @click="save" primary/>
  </mu-dialog>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      show: false,
      comment: ''
    }
  },
  computed: {
    canSave () {
      return this.comment
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
      this.comment = ''
    },
    save () {
      this.$emit('input', this.comment)
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
