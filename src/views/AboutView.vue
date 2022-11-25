<script setup>
const contact = [
    {
        name: 'Twitter',
        info: '@fire_ash_',
        link: 'https://twitter.com/fire_ash_'
    },
    {
        name: 'Discord',
        info: 'ashhh#4974'
    },
    {
        name: 'Email',
        info: 'ash@midiidev.xyz',
        link: 'mailto:ash@midiidev.xyz'
    }
]
</script>

<template>
    <div>
        <div class="space-y-3">
            <p>Hello, I'm Ash or MidiiDev. Sometimes, I go by FireAsh, aetheryex, and other names online.</p>
            <p>
                I'm a web developer, mainly doing frontend with Vue and backend with Laravel. I want to expand my
                skillset by learning Express for backend development and also learning React for frontend.
            </p>
            <p>
                When working on the frontend for websites I make, I usually use Vue, or Blade if I'm working with
                Laravel. I also almost always use TailwindCSS so that I don't have to write all of my own css, while
                still having a good looking and different style.
            </p>
            <p>
                For backend development, I mainly work with Laravel, though I do want to also learn something like
                Express.
            </p>
        </div>
        <ul class="mt-14">
            <li v-for="item in contact">
                <a :href="item.link"> {{ item.name }} - {{ item.info }} </a>
            </li>
        </ul>
    </div>
</template>
