import { createRouter, createWebHistory } from 'vue-router'
import { routeSet } from './routeSet.js'
import HomePage from '../pages/HomePage.vue'
import GamePage from '../pages/GamePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { 
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: {
      transition: 'fade',
      title: 'RPS Arena',
      historyClean: true,
      showHeader: true,
      showDrawer: true
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage,
    meta: {
      transition: 'slide-left',
      title: 'Start Game',
      showHeader: false,
      showDrawer: false
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

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
})

export default router