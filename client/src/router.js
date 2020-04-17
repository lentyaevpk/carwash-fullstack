import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'
import store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/prices',
            component: () => import('./views/Prices.vue')
        },
        {
            path: '/feedback',
            component: () => import('./views/Feedback.vue')
        },
        {
            path: '/works',
            component: () => import('./views/Works.vue')
        },
        {
            path: '/login',
            component: () => import('./views/Registration.vue'),
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/profile',
            component: () => import('./components/Profile.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0,0);
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!store.getters.isLoggedIn) {
            next('/login')
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if(store.getters.isLoggedIn) {
            next('/profile')
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;