import { createRouter, createWebHistory } from 'vue-router'
import KataListView from '@/views/katas/KataListView.vue'
import KataDetailView from '@/views/katas/KataDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/katas'
    },
    {
      path: '/katas',
      name: 'katas',
      component: KataListView
    },
    {
      path: '/katas/:id',
      name: 'kata-detail',
      component: KataDetailView
    },
  ],
})

export default router
