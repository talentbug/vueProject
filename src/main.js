import Vue from 'vue'
import App from './App'
import router from './router'
// 导入axios
import axios from 'axios'

// 导入全局样式
import './assets/css/global.css'
// 导入全局字体图标
import './assets/fonts/iconfont.css'

// 导入element-ui组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
