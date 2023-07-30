<template>
    <div class="app">
        <vSideBar/>
        <router-view></router-view>
    </div>
</template>

<script> 
import vSideBar from './components/v-side-bar.vue';

export default {
    name: 'app',
    components: {
        vSideBar,
    },
}
</script>

<style>
@import 'https://fonts.googleapis.com/css2?family=Barlow&display=swap';

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

