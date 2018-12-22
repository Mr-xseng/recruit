import Router from 'vue-router'
import Vue from 'vue'
import Home from '../client/home/home'
import Login from '../client/login/login'
import Singup from '../client/singup/singup'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
          path: '/home',
          component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/singup',
            component: Singup
        }
    ]

})


