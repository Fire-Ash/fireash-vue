<script setup>
import { ref } from 'vue'

const props = defineProps(['name', 'items'])

const show = ref(false)
</script>

<template>
    <div>
        <button @click="show = !show">{{ props.name }} (click)</button>
        <div v-if="show" class="pl-10">
            <ul>
                <li v-for="item in props.items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
