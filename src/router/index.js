import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/project/:slug',
    name: 'project',
    component: ProjectDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Добавляем глобальную навигационную защиту
router.beforeEach((to, from, next) => {
  console.log('Navigation:', { from: from.path, to: to.path, params: to.params })
  next()
})

export default router 