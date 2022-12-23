import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (JSON.parse(localStorage.getItem("loginUser")) == null) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    if (JSON.parse(localStorage.getItem("loginUser")) != null) {
      next({ name: "Dashboard" });
    } else {
      next();
    }
  }
});

export default router;
