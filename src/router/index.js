import { createRouter, createWebHistory } from "vue-router"
import UserView from "@/views/UserView.vue"

const routes = [
    {path: "/user", component: UserView
    }

];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export { router }