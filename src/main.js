import { createApp } from 'vue'
    import { createRouter, createWebHistory } from 'vue-router'
    import App from './App.vue'
    import './index.css'

    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: () => import('./views/Home.vue') },
        { path: '/gallery', component: () => import('./views/Gallery.vue') },
        { path: '/services', component: () => import('./views/Services.vue') },
        { path: '/contact', component: () => import('./views/Contact.vue') }
      ]
    })

    createApp(App).use(router).mount('#app')
