<template>
  <mu-dialog :open="value" title="注册" titleClass="title" @close="close">
    <mu-card-text>
      <mu-text-field label="用户名" labelFloat v-model="name" :fullWidth="true"/>
      <mu-text-field label="手机号" labelFloat v-model="name" :fullWidth="true"/>
      <mu-text-field label="密码" type="password" labelFloat v-model="password" :fullWidth="true"/>
    </mu-card-text>
    <mu-flat-button slot="actions" @click="close" primary label="取消"/>
    <mu-flat-button slot="actions" primary @click="close" label="确定"/>
  </mu-dialog>
</template>

<script>
export default {
  name: 'dialog',
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
  methods: {
    close () {
      this.$emit('input', false)
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
