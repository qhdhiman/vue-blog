<template>
  <div class="container">
    <mu-card>
      <mu-card-text>
        <mu-text-field label="旧密码" labelFloat type="password" v-model="pwd"/>
        <mu-text-field label="新密码" labelFloat type="password" v-model="password"/>
        <mu-text-field label="确认密码" labelFloat type="password" v-model="password2"/>
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
    name: 'Password',
    data () {
      return {
        pwd: '',
        password: '',
        password2: ''
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
