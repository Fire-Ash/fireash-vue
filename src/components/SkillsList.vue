<template>
    <div>
        <button @click="show = !show">{{ this.name }} (click)</button>
        <div v-if="show" class="pl-10">
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(['name', 'items']);

const show = ref(false);
</script>
