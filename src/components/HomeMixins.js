export default {
  data() {
    return {

    }
  },
  methods: {
    logout() {
      // 点击退出登录
      sessionStorage.removeItem('token')
      // 编程式导航
      this.$router.push('/login')
    }
  }
}
