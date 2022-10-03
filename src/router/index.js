import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";
import nProgress from "nprogress";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("@/views/ProjectsView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.name) {
        nProgress.start();
    }
    next();
});

router.afterEach(() => {
    nProgress.done();
});

export default router;
