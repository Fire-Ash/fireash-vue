<template>
    <div>
        <div class="space-y-3">
            <p>Hello, I'm Ash. Sometimes, I go by FireAsh or aetheryex online.</p>
            <p>I'm a somewhat beginner web developer, who's most experienced in Laravel. I'm working on expanding my skills to things such as Vue and Nuxt.</p>
            <p>I love to try to learn new things, whether that is a new framework, or even a new programming language. I'm currently attempting to learn a bit more JavaScript, along with frameworks for it, such as Vue and Nuxt. I'm also planning on possibly looking into learning React and Next.js in the future.</p>
        </div>
        <ul class="mt-14">
            <li v-for="item in contact">{{ item.name }} - {{ item.info }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AboutView",
    data() {
        return {
            contact: [
                {
                    name: 'Twitter',
                    info: '@fire_ash_'
                },
                {
                    name: 'Discord',
                    info: 'ash <3#5553'
                }
            ]
        }
    }
};
</script>

<style scoped>

</style>