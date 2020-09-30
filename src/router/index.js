import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Simple from '../views/Simple.vue'
import Avanzado from '../views/Avanzado.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'Inicio',
        component:()=> import(/*webpackChunkName:"inicio"*/'../views/Inicio.vue')
    },
    {
        path:'/inicio',
        name:'Inicio2',
        redirect:'/'
    },
    {
        path:'/home',
        name:'home',
        redirect:'/'
    },
    {
        path:'/portada',
        name:'portada',
        redirect:'/'
    },
    {
        path: '/contacto',
        alias:['/contactame'],
        component:()=> import(/*webpackChunkName:"contacto"*/'../views/Contacto.vue')
        
    },
    {
        path:'/sobremi',
        name:'SobreMi',
        component:()=> import(/*webpackChunkName:"sobremi"*/'../views/SobreMi.vue'),
        alias:['/acerca']
        
    },
    {
        path: '/post/1',
        name: 'Articulo',
        component:()=> import(/*webpackChunkName:"articulo"*/'../views/Articulo.vue')
    },
    {
        path:'/administrador/simple',
        name: 'simple',
        component: Simple
    },
    {
        path:'/administrador/avanzado',
        name: 'avanzado',
        component: Avanzado
    },
    {
        path: '/*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router