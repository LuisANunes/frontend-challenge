import { createRouter, createWebHistory } from "vue-router";
import TranscriptionsList from "../views/transcriptions/TranscriptionsList.vue";

const routes = [
  { path: "/", name: "Home", component: TranscriptionsList },
  { path: "/:notFound(.*)", name: "NotFound", component: null }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
