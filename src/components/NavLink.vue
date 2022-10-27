<script setup>
const props = defineProps(['name', 'path'])
</script>

<template>
    <router-link
        :to="props.path"
        class="btn w-full"
        :class="{ 'btn-primary': $route.path === props.path }"
    >
        {{ props.name }}
    </router-link>
</template>
