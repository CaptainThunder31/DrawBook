import { createRouter, createWebHistory } from 'vue-router'
import { routeSet } from './routeSet.js'
import Home from '../components/Home.vue'
import Game from '../components/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      transition: 'fade',
      title: 'RPS Arena',
      historyClean: true
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    meta: {
      transition: 'slide-left',
      title: 'Start Game'
    }
  }
]

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