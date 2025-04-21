import { createWebHistory, createRouter } from 'vue-router'
import Carousel from "./components/homepage/Carousel.vue";
import Education from "./components/Education.vue";
import Home from "./components/Home.vue";
import Faq from "./components/Faq.vue";
import Pricing from "./components/Pricing.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/admin/dashboard.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: Carousel
    }
    ,
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    }
    ,
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing
    }
    ,
    {
        path: '/education',
        name: 'education',
        component: Education
    } ,
    {
        path: '/login',
        name: 'login',
        component: Login
    }

    ,
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true } 
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('api_token'); // টোকেন আছে কি না
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'login' }); // যদি লগিন না করা থাকে
    } else {
      next(); // সব ঠিক থাকলে
    }
  });

export default router;