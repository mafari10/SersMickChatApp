import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome.vue";
import Chatroom from "@/views/Chatroom.vue";
import { projectAuth } from "@/firebase/config";

const authGuard = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("current user in authguard: ", user);
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      component: Chatroom,
      beforeEnter: authGuard,
    },
  ],
});

export default router;
