import { mapGetters, mapActions } from 'vuex'
import TokenServ from '@/api/Token'
export default {
  computed: {
    ...mapGetters({loginUser: 'loginUser'}),
    isLogin () { // 用户是否登录
      return this.loginUser.name
    }
  },
  methods: {
    ...mapActions({signout: 'signout', getLoginUser: 'getLoginUser'}) // 映射 this.signin() 为 this.$store.dispatch('signin')
  },
  mounted () { // 使用token获取用户登录信息
    const token = TokenServ.getItem()
    if (token) this.getLoginUser(token)
  }
}
