<template>
    <img v-if="img" :src="img" alt="input-image">
    <input 
        :type="type" 
        :placeholder="placeholder" 
        :class="class"
        :value="modelValue"
        v-bind="$attrs"
        :min="min"
        :max="max"
        @input="updateEmit"
    />
    <span v-if="errorMessage" class="input-field__err-msg">
        {{ errorMessage }}
    </span> 
    
</template>

<script setup>
import { defineProps, defineEmits, computed, useAttrs } from 'vue';

const props = defineProps({
    img: String,
    type: String,
    placeholder: String,
    class: String,
    modelValue: [String, Number],
    errorMessage: String
});

const emit = defineEmits(['update:modelValue']);

const updateEmit = (event) => {
    emit('update:modelValue', event.target.value);
};

const attrs = useAttrs();

const min = computed(() => {
    if (!isNaN(Number(attrs?.min)) && attrs?.min !== '') {
      return attrs.min;
    } else {
      return '';
    }
});

const max = computed(() => {
    if (!isNaN(Number(attrs?.max)) && attrs?.max !== '') {
      return attrs.max;
    } else {
      return '';
    }
});

</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

input
    display: flex
    width: 100%
    height: 48px
    padding: 14px
    align-items: flex-start
    gap: 8px
    border-radius: 8px
    border: 1px solid $border-primary-main
    background-color: $background-tertiary-main

    color: $text-secondary-main
    outline: none

    font-family: 'Barlow'
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: 140%

.input-container input::placeholder 
    color: $text-secondary-main
    font-family: 'Barlow'
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: 140%

img
    position: absolute
    left: 10px
    top: 12px

.input-field__err-msg
    color: $negative-main
    opacity: 0.75

</style>