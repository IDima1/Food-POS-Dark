<template>
    <div class="dashboard-most-ordered">
        <div class="dashboard-most-ordered__header">
            <h2 class="dashboard-most-ordered__header-title">Most Ordered</h2>
            <div class="dashboard-most-ordered__selector">
                <select class="dashboard-most-ordered__select" name="filter" id="">
                    <option value="1">Today</option>
                    <option value="1">Yesterday</option>
                    <option value="1">Last Week</option>
                </select>
            </div>
        </div>
        <div class="dashboard-most-ordered__content">
            <div class="dashboard-most-ordered__content-menu">
                <div v-for="dish in menuItems" 
                    :key="dish.name" 
                    class="dashboard-most-ordered__content-menu-dish">
                    <img class="dashboard-most-ordered__content-img" :src="dish.image" :alt="dish.name">
                    <div class="dashboard-most-ordered__content-description">
                        <p class="dashboard-most-ordered__content-name normal-medium">{{ dish.name }}</p>
                        <p class="dashboard-most-ordered__content-order small-regular">{{ dish.ordered }} dishes ordered</p>
                    </div>
                </div>
            </div>  
        </div>
        <button 
            class="dashboard-most-ordered__button"
            @click="onViewAll">
            <p class="dashboard-most-ordered__button-text normal-semibold">View All</p>
        </button>
    </div>
</template>

<script setup>
import DumplingImg from '@/assets/dishes/dumpling.svg';

const menuItems = [
    {
        name: 'Spicy seasoned seafood noodles',
        image: DumplingImg,
        ordered: 200,
    },
    {
        name: 'Salted pasta with mushroom sauce',
        image: DumplingImg,
        ordered: 120,
    },
    {
        name: 'Beef dumpling in hot and sour soup',
        image: DumplingImg,
        ordered: 80,
    },
];

const onViewAll = () => {
    console.log('View all most ordered dishes')
};
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'

.dashboard-most-ordered 
    display: flex
    padding: 24px
    flex-direction: column
    align-items: flex-start
    gap: 20px
    border-radius: 8px
    background: $darkBg2

    &__header
        display: flex
        justify-content: space-between
        align-items: center
        gap: 111px
        color: $white
        padding-bottom: 20px
        border-bottom: 2px solid $darkLine
        width: 100%

    &__select
        display: flex
        height: 45px
        width: 95px
        padding: 14px
        padding-left: 44px
        background-color: $formBg

    &__content
        display: flex
        flex-direction: column
        align-items: flex-start
        gap: 32px

    &__content-menu
        display: flex
        flex-direction: column
        align-items: flex-start
        gap: 24px
        width: 100%

    &__content-menu-dish
        display: flex
        align-items: flex-start
        gap: 16px

    &__content-img
        width: 56px
        height: 56px
        border-radius: 50%

    &__content-description
        display: flex
        flex-direction: column
        align-items: flex-start
        gap: 4px

    .normal-medium  
        color: $textLighter

    .small-regular 
        color: $textLight

    &__button 
        display: flex
        width: 100%
        padding: 14px
        justify-content: center
        align-items: center
        gap: 8px
        border-radius: 8px
        border: 1px solid  $primary
        color: $primary
        background-color: $darkBg2
        cursor: pointer

    .normal-semibold 
        color: $primary
</style>
