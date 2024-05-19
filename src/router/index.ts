import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import demo from '@/pages/demo.vue'
import page1 from '@/pages/page1.vue'
import user from '@/pages/user.vue'

export default createRouter({
  history: createWebHistory(),
  // routes: []
  routes: [
    {
      path: '/login',
      name: 'login',
      component: demo
    },
    {
      component: layout,
      path: '/',
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页',
            icon: 'house'
          },
          component: page1
        },
        {
          path: '/users',
          name: 'users',
          meta: {
            title: '客户',
            icon: 'user'
          },
          component: user
        }
      ]
    }
  ]
})