import { createRouter, createWebHistory } from "vue-router";
import LoginRouter from "../modules/login/router";
import HomeRouter from "../modules/home/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...HomeRouter, ...LoginRouter],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !sessionStorage.getItem("access_token")) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
