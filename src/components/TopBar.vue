<template>
  <div>
    <mu-appbar title="知识库">
      <mu-avatar v-if="isLogin" :src="loginUser.head" slot="left" @click="goProfile"/>
      <mu-icon-menu icon="more_vert" slot="right"  @change="handleChange">
        <mu-menu-item title="主页" value="home"/>
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
    <dialog-signin ref="signin"></dialog-signin>
    <dialog-signup ref="signup"></dialog-signup>
  </div>
</template>

<script>
import DialogSignin from '@/components/dialog/Signin'
import DialogSignup from '@/components/dialog/Signup'
export default {
  name: 'TopBar',
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
          console.log(this.$refs)
          this.$refs.signin.open()
          break
        case 'signup':
          this.$refs.signup.open()
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
        case 'home':
          this.$router.push({path: '/'})
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
  mounted () {
    this.$on('signup', (value) => {
      console.log('signup', value)
    })
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
