<template>
    <div class="space-y-3">
        <p>I'm Ash.</p>
        <p>You can learn more about me and where to contact me on my <RouterLink to="/about" class="link">about page</RouterLink>.</p>
        <div>
            <p>my skills:</p>
            <div class="pl-10">
                <SkillsList name="frontend"
                            :items="[
                                'Blade',
                                '!Vue.js',
                                '!Nuxt.js',
                                'TailwindCSS',
                                'DaisyUI',
                                'HTML, CSS',
                                '!JavaScript'
                            ]"
                />
                <SkillsList name="backend"
                            :items="[
                                'Laravel',
                                '!PHP',
                                '!Node.js',
                                'SQL'
                            ]"
                />
            </div>
            <p class="text-sm mt-2">! = learning</p>
        </div>
        <div>
            <p>my interests:</p>
            <ul class="pl-10 space-y-1">
                <li>programming, mainly in web and software development</li>
                <li>making videos for youtube</li>
                <li>making websites or working on small projects like this</li>
                <li>open source software and its development</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import SkillsList from "@/components/SkillsList.vue";
</script>
