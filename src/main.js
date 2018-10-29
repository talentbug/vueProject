import Vue from 'vue'
import App from './App'
import router from './router'
// 导入axios 发送ajax请求
import axios from 'axios'

// 导入全局样式
import './assets/css/global.css'
// 导入全局字体图标
import './assets/fonts/iconfont.css'

// 导入element-ui组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 添加路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取令牌
  const token = sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

// 把axios挂载到Vue上
// 配置baseURL地址
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios
// 在每次请求头中添加token令牌
axios.interceptors.request.use(
  function (config) {
    // 获取令牌
    const token = sessionStorage.getItem('token')
    // 把令牌，添加到每次的ajax请求中
    config.headers.Authorization = token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
