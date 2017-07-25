<template>
  <div class="container">
    <TopBar></TopBar>
    <mu-card>
      <mu-card-text>
        <mu-text-field label="用户名" labelFloat v-model="name"/>
        <mu-text-field label="手机号" labelFloat v-model="phone"/>
        <mu-text-field label="密码" type="password" labelFloat v-model="password"/>
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button :disabled="!canSave" @click="save" label="注册" class="demo-raised-button" secondary/>
        <mu-flat-button label="登录"/>
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import ArticleServ from '@/services/ArticleServ'
  export default {
    name: 'Signup',
    data () {
      return {
        name: '',
        phone: '',
        password: ''
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
    },
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  .mu-text-field {
    width:100%;
  }

</style>
