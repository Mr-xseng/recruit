import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('client/home/home.vue')
    },
    {
      path: '/home',
      component: () => import('client/home/home.vue')
    },
    {
      path: '/login',
      component: () => import('client/login/login.vue')
    },
    {
      path: '/register',
      component: () => import('client/register/register.vue')
    },
    {
      path: '/active',
      component: () => import('client/active/active')
    },
    {
      path: '/detail/:id',
      component: () => import('client/detail/detail')
    },
    {
      path: '/user',
      component: () => import('client/user/user')
    },
    {
      path: '/activeCode',
      component: () => import('client/activeCode/activeCode')
    },
    {
      path: '/search',
      component: () => import('client/search/search')
    },
    {
      path: '/changeCity',
      component: () => import('client/changeCity/changeCity')
    }
  ]

})
