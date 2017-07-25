<template>
  <div>
    <mu-appbar title="知识库">
      <mu-avatar src="static/avatar.jpg" slot="left"/>
      <mu-icon-menu icon="more_vert" slot="right"  @change="handleChange">
        <mu-menu-item title="注册" value="signup"/>
        <mu-menu-item title="登录" value="signin" />
        <mu-menu-item title="退出" value="signout" />
      </mu-icon-menu>
    </mu-appbar>
    <dialog-signin v-model="signin"></dialog-signin>
    <dialog-signup v-model="signup"></dialog-signup>
  </div>
</template>

<script>
import DialogSignin from '@/components/dialog/Signin'
import DialogSignup from '@/components/dialog/Signup'
export default {
  name: 'TopBar',
  data () {
    return {
      signup: false,
      signin: false
    }
  },
  methods: {
    handleChange (value) {
      switch (value) {
        case 'signin':
          this.signin = true
          break
        case 'signup':
          this.signup = true
          break
        case 'signout':
          break
      }
    }
  },
  components: {
    DialogSignin,
    DialogSignup
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mu-appbar {
    position: fixed;
    top:0;
    left:0;
  }
</style>
