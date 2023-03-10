import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/de/DashboardView.vue'
import ReferentielView from '../views/de/ReferentielView.vue'
import CreateActiviteView from '../views/de/CreateActiviteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },{
      path: '/referentiel',
      name: 'referentiel',
      component: ReferentielView
    },{
      path: '/referentiel/activite',
      name: 'activite',
      component: CreateActiviteView

    }
  ]
})

export default router
