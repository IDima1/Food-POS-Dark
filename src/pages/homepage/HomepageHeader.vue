<template>
    <div class="header">
        <div class="header__content">
            <div class="header__content-title">
                <h1 class="header__title">{{ $t('headers.resto-name') }}</h1>
                <p class="header__date large-regular">{{ $t('current-date') }}</p>
            </div>
            <div class="header__content-search-bar">
                <InputField
                    :img="SearchImg"
                    type="text"
                    :placeholder="$t('placeholders.homepage-search')"
                    class="header__content-input"
                />
            </div>
        </div>
        <div class="header__slider">
            <p
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                :class="{ 'selected': selectedCategory === category, 'active': selectedCategory === category  }"
                class="header__category normal-semibold"
                >{{ $t(`categories.${category.toLowerCase().replace(/\s/g, '-')}`) }}
            </p>
        </div>
    </div>
</template>

<script setup>
import InputField from '@/fields/InputField.vue';
import SearchImg from '@/assets/icons/Search.svg'
import { ref } from 'vue'
import { useStore } from '@/store/index.js'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useStore();
const selectedCategory =  ref('Hot Dishes');
const categories = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert'];
const selectCategory = (category) => {
    selectedCategory.value = category;
    console.log("Selected Category:", category);
};
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.header
    padding-top: 24px
    grid-area: 1 / 2 / 2 / 3

.header__content
    display: flex
    justify-content: space-between
    align-items: center
    height: 65px
    margin-bottom: 35px

.header__date
    color: $text-secondary-main
.header__content-search-bar
    position: relative
    display: flex
    align-items: center

.header__slider
    display: flex
    align-items: center
    color: $white
    border-bottom: 1px solid $border-primary-main
    padding-bottom: 15px

.header__category
    cursor: pointer
    transition: color 0.2s ease
    margin-right: 32px
    color: $text-primary-light

.header__category.selected 
    color: $primary-main
    position: relative

.header__category.selected::after 
    content: ""
    position: absolute
    bottom: -16px
    left: 0
    width: 37px
    height: 3px
    background-color: $primary-main
    border-radius: 10px

:deep(.header__content-input)
    padding-left: 35px
    width: 220px

</style>