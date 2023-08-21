<template>
    <button class="button">
        <img v-if="img" :src="img" class="button-image" />
        {{ label }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    label: String,
    img: String,
});
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'
.button
    background-color: $primary-main
    border-radius: 8px
    border: none
    display: flex
    justify-content: center
    align-items: center
    color: $base
    padding: 14px
    gap: 8px
    cursor: pointer
    transition: box-shadow 0.2s ease
    width: 100%

    font-family: Barlow
    font-size: 14px
    font-style: normal
    font-weight: 600
    line-height: 140%

</style>