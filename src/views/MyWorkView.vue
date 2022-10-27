<script setup>
import ProjectInfo from '../components/ProjectInfo.vue'

const work = [
    {
        title: "RulerOfTheSand's website",
        description:
            'This is a website I created for RulerOfTheSand so that people could easily see prices for their work and commission them.',
        screenshot: '/images/work/RulerOfTheSand-Website.png',
        links: [
            {
                name: 'Website',
                link: 'https://rulersofthesand.com',
                icon: 'fa-solid fa-file'
            }
        ]
    }
]
</script>

<template>
    <div class="space-y-10">
        <p>
            I am willing to create websites for people who want me to.<br />
            Contact me by any of the methods on my about page (email preferred)
            to discuss details, payment, etc.
        </p>

        <ProjectInfo
            v-for="item in work"
            :title="item.title"
            :description="item.description"
            :screenshot="item.screenshot"
            :links="item.links"
        />
    </div>
</template>
