<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'

const showMobileNav = ref(false)

const navItems = [
    {
        link: '/',
        name: 'Home',
        type: 0
    },
    {
        link: '/about',
        name: 'About',
        type: 0
    },
    {
        link: '/projects',
        name: 'Projects',
        type: 0
    },
    {
        link: '/my-work',
        name: 'My Work',
        type: 0
    }
]
</script>

<template>
    <nav
        class="
            hidden
            fixed
            z-10
            md:flex
            justify-between
            content-center
            w-full
            h-full
        "
    >
        <div
            class="border-l hover:border-none grid content-center ml-5 gap-10"
            style="pointer-events: none"
        >
            <RouterLink
                v-for="(item, index) in navItems"
                :to="item.link"
                class="
                    block
                    hover:border-l
                    p-5
                    hover:border-fuchsia-500
                    text-white
                    nav-link
                "
                style="pointer-events: auto"
            >
                <span>{{ index + 1 }}.</span>
                <span class="nav-label mx-2">{{ item.name }}</span>
            </RouterLink>
        </div>
        <div
            class="border-r hover:border-none grid content-center mr-5 gap-4"
            style="pointer-events: none"
        >
            <a
                href="https://github.com/Fire-Ash"
                target="_blank"
                class="
                    block
                    hover:border-r
                    p-5
                    hover:border-fuchsia-500
                    text-white
                    nav-link
                    text-right
                "
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">GitHub</span>
                <span>5.</span>
            </a>
            <a
                href="https://twitter.com/fire_ash_"
                target="_blank"
                class="
                    block
                    hover:border-r
                    p-5
                    hover:border-fuchsia-500
                    text-white
                    nav-link
                    text-right
                "
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">Twitter</span>
                <span>6.</span>
            </a>
            <a
                href="https://blog.fireash.xyz"
                target="_blank"
                class="
                    block
                    hover:border-r
                    p-5
                    hover:border-fuchsia-500
                    text-white
                    nav-link
                    text-right
                "
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">Blog</span>
                <span>7.</span>
            </a>
        </div>
    </nav>

    <button
        @click="showMobileNav = !showMobileNav"
        class="md:hidden fixed top-10 left-10 text-white z-50"
    >
        <div v-show="!showMobileNav">
            <i class="fa-solid fa-bars fa-xl"></i>
        </div>
        <div v-show="showMobileNav">
            <i class="fa-solid fa-xmark fa-xl"></i>
        </div>
    </button>

    <div
        v-if="showMobileNav"
        class="fixed h-screen w-screen bg-black bg-opacity-50 pt-20 pl-5 z-40"
    >
        <RouterLink
            v-for="(item, index) in navItems"
            :to="item.link"
            class="block hover:border-l p-5 hover:border-fuchsia-500 text-white"
            style="pointer-events: auto"
        >
            <span>{{ index + 1 }}.</span>
            <span class="mx-2">{{ item.name }}</span>
        </RouterLink>
        <a
            href="https://github.com/Fire-Ash"
            class="block hover:border-l p-5 hover:border-fuchsia-500 text-white"
            style="pointer-events: auto"
        >
            <span>5.</span>
            <span class="mx-2">GitHub</span>
        </a>
        <a
            href="https://twitter.com/fire_ash_"
            class="block hover:border-l p-5 hover:border-fuchsia-500 text-white"
            style="pointer-events: auto"
        >
            <span>6.</span>
            <span class="mx-2">Twitter</span>
        </a>
        <a
            href="https://blog.fireash.yxz"
            class="block hover:border-l p-5 hover:border-fuchsia-500 text-white"
            style="pointer-events: auto"
        >
            <span>7.</span>
            <span class="mx-2">Blog</span>
        </a>
    </div>

    <main
        class="
            relative
            flex
            items-center
            justify-center
            min-h-screen
            overflow-hidden
        "
    >
        <div class="z-10 max-w-2xl p-5 mb-14">
            <RouterView />
        </div>

        <Footer />

        <video
            muted
            loop
            autoplay
            preload="none"
            class="absolute -z-50 w-auto min-w-full min-h-full max-w-none"
            style="filter: brightness(50%)"
        >
            <source src="/videos/background.mp4" type="video/mp4" />
        </video>
    </main>
</template>
