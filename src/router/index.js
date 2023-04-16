import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ApartmentPage from '../pages/ApartmentPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/apartment/:id',
      name: 'apartment',
      component: ApartmentPage
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error-page',
      component: ErrorPage
    }
  ]
})

export default router
