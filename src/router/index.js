import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CesiumToolView from '../views/CesiumToolView'
import Menu from '../views/Menu'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/CesiumToolView',
    name: 'CesiumToolView',
    component: CesiumToolView
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
