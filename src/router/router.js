import Vue from 'vue'
import Router from "vue-router"
import Home from "../views/Home.vue"
import pageprofile from "../views/pageprofileView.vue"





Vue.use(Router)

export default Router({
    mode: 'history',

    routes: [

        { path: '/', name: 'home', component: Home },
        { path: '/pageprofile', name: 'pageprofile', component: pageprofile }
        


       
    ]


})
