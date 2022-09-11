import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Maintenance from '../pages/Maintenance.vue'
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
import HomeContent from '../components/HomeContent.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import Demande from '../pages/Demande.vue'
import DemandeForm from '../components/DemandeForm.vue'


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
            HomeContent : HomeContent,
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
    },
    {
        path: '/demande',
        name: 'Demande',
        components: {
            default:Demande,
            DemandeForm : DemandeForm,
            Footer : Footer
        }
    }
]
const router = createRouter({
history: createWebHistory(),
routes
})

export default router