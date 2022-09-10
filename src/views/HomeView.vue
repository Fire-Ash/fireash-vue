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
            <p class="text-sm mt-3">! = learning</p>
        </div>
    </div>
</template>

<script>
import SkillsList from "@/components/SkillsList.vue";

export default {
    components: { SkillsList }
}
</script>
