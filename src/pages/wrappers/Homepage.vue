<template>
    <div class="homepage">
        <HomepageHeader />
        <HomepageMenu />
        <Cart :cart_data="cart" />
    </div>
  </template>
  
<script setup>
import HomepageHeader from "@/pages/homepage/HomepageHeader.vue";
import HomepageMenu from "@/pages/homepage/HomepageMenu.vue";
import Cart from "@/pages/cart/Cart.vue";
import { useStore } from "@/pinia/pinia.js";
  
const store = useStore();
const cart = store.CART;
</script>

<script>
export default {
    name: "Homepage",
    components: {
        HomepageHeader,
        HomepageMenu,
        Cart,
    },
    setup() {
        return {
            cart,
        };
    },
};
</script>

<style lang="sass" scoped>
.homepage 
    display: grid
    grid-template-columns: 104px 1fr 406px
    grid-template-rows: auto repeat(2, 1fr)
    grid-column-gap: 24px
    grid-row-gap: 24px

</style>