import { createRouter, createWebHistory } from 'vue-router'
import contact from './contact.vue'
import Recherche from './Recherche' 


const routes = [
  { path: '/contact', component:contact },
  { path: '/Recherche', component: Recherche }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
