import { createRouter, createWebHistory } from 'vue-router'
import TheMainView from '@/views/TheMainView'

const routes = [
  {
    path: '/',
    name: 'main',
    component: TheMainView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
