import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'wechat',
    component: () => import( '../views/wechat.vue')
  },
  {
    path:'/ping',
    name: 'ping',
    component: () => import( '../views/ping.vue')
  },
  {
    path:'/stock',
    name: 'stock',
    component: () => import( '../views/stock.vue')
  },
  {
    path:'/stocks',
    name: 'stocks',
    component: () => import( '../views/stocks.vue')
  },
  {
    path:'/details',
    name: 'details',
    component: () => import( '../views/details.vue')
  },
  {
    path:'/logo',
    name: 'logo',
    component: () => import( '../views/logo.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
