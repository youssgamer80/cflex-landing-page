import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Maintenance from '../pages/Maintenance.vue'
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'


const routes=[
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundPage',
        component: NotFoundPage
    },
    {
        path: '/',
        name: 'Maintenance',
        components: {
            default: Maintenance,
            Footer : Footer
        }
    },
    {
        path: '/home',
        name: 'Home',
        components: {
            default: Home,
            NavBar : NavBar,
            Hero : Hero,
            Footer : Footer
        }
    },
    {
        path: '/about',
        name: 'About',
        components: {
            default:About,
            Footer : Footer
        }
    }
]
const router = createRouter({
history: createWebHistory(),
routes
})

export default router