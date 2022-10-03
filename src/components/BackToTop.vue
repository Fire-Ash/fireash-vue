<script>
    export default {
        name: "BackToTop",
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll: function () {
                if (document.documentElement.scrollTop > 20) {
                    document.getElementById('topBtn').style.display = 'block'
                } else {
                    document.getElementById('topBtn').style.display = 'none'
                }
            },
            backToTop: function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
</script>

<template>
    <button class="fixed bottom-5 right-5 btn rounded-full"
            style="height:50px;width:50px;display:none;"
            @click="backToTop"
            id="topBtn"
    >
        <i class="fa-solid fa-angle-up text-xl"></i>
    </button>
</template>
