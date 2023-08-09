<template>
    <div class="menu">
        <div class="menu__header">
            <h2 class="menu__title">Choose Dishes</h2>
            <div class="menu__dropdown">
                <select class="menu__dropdown-select" name="dine-in" id="">
                    <option value="1">Dine In</option>
                    <option value="2">To Go</option>
                    <option value="3">Delivery</option>
                </select>
            </div>
        </div>
        <div class="menu__list">
            <DishSmallCard
            v-for="dish in dishes"
            :key="dish.article"
            :dish_data="dish"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>
  
<script setup>
import DishSmallCard from "@/cards/DishSmallCard.vue";
import { useStore } from "@/pinia/pinia.js";
  
const store = useStore();
const dishes = store.DISHES;

const addToCart = (data) => {
    store.ADD_TO_CART(data);
};
</script>

<script>
export default {
    name: "HomepageMenu",
    components: {
        DishSmallCard,
    },
    setup() {
        return {
            dishes,
            addToCart,
        };
    }
}
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'

.menu 
    grid-area: 2 / 2 / 4 / 3

    &__header 
        display: flex
        justify-content: space-between

    &__list 
        margin-top: 50px
        display: flex
        justify-content: center
        flex-wrap: wrap
        grid-column-gap: 28px
        grid-row-gap: 58px
</style>