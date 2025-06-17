import { createRouter, createWebHistory } from 'vue-router'
import { routeSet } from './routeSet.js'
import HomePage from '../pages/HomePage.vue'  // Changed from Home.vue
import GamePage from '../pages/GamePage.vue'  // Changed from Game.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Now using HomePage
    meta: {
      transition: 'fade',
      title: 'RPS Arena',
      historyClean: true
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage,  // Now using GamePage
    meta: {
      transition: 'slide-left',
      title: 'Start Game'
    }
  }
]

// Rest of your router configuration remains the same
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.historyClean) {
    routeSet.routeHistory.value = [to.name];
  } else {
    routeSet.add(to.name);
  }

  // Set document title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
})

export default router