<script setup>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import SmallNav from './components/SmallNav.vue'
</script>

<template>
    <Nav />

    <SmallNav />

    <main class="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div class="z-10 max-w-2xl p-5" :class="{ 'mb-14': $route.path != '/' }">
            <RouterView v-slot="{ Component }">
                <component :is="Component" />
            </RouterView>
        </div>

        <Footer />

        <Transition>
            <video
                v-if="$route.path == '/'"
                muted
                loop
                autoplay
                preload="none"
                class="absolute -z-50 w-auto min-w-full min-h-full max-w-none"
                style="filter: brightness(70%)"
            >
                <source src="/videos/background.mp4" type="video/mp4" />
            </video>
            <video
                v-else
                muted
                loop
                autoplay
                preload="none"
                class="absolute -z-50 w-auto min-w-full min-h-full max-w-none"
                style="opacity: 0.01"
            >
                <source src="/videos/background.mp4" type="video/mp4" />
            </video>
        </Transition>
    </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-leave-to {
    opacity: 0;
}
</style>
