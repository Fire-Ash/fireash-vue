<template>
    <div>
        <button @click="show = !show">{{ this.name }} (click)</button>
        <div v-if="show" class="pl-10">
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SkillsList",
    props: [ 'name', 'items' ],
    data() {
        return {
            show: false
        }
    }
}
</script>
