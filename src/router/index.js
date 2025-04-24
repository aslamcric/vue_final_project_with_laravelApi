import MainLayout from "@/layout/MainLayout.vue";
import CreateCategory from "@/pages/categories/CreateCategory.vue";
import ManageCategory from "@/pages/categories/ManageCategory.vue";
import UpdateCategory from "@/pages/categories/UpdateCategory.vue";
import CreateCustomer from "@/pages/customers/CreateCustomer.vue";
import ManageCustomer from "@/pages/customers/ManageCustomer.vue";
import UpdateCustomer from "@/pages/customers/UpdateCustomer.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Sign_in from "@/pages/logingRegister/Sign_in.vue";
import NotFound from "@/pages/NotFound.vue";
import ManageOrderDetail from "@/pages/orderDetails/ManageOrderDetail.vue";
import CreateOrder from "@/pages/orders/CreateOrder.vue";
import ManageOrder from "@/pages/orders/ManageOrder.vue";
import ShowOrder from "@/pages/orders/ShowOrder.vue";
import CreateProduct from "@/pages/products/CreateProduct.vue";
import ManageProduct from "@/pages/products/ManageProduct.vue";
import UpdateProduct from "@/pages/products/UpdateProduct.vue";
import ManagePurchaseDetail from "@/pages/purchaseDetail/ManagePurchaseDetail.vue";
import CreatePurchase from "@/pages/purchases/CreatePurchase.vue";
import ManagePurchase from "@/pages/purchases/ManagePurchase.vue";
import ShowPurchase from "@/pages/purchases/ShowPurchase.vue";
import OrderReport from "@/pages/reports/OrderReport.vue";
import PurchaseReport from "@/pages/reports/PurchaseReport.vue";
import ManageStock from "@/pages/stocks/ManageStock.vue";
import CreateSupplier from "@/pages/suppliers/CreateSupplier.vue";
import ManageSupplier from "@/pages/suppliers/ManageSupplier.vue";
import UpdateSupplier from "@/pages/suppliers/UpdateSupplier.vue";
import CreateUser from "@/pages/users/CreateUser.vue";
import ManageUser from "@/pages/users/ManageUser.vue";
import UpdateUser from "@/pages/users/UpdateUser.vue";
import { useAuthStore } from "@/store/AuthStore";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", name: "Login", component: Sign_in, meta: { public: true } },
  {
    path: "/",
    component: MainLayout,

    children: [
      { path: "/", component: Dashboard },
      { path: "/home", component: Dashboard },
      { path: "dashboard", component: Dashboard },

      // Customer
      { path: "customers", component: ManageCustomer },
      { path: "customers/create", component: CreateCustomer },
      { path: "customers/edit/:id", component: UpdateCustomer },

      // Supplier
      { path: "suppliers", component: ManageSupplier },
      { path: "suppliers/create", component: CreateSupplier },
      { path: "suppliers/edit/:id", component: UpdateSupplier },

      // Product
      { path: "products", component: ManageProduct },
      { path: "products/create", component: CreateProduct },
      { path: "products/edit/:id", component: UpdateProduct },

      // User
      { path: "users", component: ManageUser },
      { path: "users/create", component: CreateUser },
      { path: "users/edit/:id", component: UpdateUser },

      // Categoriex
      { path: "categories", component: ManageCategory },
      { path: "categories/create", component: CreateCategory },
      { path: "categories/edit/:id", component: UpdateCategory },

      // Order
      { path: "orders", component: ManageOrder },
      { path: "orders/create", component: CreateOrder },
      { path: "orders/show/:id", component: ShowOrder },

      // OrderDetail
      { path: "orderDetails", component: ManageOrderDetail },

      // Purchase
      { path: "purchase", component: ManagePurchase },
      { path: "purchases/create", component: CreatePurchase },
      { path: "purchases/show/:id", component: ShowPurchase },

      // PurchaseDetail
      { path: "purchaseDetails", component: ManagePurchaseDetail },

      // Stock
      { path: "stocks", component: ManageStock },

      // Report
      { path: "orderReport", component: OrderReport },
      { path: "purchaseReport", component: PurchaseReport },
    ],
  },
  // Not Found
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (!to.meta.public && !auth.token) {
    return next("/login");
  }
  next();
});

export default router;
