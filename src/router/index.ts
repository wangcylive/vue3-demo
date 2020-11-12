import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/setup',
    redirect: '/setup/base',
    name: 'Setup',
    component: () => import('@/views/setup/index.vue'),
    children: [
      { path: 'watch', component: () => import('@/views/setup/watch.vue') },
      { path: 'render', component: () => import('@/views/setup/render.vue') },
      { path: 'base', component: () => import('@/views/setup/base.vue') },
      { path: 'inject', component: () => import('@/views/setup/inject/index.vue') },
      { path: 'basic-reactivity', component: () => import('@/views/setup/basic-reactivity.vue') },
      { path: 'ref', component: () => import('@/views/setup/ref/index.vue') },
    ],
  },
  {
    path: '/change',
    name: 'Change',
    component: () => import('@/views/change/index.vue'),
  },
  {
    path: '/ts',
    name: 'Ts',
    component: () => import('@/views/ts/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
