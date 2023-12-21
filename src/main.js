import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Contact from './contact.vue'
import Recherche from './Recherche.vue'

const routes = [
  { path: '/contact', component: Contact },
  { path: '/Recherche', component: Recherche }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
