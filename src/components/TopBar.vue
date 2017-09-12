<template>
  <div>
    <mu-appbar title="知识库">
      <mu-avatar v-if="isLogin" :src="loginUser.head" slot="left" @click="goProfile"/>
      <mu-icon-menu icon="more_vert" slot="right"  @change="handleChange">
        <template v-if="!isLogin">
          <mu-menu-item title="注册" value="signup"/>
          <mu-menu-item title="登录" value="signin" />
        </template>
        <template v-else>
          <mu-menu-item title="修改信息" value="profile"/>
          <mu-menu-item title="修改密码" value="password" />
          <mu-menu-item title="退出" value="signout" />
        </template>
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
  computed: {
    loginUser () {
      return this.$root.loginUser
    },
    isLogin () {
      return this.$root.isLogin
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
        case 'profile':
          this.goProfile()
          break
        case 'password':
          this.goPassword()
          break
        case 'signout':
          this.$root.signout()
          this.$router.go(-history.length)
          break
      }
    },
    goProfile () {
      this.$router.push({path: '/user/profile'})
    },
    goPassword () {
      this.$router.push({path: '/user/pwd'})
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
