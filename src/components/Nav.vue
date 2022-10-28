<script setup>
import { computed } from 'vue'
import { items } from '../nav.js'

const externalItemStart = computed(() => {
    return items.filter((obj) => obj.type === 0).length
})
</script>

<template>
    <nav class="hidden fixed z-10 md:flex justify-between content-center w-screen h-screen">
        <div class="border-l hover:border-none grid content-center ml-5 gap-6" style="pointer-events: none">
            <span v-for="(item, index) in items.slice(0, externalItemStart)">
                <RouterLink
                    v-if="item.type == 0"
                    :to="item.link"
                    class="block hover:border-l p-5 hover:border-fuchsia-500 text-white nav-link"
                    style="pointer-events: auto"
                >
                    <span>{{ index + 1 }}.</span>
                    <span class="nav-label mx-2">{{ item.name }}</span>
                </RouterLink>
            </span>
        </div>
        <div class="border-r hover:border-none grid content-center mr-5 gap-6" style="pointer-events: none">
            <a
                v-for="(item, index) in items.slice(externalItemStart)"
                :href="item.link"
                target="_blank"
                class="block hover:border-r p-5 hover:border-fuchsia-500 text-white nav-link text-right"
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">{{ item.name }}</span>
                <span>{{ index + externalItemStart + 1 }}.</span>
            </a>
        </div>
    </nav>
</template>
