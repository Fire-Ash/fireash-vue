<template>
    <div class="md:grid grid-cols-3 gap-20 w-10/12 max-w-6xl mx-auto mt-20 space-y-10 mb-10">
        <div class="col-span-1">
            <Nav />
        </div>
        <div class="col-span-2">
           <RouterView v-slot="{ Component }">
               <transition name="fade">
                   <component :is="Component" />
               </transition>
           </RouterView>
        </div>
        <BackToTop />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
import BackToTop from "@/components/BackToTop.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    position: fixed;
}
</style>
