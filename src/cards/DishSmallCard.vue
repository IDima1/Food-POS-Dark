<template>
    <div class = 'menu-dish-small-card' @click="addToCart">
        <img class="menu-dish-small-card__image" :src="'../src/assets/dishes/' + dish_data.image" alt="img">
        <div class='menu-dish-small-card__content'>
            <p class ="menu-dish-small-card__name normal-medium">{{ dish_data.name }}</p>
            <p class ="menu-dish-small-card__price normal-regular">$ {{ dish_data.price }}</p>
            <p class ="menu-dish-small-card__available normal-regular"> {{ dish_data.available }} Bowls available</p>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { dish_data = {} } = defineProps(['dish_data']);
const emit = defineEmits();

const addToCart = () => {
    emit('addToCart', dish_data);
};
</script>
<style lang="sass" scoped>
@import '@/styles/styles.sass'

.menu-dish-small-card 
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    width: 192px
    height: 226px
    background-color: $darkBg2
    border-radius: 15px
    text-align: center
    position: relative
    padding: 0 40px
    padding-top: 120px
    padding-bottom: 36px
    cursor: pointer

    &__image 
        border-radius: 50%
        position: absolute
        bottom: 125px

    &__available 
        color: $textLight

</style>