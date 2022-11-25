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
                link: 'https://github.com/midiidev/lvforum',
                icon: 'fa-brands fa-git-alt'
            },
            // {
            //     name: 'Demo Instance',
            //     link: 'https://lvforum.midiidev.xyz',
            //     icon: 'fa-solid fa-file'
            // }
        ]
    },
    {
        title: 'InputSender',
        description:
            "a cool way to send keyboard inputs to your friend's pc. this was created because a friend wanted me to",
        screenshot: '/images/projects/InputSender01.png',
        links: [
            {
                name: 'Source Code',
                link: 'https://github.com/midiidev/InputSender',
                icon: 'fa-brands fa-git-alt'
            },
            {
                name: 'Frontend',
                link: 'https://InputSender.midiidev.xyz',
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
