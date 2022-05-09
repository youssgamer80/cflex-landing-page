import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/features',
    name: 'features',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/FeaturesView.vue')
  },
  {
    path: '/newDemande',
    name: 'newDemande',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/DemandeView.vue')
  },
  {
    path: '/statusDemande',
    name: 'statusDemande',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/StatusDemandeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/ContactView.vue')
  },
  {
    path: '/aproposstructure',
    name: 'aproposstructure',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/AproposView.vue')
  }
  // {
  //   path: '/newDemande',
  //   name: 'newDemande',
  //   // route level code-splitting
  //   // this generates a separate chunk (features.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "features" */ '../views/DemandeView.vue')
  // }


]

const router = new VueRouter({
  routes
})

export default router
