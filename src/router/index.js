import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'slide-right' } 
  },
  {
    path: '/game',
    name: 'Game', 
    component: Game,
    meta: { transition: 'slide-left' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router