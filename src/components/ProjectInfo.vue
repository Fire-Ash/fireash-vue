<script setup>
const props = defineProps(['title', 'description', 'screenshot', 'links'])
</script>

<template>
    <div class="card bg-base-200">
        <div class="card-body">
            <h2 class="card-title">{{ props.title }}</h2>
            <p>{{ props.description }}</p>
        </div>
        <div class="card-actions justify-end mr-5 mb-5">
            <ul class="flex space-x-3">
                <li v-for="link in props.links">
                    <a
                        :href="link.link"
                        class="btn hover:btn-primary btn-md"
                        target="_blank"
                    >
                        <i :class="link.icon + ' mr-2'"></i> {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
        <div v-if="props.screenshot != null">
            <figure>
                <img
                    :src="props.screenshot"
                    alt="Project Screenshot"
                    style="width: 100%"
                    class="p-2 rounded-2xl"
                />
            </figure>
        </div>
    </div>
</template>
