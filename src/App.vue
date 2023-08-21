<template>
    <div class="app">
        <TheSideBar/>
        <router-view></router-view>
    </div>
</template>

<script setup> 
import TheSideBar from '@/common/TheSidebar.vue';
</script>

<style lang="sass">
@import '@/styles/app.sass'
*
    margin: 0
    padding: 0
    box-sizing: border-box

.app 
    font-family: "Barlow", sans-serif

body 
    background-color: $background-primary-main
</style>