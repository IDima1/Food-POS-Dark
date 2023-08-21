<template>
    <div class="product-management">
        <div class="product-management__header">
            <div class="product-management__header-title">
                <h2>{{$t('headers.product-management')}}</h2>
                <ButtonField 
                    :label="$t('buttons.manage-button')" 
                    :img="OptionImg" 
                    class="product-management__header-button" 
                    @click="onCategories"
                />
            </div>
            <div class="product-management__header-tabs">
                <p
                    v-for="category in categories"
                    :key="category"
                    @click="selectCategory(category)"
                    :class="{ 'selected': selectedCategory === category}"
                    class="product-management__header-tab normal-semibold"
                    >{{ $t(`categories.${category.toLowerCase().replace(/\s/g, '-')}`) }}
                </p> 
            </div>
        </div>
        <div class="product-management__devider"></div>
        <div class="product-management__content">
            <div class="product-management__content-row">
                <div class="product-management__content-row-cards">
                    <div class="product-management__content-add-product">
                        <div class="product-management__content-add-new-dish">
                            <ButtonField
                                class="product-management__content-add-button" 
                                @click="addNewDish"
                                :img="AddImg" 
                            />
                            <p class="product-management__content-text large-semibold">{{$t('buttons.add-button')}}</p>
                        </div>
                    </div>
                    <template v-if="isLoaded">
                        <template v-if="isLoadFailed">
                            <p class="large-semibold">Ooops... Something went wrong</p>
                        </template>
                        <template v-else>
                            <DishBigCard
                                v-for="dish in dishes"
                                :key="dish.article"
                                :dish_data="dish"
                                class="product-management__content-list-cards"
                            />
                        </template>
                    </template>
                    <template v-else>
                        <p class="large-semibold">loading ...</p>
                    </template>
                </div>
            </div>
        </div>
        <div class="product-management__devider"></div>
        <div class="product-management__buttons">
            <ButtonField 
                :label="$t('buttons.discard-button')" 
                class="product-management__discard-button" 
                @click="discardChanges"
            />
            <ButtonField
                :label="$t('buttons.save-button')" 
                class="product-management__save-button" 
                @click="saveChanges"
            />
        </div>
    </div>
</template>

<script setup>
import OptionImg from '@/assets/icons/Option.svg'
import AddImg from '@/assets/icons/Add.svg'
import ButtonField from "@/fields/ButtonField.vue";
import DishBigCard from "@/common/cards/DishBigCard.vue";
import { ref, computed } from "vue";
import { useStore } from "@/store/index.js";
import { useI18n } from 'vue-i18n';

const isLoaded = ref(false);
const isLoadFailed = ref(false);
const { t } = useI18n();
const store = useStore();
store.GET_DISHES_FROM_MOCKOON(isLoaded, isLoadFailed);
const dishes = computed(() => store.dishes);

const selectedCategory = ref("Hot Dishes");
const categories = ["Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert"];

const selectCategory = (category) => {
    selectedCategory.value = category;
    console.log("Selected Category:", category);
};

const onCategories = () => {
    console.log("Manage Categories button push");
};

const addNewDish = () => {
    console.log("Calling up the context menu for adding a dish");
};

const discardChanges = () => {
    console.log("Changes was discarded");
};

const saveChanges = () => {
    console.log("Changes was saved");
};
</script>

<script>
export default {
    setup() {
        return {
            dishes,
            selectedCategory,
            categories,
            selectCategory,
            onCategories,
            addNewDish,
            discardChanges,
            saveChanges,
        };
    },
}
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.product-management 
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: flex-start
    grid-area: 2 / 3 / 3 / 4
    padding: 24px
    margin: 0 24px 24px 0
    border-radius: 8px
    background-color: $background-secondary-main
    overflow: hidden

.product-management__header-title
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 35px

.product-management__header-button
    display: flex
    width: 178px
    padding: 14px
    justify-content: center
    align-items: center
    gap: 8px
    cursor: pointer
    border-radius: 8px
    border: 1px solid $border-primary-main
    background-color: $background-secondary-main
    white-space: nowrap

.product-management__header-tabs
    display: flex
    align-items: center
    color: $white
    height: 33px

.product-management__header-tab
    cursor: pointer
    transition: color 0.2s ease
    margin-right: 32px

.product-management__header-tab.selected 
    color: $primary-main
    position: relative

.product-management__header-tab::after
    content: ""
    position: absolute
    bottom: -9px
    left: 0
    width: 37px
    height: 3px
    background-color: $primary-main
    border-radius: 10px

.product-management__devider
    border-bottom: 1px solid $border-primary-main
    margin-bottom: 24px

.product-management__content 
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: flex-start
    flex-grow: 1
    position: relative
    gap: 16px
    max-height: calc(100vh - 350px)
    overflow-y: auto

.product-management__content-row
    display: inline-flex
    align-items: flex-start
    gap: 16px
    color: $white
    flex-wrap: wrap
    overflow-y: auto
    scrollbar-width: none

.product-management__content-row::-webkit-scrollbar 
    width: 0

.product-management__content-add-new-dish
    display: inline-flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 8px
    width: 221px
    height: 299px
    flex-shrink: 0
    border-radius: 8px
    border: 1px dashed $primary-main
    background: transparent

.product-management__content-add-button
    display: flex
    padding: 14px
    align-items: flex-start
    gap: 10px
    border-radius: 8px
    background-color: transparent
    border: none
    cursor: pointer

.product-management__content-text
    color: $primary-main
    text-align: center

.product-management__content-row-cards
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    justify-content: flex-start
    gap: 16px

.product-management__buttons
    align-self: flex-start
    margin-top: auto
    display: flex
    gap: 8px

.product-management__discard-button, .product-management__save-button
    width: 172px
    background-color: transparent

.product-management__save-button
    background: $primary-main
    border: 1px solid $primary-main
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.40)
    color: $white

.product-management__discard-button 
    border: 1px solid $primary-main

</style>