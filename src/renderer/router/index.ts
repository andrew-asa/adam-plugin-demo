import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@renderer/Index.vue"),
    // component: index
  },
  
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
export { routes, router };
