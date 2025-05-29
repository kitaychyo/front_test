import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../components/Details.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project/:id',
      name: 'project-details',
      component: Details,
      props: true,
      beforeEnter: (to, from, next) => {
        const id = Number(to.params.id)
        if (isNaN(id)) {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})

// Добавляем глобальную навигационную защиту
router.beforeEach((to, from, next) => {
  console.log('Navigation:', { from: from.path, to: to.path, params: to.params })
  next()
})

export default router 