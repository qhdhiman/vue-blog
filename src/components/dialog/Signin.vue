<template>
  <mu-dialog :open="value" title="登录" titleClass="title" @close="close">
    <mu-card-text>
      <mu-text-field label="用户名" labelFloat v-model="name" :fullWidth="true"/>
      <mu-text-field label="密码" type="password" labelFloat v-model="password" :fullWidth="true"/>
    </mu-card-text>
    <mu-raised-button slot="actions" label="取消" @click="close" />
    <mu-raised-button slot="actions" label="登录" :disabled="!canSave" @click="save" primary/>
  </mu-dialog>
</template>

<script>
  import UserServ from '@/services/UserServ'
  export default {
    name: 'signin',
    props: {
      value: [Boolean]
    },
    data () {
      return {
        name: '',
        password: ''
      }
    },
    computed: {
      canSave () {
        return this.name && this.password
      },
      toast () {
        return this.$root.$children[0]
      }
    },
    methods: {
      close () {
        this.$emit('input', false)
      },
      async save () {
        const params = {
          name: this.name,
          password: this.password
        }
        const res = await UserServ.signin(params)
        if (res.result === 'ok') {
          this.toast.showToast({message: '登录成功'})
          this.close()
        } else {
          this.toast.showToast({message: `登录失败:${res.data}`})
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
