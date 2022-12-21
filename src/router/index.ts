import client from '@/pocketbase';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: () => import('../views/DashboardView.vue')
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !client?.authStore.token) {
    return {
      path: "/"
    }
  }
})

export default router
