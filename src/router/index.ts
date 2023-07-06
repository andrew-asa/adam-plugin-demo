import { createRouter, createWebHashHistory } from "vue-router"
import Home from "@renderer/Home.vue"
const routes = [{
    path: "/",
    name: "home",
    // component: () => import("@renderer/home.vue")
    component: Home
}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
export { routes, router }