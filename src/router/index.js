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
    path: '/formProprietaire',
    name: 'formProprietaire',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:() => import(/* webpackChunkName: "features" */ '../components/FormProprietaire.vue')
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
    path: '/footerC',
    name: 'footerC',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/FooterView.vue')
  },
  {
    path: '/features',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/NavBarComponentView.vue')
  },
  {
    path: '/newDemande',
    name: 'newDemande',
    
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
  },
  {
    path: '/connexionDemande',
    name: 'connexionDemande',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/ConnexionDemandeView.vue')
  }


  
  ,
  {
    path: '/modale',
    name: 'modale',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../components/ModalComponent.vue')
  }
    ,
  {
    path: '/numcomponent',
    name: 'numcomponent',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/numComponentView.vue')
  },
  // {
  //   path: '/popupannuler',
  //   name: 'popupannuler',
  //   // route level code-splitting
  //   // this generates a separate chunk (features.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "features" */ '../views/numComponentView.vue')
  // },
  {
    path: '/pageprofile',
    name: 'pageprofile',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/pageprofileView.vue')
  },
  {
    path: '/formdemanproprietaireint',
    name: 'formdemanproprietaireint',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../components/FormDemanproprietaireInt.vue')
  },
  {
    path: '/formDemproprietaire',
    name: 'formDemproprietaire',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../components/FormDemproprietaire.vue')
  },
  {
    path: '/popupannuler',
    name: 'popupannuler',
    // route level code-splitting
    // this generates a separate chunk (features.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../views/numComponentView.vue')
  }



]


const router = new VueRouter({
  routes
})

export default router
