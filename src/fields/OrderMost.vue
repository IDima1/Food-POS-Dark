<template>
    <div class="order-most">
        <img class="order-most-img" :src="'../src/assets/dishes/' + mostOrderedDish.image" alt="" />
        <div class="order-most__content-description">
            <p class="order-most__content-name normal-medium">{{ mostOrderedDish.name }}</p>
            <p class="order-most__content-order small-regular">{{ mostOrderedDish.ordered }} dishes ordered</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    mostOrderedDish: Object,
});
</script>

<style lang="sass" scoped>
.order-most
    display: flex
    align-items: flex-start
    gap: 16px

.order-most-img
    width: 56px
    height: 56px
    border-radius: 50%

.order-most__content-description
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 4px
</style>
