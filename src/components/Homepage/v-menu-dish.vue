<template>
    <div class = 'v-menu-dish' @click="addToCart">
            <img class="v-menu-dish__image" v-bind:src="'../src/assets/dishes/' + dish_data.image" alt="img">
        <div class='v-menu-dish__text'>
            <h3 class ="v-menu-dish__name">{{ dish_data.name }}</h3>
            <p class ="v-menu-dish__price">$ {{ dish_data.price }}</p>
            <h4 class ="v-menu-dish__available"> {{ dish_data.available }} Bowls available</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-menu-dish',
    props: {
        dish_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart(){
            this.$emit('addToCart',this.dish_data)
        }
    }
}
</script>

<style scoped>
.v-menu-dish {
    width: 192px;
    height: 226px;
    background-color: #1F1D2B;
    border-radius: 15px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;
    padding: 0 40px;
    padding-top: 120px;
    padding-bottom: 36px;
    font-size: 0.8em;

    cursor: pointer;
}

.v-menu-dish__image {
    border-radius: 50%;
    position: absolute;
    bottom: 125px;
}

.v-menu-dish__name {
    color: #fff;
    font-weight: 500;
    line-height: 130%;
}

.v-menu-dish__price {
    color: #fff;
    font-weight: 400;
    line-height: 140%;
}

.v-menu-dish__available {
    color: #ABBBC2;
    font-weight: 400;
    line-height: 140%;
}

</style>