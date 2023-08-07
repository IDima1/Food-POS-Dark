<template>
    <div class="header">
        <div class="header__main">
            <div class="header__main-title">
                <h1 class="header__title">Jaegar Resto</h1>
                <p class="header__date large-regular">Tuesday, 2 Feb 2021</p>
            </div>
            <div class="header__main-search-bar">
                <input class="header__main-search-bar-input" type="text" placeholder="Search for food, coffee, etc..">
                <img class="header__main-search-bar-img" src="@/assets/icons/Search.svg" alt="" >
            </div>
        </div>
        <div class="header__menu-slider">
            <p
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                :class="{ 'selected': selectedCategory === category, 'active': selectedCategory === category  }"
                class="header__menu-catetory normal-semibold"
            >{{ category }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomepageHeader",
    data() {
        return {
            selectedCategory: 'Hot Dishes',
            categories: ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
        };
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
            console.log("Selected Category:", category);
        },
    },
}
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.header
    padding-top: 24px
    grid-area: 1 / 2 / 2 / 3

.header__main 
    display: flex
    justify-content: space-between
    align-items: center
    height: 65px
    margin-bottom: 35px


.header__main-search-bar 
    position: relative
    display: flex
    align-items: center

.header__main-search-bar-img
    position: absolute
    left: 10px

.header__menu-slider 
    display: flex
    align-items: center
    color: $white

    border-bottom: 1px solid $darkLine
    padding-bottom: 15px

.header__menu-catetory
    cursor: pointer
    transition: color 0.2s ease
    margin-right: 32px

.header__menu-slider p:hover 
    color: $primary


.header__menu-slider p.selected 
    color: $primary
    position: relative

.header__menu-slider p.selected::after 
    content: ""
    position: absolute
    bottom: -16px
    left: 0
    width: 37px
    height: 3px
    background-color: $primary
    border-radius: 10px

</style>