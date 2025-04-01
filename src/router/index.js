// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// On importe les vues avec lesquelles on va naviguer
// Une vue, une route
// On les rappelera sous leur name (ci-bas) avec le Router-link 
// Il remplacera la balise <a>

const router = createRouter({
    history: createWebHistory(),
    routes: [
    ]
})

export default router