import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/landing.vue'
import AboutPage from '../views/about.vue'
import ServicesPage from '../views/services.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
