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


// importation de axios url
import './Service/axiosurl'
// ajout de ca egalement
Vue.config.productionTip = false;





Vue.use(axios)

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
