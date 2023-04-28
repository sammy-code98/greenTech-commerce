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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
