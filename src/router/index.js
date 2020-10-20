import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../views/layout/AppLayout.vue";

const routes = [
  { path: "/", name: "Home", component: AppLayout },
  { path: "/:notFound(.*)", name: "NotFound", component: null }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
