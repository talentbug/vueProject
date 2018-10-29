import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// 导入后台Home主页
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
