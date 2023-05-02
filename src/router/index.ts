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
    path: "/cart",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/Cart/Index.vue"),
        name: "Cart",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
