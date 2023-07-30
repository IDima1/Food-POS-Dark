<template>
    <div class="v-homepage">
        <vHeader/>    
        <vMenu/>
        <vCart
            v-bind:cart_data="CART"
        />
    </div>
</template>
<script>
import vMenu from './v-menu.vue';
import vCart from './v-cart.vue';
import vHeader from './v-header.vue';
import {mapGetters} from 'vuex'

export default {
    name: 'v-homepage',
    components: {
        vMenu,
        vCart,
        vHeader
    },
    props: {},
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>
<style>
.v-homepage {
    display: grid;
    grid-template-columns: 104px 1fr 406px;
    grid-template-rows: auto repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
}
</style>