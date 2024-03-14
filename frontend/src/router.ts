import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomeP.vue";
import SignUp from "./pages/SignUp.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: SignUp,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
