import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/store'

const HomePage = () => import('../pages/HomePage.vue')
const ApartmentPage = () => import('../pages/ApartmentPage.vue')
const LoginPage = () => import('../pages/LoginPage.vue')
const RegisterPage = () => import('../pages/RegisterPage.vue')
const MyOrders = () => import('../pages/MyOrders.vue')
const ErrorPage = () => import('../pages/ErrorPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        hideForAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        hideForAuth: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/my-orders',
      name: 'my-orders',
      component: MyOrders,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/apartment/:id',
      name: 'apartment',
      component: ApartmentPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error-page',
      component: ErrorPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn']

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'login' })
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: 'home' })
    }
  }

  next()
})

export default router
