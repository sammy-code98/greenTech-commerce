import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Auth/Login.vue"),
        name: "Login",
      },
    ],
  },
  {
    path: "/sign-up",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Auth/SignUp.vue"),
        name: "SignUp",
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Dashboard/Dashboard.vue"),
        name: "Dashboard",
      },
    ],
  },
  {
    path: "/products",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Products/index.vue"),
        name: "Products",
      },
    ],
  },
  {
    path: "/orders",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Orders/Index.vue"),
        name: "Orders",
      },
    ],
  },
  {
    path: "/blog",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Blog/index.vue"),
        name: "Blog",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
