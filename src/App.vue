<template>
    <div class="app">
        <TheSideBar/>
        <router-view></router-view>
    </div>
</template>

<script> 
import TheSideBar from '@/common/TheSidebar.vue';

export default {
    name: 'app',
    components: {
        TheSideBar,
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    font-family: "Barlow", sans-serif;
}

body {
    background-color: #252836;
}
</style>

