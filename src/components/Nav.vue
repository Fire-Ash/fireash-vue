<template>
    <div class="md:sticky md:top-20 space-y-2">
        <h1 class="text-4xl font-semibold">Hi, I'm Ash.</h1>
        <h2 class="text-lg">Web developer with experience mostly in Laravel</h2>
        <div class="flex space-x-5">
            <a href="https://github.com/Fire-Ash"><i class="fa-brands fa-github"></i> GitHub</a>
            <a href="https://twitter.com/fire_ash_"><i class="fa-brands fa-twitter"></i> Twitter</a>
            <a href="https://blog.fireash.cf"><i class="fa-solid fa-folder"></i> Blog</a>
        </div>
        <div>
            <ul class="space-y-2">
<!--                <li>-->
<!--                    <NavLink path="/" name="Home" />-->
<!--                </li>-->
                <li>
                    <NavLink path="/about" name="About Me" />
                </li>
                <li>
                    <NavLink path="/projects" name="Projects" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import NavLink from "@/components/NavLink.vue";

export default {
    name: "Nav",
    components: { NavLink }
};
</script>

<style scoped>
.nav-link {
    @apply btn w-full;
}

@media (min-width: 768px) {
    .nav {
        height: 80vh;
    }
}
</style>