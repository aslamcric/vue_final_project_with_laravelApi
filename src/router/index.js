import About from '@/pages/About.vue';
import ManageCustomer from '@/pages/customers/ManageCustomer.vue';
import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';

import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  { path: '/', component: Dashboard },
  { path: '/customers', component: ManageCustomer },


  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;