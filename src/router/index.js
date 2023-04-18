import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ApartmentPage from '../pages/ApartmentPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
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
