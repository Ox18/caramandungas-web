import HomeView from "../views/HomeView.vue";

const router = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
];

export default router;
