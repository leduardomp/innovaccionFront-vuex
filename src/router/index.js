import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/principal',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrusel',
    name: 'carrusel',
    component: HomeView
  },
  {
    path: '/ordenes',
    name: 'ordenes',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
