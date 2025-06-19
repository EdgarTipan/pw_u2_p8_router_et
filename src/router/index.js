import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import LibroTablaView from '../views/LibroTablaView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'
import PokemonView from '../views/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/libroTabla',
    name: 'libroTablaView',
    component: LibroTablaView
  },
  {
    path: '/estudianteTabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },
  {
    path: '/randomUser',
    name: 'RandomUserView',
    component: () => import(/* webpackChunkName: "RandomUserView" */ '../views/RandomUserView.vue')
  },
  {
    path: '/pregunta',
    name: 'PreguntaView',
    component: () => import(/* webpackChunkName: "PreguntaView" */ '../views/PreguntaView.vue')
  },
  {
    path: '/contador',
    name: 'ContadorView',
    component: () => import(/* webpackChunkName: "ContadorView" */ '../views/ContadorView.vue')
  }, {
    path: '/pokemonAPI',
    name: 'pokemonView',
    component: PokemonView
  },
    {
    path: '/componenteResponsivo',
    name: 'ComponenteResponsivoView',
    component: () => import(/* webpackChunkName: "Pokemon" */ '../views/ComponenteResponsivoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
