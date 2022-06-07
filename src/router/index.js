import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatutProfileDemande from '../components/StatutProfileDemande.vue'
import FormModifDemandeInt from '@/components/FormModifDemandeInt.vue'
import Infoprofile from '@/components/page/infoproprietaireprofile/InfoProfileInt.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/infoprofile/:id?',
    name: 'infoprofile',
    component: Infoprofile,
    props: true
  },
  {
    path: '/formProprietaire',
    name: 'formProprietaire',
    // route level code-splitting     redirect: "/contact"
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "features" */ '../components/FormProprietaire.vue')
  },
  // {
  //   path: '/formModifDemande',
  //   name: 'formModifdemande',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "features" */ '../components/FormModifDemandeInt.vue')
  // },
  { path: '/statut/:id?', name:'statut', component: StatutProfileDemande, props: true },

  { path: '/modifdemande/:id?', name:'modifdemande', component:FormModifDemandeInt , props: true },

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
  }


]


const router = new VueRouter({
  routes
})

export default router
