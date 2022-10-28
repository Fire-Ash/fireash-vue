<script setup>
import { ref } from 'vue'
import { items } from '../nav.js'

const showMobileNav = ref(false)
</script>

<template>
    <button @click="showMobileNav = !showMobileNav" class="md:hidden fixed top-10 left-10 text-white z-50">
        <div v-show="!showMobileNav">
            <i class="fa-solid fa-bars fa-xl"></i>
        </div>
        <div v-show="showMobileNav">
            <i class="fa-solid fa-xmark fa-xl"></i>
        </div>
    </button>

    <div
        v-if="showMobileNav"
        @click="showMobileNav = false"
        class="fixed h-screen w-screen bg-black bg-opacity-50 pt-20 pl-5 z-40"
    >
        <span v-for="(item, index) in items">
            <RouterLink
                v-if="type == 0"
                :to="item.link"
                class="block hover:border-l p-5 hover:border-fuchsia-500 text-white"
                style="pointer-events: auto"
            >
                <span>{{ index + 1 }}.</span>
                <span class="mx-2">{{ item.name }}</span>
            </RouterLink>
            <a
                v-else
                :href="item.link"
                class="block hover:border-l p-5 hover:border-fuchsia-500 text-white"
                style="pointer-events: auto"
            >
                <span>{{ index + 1 }}.</span>
                <span class="mx-2">{{ item.name }}</span>
            </a>
        </span>
    </div>
</template>
