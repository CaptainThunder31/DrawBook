import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'slide-right' } // Changed to slide-right for consistency
  },
  {
    path: '/game',
    name: 'Game', // Changed from 'Page' to 'Game' to match component
    component: Game,
    meta: { transition: 'slide-left' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Improved navigation guard
router.beforeEach((to, from, next) => {
  // When going back to Home from Game, replace history
  if (from.name === 'Game' && to.name === 'Home') {
    next({ ...to, replace: true })
  } 
  // When going forward to Game, normal push
  else {
    next()
  }
})

export default router