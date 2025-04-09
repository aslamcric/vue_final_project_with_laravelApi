import About from "@/pages/About.vue";
import CreateCategory from "@/pages/categories/CreateCategory.vue";
import ManageCategory from "@/pages/categories/ManageCategory.vue";
import UpdateCategory from "@/pages/categories/UpdateCategory.vue";
import CreateCustomer from "@/pages/customers/CreateCustomer.vue";
import ManageCustomer from "@/pages/customers/ManageCustomer.vue";
import UpdateCustomer from "@/pages/customers/UpdateCustomer.vue";
import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";
import CreateProduct from "@/pages/products/CreateProduct.vue";
import ManageProduct from "@/pages/products/ManageProduct.vue";
import UpdateProduct from "@/pages/products/UpdateProduct.vue";
import CreateSupplier from "@/pages/suppliers/CreateSupplier.vue";
import ManageSupplier from "@/pages/suppliers/ManageSupplier.vue";
import UpdateSupplier from "@/pages/suppliers/UpdateSupplier.vue";
import CreateUser from "@/pages/users/CreateUser.vue";
import ManageUser from "@/pages/users/ManageUser.vue";
import UpdateUser from "@/pages/users/UpdateUser.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Dashboard },

  // Customer
  { path: "/customers", component: ManageCustomer },
  { path: "/customers/create", component: CreateCustomer },
  { path: "/customers/edit/:id", component: UpdateCustomer },

  // Supplier
  { path: "/suppliers", component: ManageSupplier },
  { path: "/suppliers/create", component: CreateSupplier },
  { path: "/suppliers/edit/:id", component: UpdateSupplier },

  // Product
  { path: "/products", component: ManageProduct },
  { path: "/products/create", component: CreateProduct },
  { path: "/products/edit/:id", component: UpdateProduct },

  // User
  { path: "/users", component: ManageUser },
  { path: "/users/create", component: CreateUser },
  { path: "/users/edit/:id", component: UpdateUser },

  // Categoriex
  { path: "/categories", component: ManageCategory },
  { path: "/categories/create", component: CreateCategory },
  { path: "/categories/edit/:id", component: UpdateCategory },

  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
