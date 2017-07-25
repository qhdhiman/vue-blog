import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({loginUser: 'loginUser'}),
    isLogin () { // 用户是否登录
      return this.loginUser.name
    }
  },
  methods: {
    ...mapActions({signout: 'signout'}) // 映射 this.signin() 为 this.$store.dispatch('signin')
  }
}
