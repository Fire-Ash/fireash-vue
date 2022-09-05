<template>
    <router-link :to="this.path"
                 class="btn w-full"
                 :class="{ 'btn-primary' : this.$route.path === this.path }"
    >
        {{ this.name }}
    </router-link>
</template>

<script>
export default {
    name: "NavLink",
    props: [
        'name',
        'path'
    ]
};
</script>

<style scoped>

</style>