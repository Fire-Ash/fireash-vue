<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById('topBtn').style.display = 'block'
    } else {
        document.getElementById('topBtn').style.display = 'none'
    }
}

function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <button class="fixed bottom-5 right-5 btn btn-square rounded-full" style="display: none" @click="toTop" id="topBtn">
        <i class="fa-solid fa-angle-up fa-xl"></i>
    </button>
</template>
