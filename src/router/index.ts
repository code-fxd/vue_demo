import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () => import("@/views/layout/LayoutView.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/home/HomeView.vue"),
        name: "home",
      },
      {
        path: "/wiki",
        component: () => import("@/views/wiki/WikiHome.vue"),
        name: "wiki",
      },
      {
        path: "/api",
        component: () => import("@/views/apiService/ApiServiceHome.vue"),
        name: "api",
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
