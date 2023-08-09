<template>
    <div class="product-management">
        <div class="product-management__header">
            <div class="product-management__header-title">
                <h2>Products Management</h2>
                <button class="product-management__header-button" @click="onCategories">
                    <img class="product-management__header-img" src="@/assets/icons/Option.svg" alt="">
                    <p class="product-management__header-text normal-semibold">Manage Categories</p>
                </button>
            </div>
            <div class="product-management__header-tabs">
                <p
                    v-for="category in categories"
                    :key="category"
                    @click="selectCategory(category)"
                    :class="{ 'selected': selectedCategory === category}"
                    class="product-management__header-tab normal-semibold"
                    >{{ category }}
                </p> 
            </div>
        </div>
        <div class="product-management__devider"></div>
        <div class="product-management__content">
            <div class="product-management__content-row">
                <div class="product-management__content-row-cards">
                    <div class="product-management__content-add-product">
                        <div class="product-management__content-add-new-dish">
                            <button class="product-management__content-add-button" @click="addNewDish">
                                <img class="product-management__content-add-icon" src="@/assets/icons/Add.svg" alt="">
                            </button>
                            <p class="product-management__content-text large-semibold">Add new dish</p>
                        </div>
                    </div>
                <DishBigCard
                    v-for="(dish, index) in dishes"
                    :key="dish.article"
                    :dish_data="dish"
                    class="product-management__content-list-cards"
                />
                </div>
            </div>
        </div>
        <div class="product-management__devider"></div>
        <div class="product-management__buttons">
            <button 
                class="product-management__discard-button" 
                @click="discardChanges">
                <p class="normal-semibold">Discard Changes</p>
            </button>
            <button 
                class="product-management__save-button" 
                @click="saveChanges">
                <p class="normal-semibold">Save Changes</p>
            </button>
        </div>
    </div>
</template>

<script setup>
import DishBigCard from "@/cards/DishBigCard.vue";
import { ref } from "vue";
import { useStore } from "@/pinia/pinia.js";

const store = useStore();
const dishes = store.DISHES;

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
    name: "SettingsProductManagement",
    components:
        DishBigCard,
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
@import '@/styles/variables.sass'

.product-management 
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: flex-start
    grid-area: 2 / 3 / 3 / 4
    padding: 24px
    margin: 0 24px 24px 0
    border-radius: 8px
    background-color: $darkBg2
    overflow: hidden

    &__header-title 
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 35px

    &__header-button
        display: flex
        width: 178px
        padding: 14px
        justify-content: center
        align-items: center
        gap: 8px
        cursor: pointer
        border-radius: 8px
        border: 1px solid $darkLine
        background-color: $darkBg2
        white-space: nowrap

    &__header-tabs 
        display: flex
        align-items: center
        color: $white
        height: 33px

        p 
            cursor: pointer
            transition: color 0.2s ease
            margin-right: 32px

            &.selected 
                color: $primary
                position: relative

                &::after
                    content: ""
                    position: absolute
                    bottom: -9px
                    left: 0
                    width: 37px
                    height: 3px
                    background-color: $primary
                    border-radius: 10px

    &__devider 
        border-bottom: 1px solid $darkLine
        margin-bottom: 24px

    &__content 
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-items: flex-start
        flex-grow: 1
        position: relative
        gap: 16px
        max-height: calc(100vh - 350px)
        overflow-y: auto

        &-row 
            display: inline-flex
            align-items: flex-start
            gap: 16px
            color: $white
            flex-wrap: wrap
            overflow-y: auto
            scrollbar-width: none

            &::-webkit-scrollbar 
                width: 0

        &-add-new-dish 
            display: inline-flex
            flex-direction: column
            justify-content: center
            align-items: center
            gap: 8px
            width: 221px
            height: 299px
            flex-shrink: 0
            border-radius: 8px
            border: 1px dashed $primary
            background: transparent

        &-add-button 
            display: flex
            padding: 14px
            align-items: flex-start
            gap: 10px
            border-radius: 8px
            background-color: transparent
            border: none
            cursor: pointer

        &-text 
            color: $primary
            text-align: center

        &-row-cards 
            display: flex
            flex-wrap: wrap
            align-items: flex-start
            justify-content: flex-start
            gap: 16px

    &__buttons 
        align-self: flex-start
        margin-top: auto
        display: flex
        gap: 8px

    &__discard-button, 
    &__save-button
        display: flex
        width: 172px
        padding: 14px
        justify-content: center
        align-items: center
        gap: 8px
        border-radius: 8px
        background-color: transparent
        cursor: pointer

    &__save-button 
        background: $primary
        border: 1px solid $primary
        box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.40)
        color: $white

    &__discard-button 
        border: 1px solid $primary


</style>