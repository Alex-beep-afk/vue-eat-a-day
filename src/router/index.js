// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'
import RandomView from '@/Views/RandomView.vue'

// On importe les vues avec lesquelles on va naviguer
// Une vue, une route
// On les rappelera sous leur name (ci-bas) avec le Router-link 
// Il remplacera la balise <a>

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/random',
        name: 'random',
        component: RandomView
    },
    {
        path: '/custom',
        name: 'custom',
        component: () => import('@/Views/PersoView.vue')
    }
    ]
})

export default router