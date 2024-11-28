import LoginView from "../views/LoginView.vue";

const router = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requiresAuth: false },
  },
];

export default router;
