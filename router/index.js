import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Login/login.vue'
import JobList from '../Job/joblist.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/jobs', component: JobList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
