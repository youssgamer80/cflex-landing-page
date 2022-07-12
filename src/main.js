import Vue from 'vue'
// import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'flowbite';
import axios from 'axios';
import VueRouter from 'vue-router'
import 'sweetalert2/dist/sweetalert2.min.css';
import store from "./stores/store";


import VueSweetalert2 from 'vue-sweetalert2';
// import store from "./store";
import './Service/axiosurl'





import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';



const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ED4845',
};


Vue.use(VueToast);

Vue.use(VueSweetalert2 ,options);



// importation de axios url


// ajout de ça egalement
Vue.config.productionTip = false;
Vue.use(VueRouter);





Vue.use(axios)

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
