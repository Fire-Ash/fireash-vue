<script setup>
import ProjectInfo from '../components/ProjectInfo.vue'

const projects = [
    {
        title: 'LVForum',
        description:
            "LVForum is a forum I'm working on that uses Laravel. It's kind of just being worked on in the background, as I have no motivation for it, but I will slowly be releasing updates to make it featured enough for people to actually use it. LVForum is MIT licenced.",
        screenshot: '/images/projects/LVForum01.png',
        links: [
            {
                name: 'Source Code',
                link: 'https://github.com/Fire-Ash/lvforum',
                icon: 'fa-brands fa-git-alt'
            },
            {
                name: 'Demo Instance',
                link: 'https://lvforum.fireash.xyz',
                icon: 'fa-solid fa-file'
            }
        ]
    }
]
</script>

<template>
    <div class="space-y-10">
        <ProjectInfo
            v-for="project in projects"
            :title="project.title"
            :description="project.description"
            :screenshot="project.screenshot"
            :links="project.links"
        />
    </div>
</template>
