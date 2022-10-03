<script setup>
    const props = defineProps(['name', 'path'])
</script>

<template>
    <router-link :to="this.path"
                 class="btn w-full"
                 :class="{ 'btn-primary' : this.$route.path === this.path }"
    >
        {{ this.name }}
    </router-link>
</template>
