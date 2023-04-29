import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../pages/TheHome.vue")
        },
        {
            path: "/vuetify",
            name: "vuetify",
            component: () => import("../pages/TheVuetify.vue")
        },
        {
            path: "/common",
            name: "common",
            component: () => import("../pages/TheCommon.vue")
        },
    ]
})

export default router;