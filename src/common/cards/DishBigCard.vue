<template>
    <div class="menu-dish-big-card" >
        <img class="menu-dish-big-card__image" :src="'../src/assets/dishes/' + dish_data.image" alt="img">
        <div class="menu-dish-big-card__detail">
            <p class="menu-dish-big-card__name normal-medium">{{ dish_data.name }}</p>
            <div class="menu-dish-big-card__text-container">
                <p class="menu-dish-big-card__price normal-medium">$ {{ dish_data.price }}</p>
                <p class="menu-dish-big-card__spacer">•</p>
                <p class="menu-dish-big-card__available normal-regular"> {{ dish_data.available }} Bowls </p>
            </div>  
        </div>
        <ButtonField 
            label="Edit dish"
            :img="EditImg"
            class="menu-dish-big-card__button"/>
    </div>
</template>

<script setup>
import EditImg from '@/assets/icons/Edit.svg'
import ButtonField from '@/fields/ButtonField.vue'

const { dish_data = {} } = defineProps(['dish_data']);
</script>

<style lang="sass" scoped>
@import '@/styles/styles.sass'

.menu-dish-big-card 
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    text-align: center
    width: 221px
    height: 299px
    border-radius: 8px
    border: 1px dashed $border-primary-main
    background-color: $background-secondary-main
    
.menu-dish-big-card__image
    padding: 22px
    border-radius: 50%

.menu-dish-big-card__detail
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 8px

.menu-dish-big-card__name
    width: 100%
    color: $white
    text-align: center

.menu-dish-big-card__text-container
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    gap: 8px
    padding-bottom: 16px
    color:  $text-primary-light

:deep(.menu-dish-big-card__button)
   
    height: 52px
    border-radius: 0px 0px 8px 8px
    opacity: 0.24
    background: $primary-main
    border: none
    cursor: pointer
</style>
