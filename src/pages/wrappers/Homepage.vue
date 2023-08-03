<template>
    <div class="v-homepage">
        <HomepageHeader />
        <HomepageMenu />
        <Cart :cart_data="cart" />
    </div>
  </template>
  
<script>
import HomepageHeader from "@/pages/homepage/HomepageHeader.vue";
import HomepageMenu from "@/pages/homepage/HomepageMenu.vue";
import Cart from "@/pages/cart/Cart.vue";
import { defineComponent } from "vue";
import { useStore } from "@/pinia/pinia.js";
  
export default defineComponent({
    name: "Homepage",
    components: {
        HomepageHeader,
        HomepageMenu,
        Cart,
    },
    setup() {
        const store = useStore();
        const cart = store.CART;

        return {
            cart,
        };
    },
});
</script>

<style scoped>
.v-homepage {
    display: grid;
    grid-template-columns: 104px 1fr 406px;
    grid-template-rows: auto repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
}
</style>