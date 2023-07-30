<template>
     <div class = 'v-menu'> 
        <div class="v-menu__header"> 
            <h2>Choose Dishes</h2>
            <div class="v-menu__dropdown">
                <select name="dine-in" id="">
                    <option value="1">Dine In</option>
                    <option value="1">To Go</option>
                    <option value="1">Delivery</option>
                </select>
            </div>
        </div>
        <div class="v-menu__list">
        <vMenuDish
            v-for="dish in DISHES"
            :key="dish.article"
            :dish_data="dish"
            @addToCart="addToCart"
        />
        </div>
    </div>
</template>

<script>
import vMenuDish from './v-menu-dish.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-menu',
    components: {
        vMenuDish
    },
    props: {},
    computed: {
        ...mapGetters([
            'DISHES',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_DISHES_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        }
    }
};
</script>

<style>
.v-menu {
    grid-area: 2 / 2 / 4 / 3;
}

.v-menu__list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 50px;
}

.v-menu__header {
    display: flex;
    justify-content: space-between;
    color: white;
}

.v-menu__dropdown select {
    appearance: none;
    display: inline-flex;
    width: 100px;
    padding: 14px;
    align-items: center;
    gap: 10px;
    color: #E0E6E9;

    border-radius: 8px;
    border: 1px solid #393C49;

    background: #1F1D2B;
    background: url('../../assets/icons/arrow-ios-down.svg') no-repeat left 14px center;
    padding-left: 44px;

    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    background-color: #1F1D2B;
}

.v-menu__dropdown img {
    width: 20px;
    height: 20px; 
}
</style>