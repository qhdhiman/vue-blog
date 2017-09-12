<template>
  <div class="container">
    <mu-card>
      <mu-card-text>
        <mu-text-field label="昵称" labelFloat v-model="nikeName"/>
        <mu-text-field label="手机号" labelFloat v-model="phone"/>
        <mu-text-field label="签名" labelFloat :multiLine="true" :rows="2" :rowsMax="4" v-model="introduction"/>
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button :disabled="!canSave" fullWidth @click="save" label="保存" secondary/>
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
  import ArticleServ from '@/services/ArticleServ'
  export default {
    name: 'Profile',
    data () {
      return {
        name: '',
        nikeName: '',
        phone: '',
        introduction: ''
      }
    },
    computed: {
      canSave () {
        return this.name && this.password
      }
    },
    async mounted () {
    },
    methods: {
      async save () {
        console.log('title', this.title)
        console.log('content', this.content)
        const params = {
          title: this.title,
          content: this.content,
          tags: this.tags
        }
        const res = await ArticleServ.add(params)
        if (res.result === 'ok') {
          this.$parent.showToast({message: '保存成功'})
          this.$router.back()
        }
      }
    }
  }
</script>

<style scoped>
  .mu-text-field {
    width:100%;
  }

</style>
