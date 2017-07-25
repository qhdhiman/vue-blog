<template>
  <div>
    <mu-appbar title="知识库">
      <mu-avatar :src="loginUser.head" slot="left"/>
      <mu-icon-menu icon="more_vert" slot="right"  @change="handleChange">
        <template v-if="!loginUser.name">
          <mu-menu-item title="注册" value="signup"/>
          <mu-menu-item title="登录" value="signin" />
        </template>
        <mu-menu-item v-else title="退出" value="signout" />
      </mu-icon-menu>
    </mu-appbar>
    <dialog-signin v-model="signin"></dialog-signin>
    <dialog-signup v-model="signup"></dialog-signup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapGetters({loginUser: 'loginUser'})
  },
  methods: {
    ...mapActions({signout: 'signout'}), // 映射 this.signin() 为 this.$store.dispatch('signin')
    handleChange (value) {
      switch (value) {
        case 'signin':
          this.signin = true
          break
        case 'signup':
          this.signup = true
          break
        case 'signout':
          this.signout()
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
