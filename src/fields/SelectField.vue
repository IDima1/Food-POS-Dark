<template>
    <select v-model="selectedValue" class="select">
        <option v-for="option in options" :value="option.value" :key="option.value">
            {{ option.label }}
        </option>
    </select>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    options: Array,
    initialValue: String,
});

const initialSelectedValue = props.options ? props.options.length > 0 : false;

const selectedValue = ref(props.initialValue || initialSelectedValue);
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

select 
    appearance: none
    display: inline-flex
    width: 100px
    padding: 14px
    align-items: center
    gap: 10px
    color: $text-secondary-main
    border-radius: 8px
    border: 1px solid $border-primary-main
    background: url('@/assets/icons/arrow-ios-down.svg') no-repeat left 14px center
    background-color: $background-secondary-main
    padding-left: 43px
    outline: none

    font-family: Barlow
    font-size: 14px
    font-style: normal
    font-weight: 500
    line-height: 130%

option
    font-family: Barlow
    font-size: 14px
    font-style: normal
    font-weight: 500
    line-height: 130%
    background: $background-secondary-main
    color: $text-secondary-main
</style>