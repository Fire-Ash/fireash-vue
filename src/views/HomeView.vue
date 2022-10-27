<template>
    <nav class="hidden fixed z-10 sm:flex justify-between content-center w-full h-full">
        <div class="border-l hover:border-none grid content-center ml-5 gap-10" style="pointer-events: none">
            <RouterLink
                to="/"
                class="block hover:border-l p-5 hover:border-fuchsia-500 text-white nav-link"
                style="pointer-events: auto"
            >
                <span>01.</span>
                <span class="nav-label mx-2">Home</span>
            </RouterLink>
            <RouterLink
                to="/about"
                class="block hover:border-l p-5 hover:border-fuchsia-500 text-white nav-link"
                style="pointer-events: auto"
            >
                <span>02.</span>
                <span class="nav-label mx-2">About</span>
            </RouterLink>
            <RouterLink
                to="/projects"
                class="block hover:border-l p-5 hover:border-fuchsia-500 text-white nav-link"
                style="pointer-events: auto"
            >
                <span>03.</span>
                <span class="nav-label mx-2">Projects</span>
            </RouterLink>
            <RouterLink
                to="/my-work"
                class="block hover:border-l p-5 hover:border-fuchsia-500 text-white nav-link"
                style="pointer-events: auto"
            >
                <span>04.</span>
                <span class="nav-label mx-2">My Work</span>
            </RouterLink>
        </div>
        <div class="border-r hover:border-none grid content-center mr-5 gap-4" style="pointer-events: none">
            <a
                href="https://github.com/Fire-Ash"
                target="_blank"
                class="block hover:border-r p-5 hover:border-fuchsia-500 text-white nav-link text-right"
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">GitHub</span>
                <span>05.</span>
            </a>
            <a
                href="https://twitter.com/fire_ash_"
                target="_blank"
                class="block hover:border-r p-5 hover:border-fuchsia-500 text-white nav-link text-right"
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">Twitter</span>
                <span>06.</span>
            </a>
            <a
                href="https://blog.fireash.xyz"
                target="_blank"
                class="block hover:border-r p-5 hover:border-fuchsia-500 text-white nav-link text-right"
                style="pointer-events: auto"
            >
                <span class="nav-label mx-2">Blog</span>
                <span>05.</span>
            </a>
        </div>
    </nav>

    <main class="relative flex items-center justify-center h-screen overflow-hidden">
        <div class="relative z-10 p-5 text-5xl text-white" style="font-weight: 900">[ FireAsh ]</div>

        <video
            muted
            loop
            autoplay
            preload="none"
            class="absolute -z-50 w-auto min-w-full min-h-full max-w-none"
            style="filter: brightness(50%)"
        >
            <source src="/videos/background.mp4" type="video/mp4" />
        </video>
    </main>
</template>
