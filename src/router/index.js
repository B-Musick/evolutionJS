import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InputSequenceView from '../views/InputSequenceView.vue'
import UploadSequenceView from '../views/UploadSequenceView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/wiki',
  //   name: 'wiki',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/WikiView.vue')
  // },
  {
    path: '/upload',
    name: 'upload',
    component: UploadSequenceView
  },
  {
    path: '/input',
    name: 'input',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: InputSequenceView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
