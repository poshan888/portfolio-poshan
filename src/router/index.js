import { createRouter, createWebHistory } from 'vue-router'
import HomeContent from '@/views/HomeContent.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import PhotographyPage from '@/views/PhotographyPage.vue'
import FashionPage from '@/views/FashionPage.vue'
import PagenotFound from '@/views/PagenotFound.vue'

const routes = [
  { path: '/', component: HomeContent },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/photography', component: PhotographyPage },
  { path: '/fashion', component: FashionPage },
  { path: '/pagenotfound', component: PagenotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path == '/photography' || to.path == '/fashion') next({ path: '/PageNotFound' })
  next()
})

export default router
