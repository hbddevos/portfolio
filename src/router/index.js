import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Cv from '@/views/Cv.vue'
import Project from '@/views/Project.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/projects',
      name: 'projects',
      // component: Projects
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/project/:id',
      // name: 'project',
      component: Project
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv
    }
  ]
})

export default router
