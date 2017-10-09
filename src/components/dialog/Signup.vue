<template>
  <mu-dialog :open="value" title="注册" titleClass="title" @close="close">
    <mu-card-text>
      <mu-text-field label="用户名" labelFloat v-model="name" :fullWidth="true"/>
      <mu-text-field label="手机号" labelFloat v-model="phone" :fullWidth="true"/>
      <mu-text-field label="密码" type="password" labelFloat v-model="password" :fullWidth="true"/>
    </mu-card-text>
    <mu-raised-button slot="actions" label="取消" @click="close" />
    <mu-raised-button slot="actions" label="注册" :disabled="!canSave" @click="save" primary/>
  </mu-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'signup',
  props: {
    value: [Boolean]
  },
  data () {
    return {
      name: '',
      phone: '',
      password: ''
    }
  },
  computed: {
    canSave () {
      return this.name && this.phone && this.password
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
      signup: 'signup' // 映射 this.signup() 为 this.$store.dispatch('signup')
    }),
    async save () {
      const params = {
        name: this.name,
        phone: this.phone,
        password: this.password
      }
      const res = await this.signup(params)
      if (res.result === 'ok') {
        this.toast.showToast({message: '注册成功'})
        this.close()
      } else {
        this.toast.showToast({message: `注册失败:${res.data}`})
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
