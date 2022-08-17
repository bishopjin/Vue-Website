import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/', 
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView

    },
    {
      path: '/about-me',
      name: 'about',
      component: AboutView
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFoundView
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})

export default router
