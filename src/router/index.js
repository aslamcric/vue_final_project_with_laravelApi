import About from '@/pages/About.vue';
import CreateCustomer from '@/pages/customers/CreateCustomer.vue';
import ManageCustomer from '@/pages/customers/ManageCustomer.vue';
import UpdateCustomer from '@/pages/customers/UpdateCustomer.vue';
import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';
import CreateProduct from '@/pages/products/CreateProduct.vue';
import ManageProduct from '@/pages/products/ManageProduct.vue';
import CreateSupplier from '@/pages/suppliers/CreateSupplier.vue';
import ManageSupplier from '@/pages/suppliers/ManageSupplier.vue';
import UpdateSupplier from '@/pages/suppliers/UpdateSupplier.vue';

import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  { path: "/", component: Dashboard },
  { path: "/customers", component: ManageCustomer },
  { path: "/customers/create", component: CreateCustomer },
  { path: "/customers/edit/:id", component: UpdateCustomer },

  { path: "/suppliers", component: ManageSupplier },
  { path: "/suppliers/create", component: CreateSupplier },
  { path: "/suppliers/edit/:id", component: UpdateSupplier },

  { path: "/products", component: ManageProduct },
  { path: "/products/create", component: CreateProduct },
  // { path: '/suppliers/edit/:id', component: UpdateSupplier },

  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;