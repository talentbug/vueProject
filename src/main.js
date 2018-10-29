import Vue from 'vue'
import App from './App'
import router from './router'

// 导入全局样式
import './assets/css/global.css'
// 导入全局字体图标
import './assets/fonts/iconfont.css'

// 导入element-ui组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
