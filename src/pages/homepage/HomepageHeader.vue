<template>
    <div class="v-header">
        <header>
        <div class="v-header__main">
            <div class="v-header__main_title">
                <h1>Jaegar Resto</h1>
                <p>Tuesday, 2 Feb 2021</p>
            </div>
            <div class="v-header__main_search_bar">
                <input type="text" placeholder="Search for food, coffee, etc..">
                <img src="@/assets/icons/Search.svg" alt="" >
            </div>
        </div>
        </header>
        <div class="v-header__menu_slider">
            <p
                v-for="category in categories"
                :key="category"
                @click="selectCategory(category)"
                :class="{ 'selected': selectedCategory === category, 'active': selectedCategory === category  }"
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

<style scoped>
.v-header{
    padding-top: 24px;
    grid-area: 1 / 2 / 2 / 3; 
}
.v-header__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    color: white;
    margin-bottom: 35px;
}

input {
    width: 220px;
    height: 48px;
    border-radius: 5px;
    border: 1px solid #393c49;
    background-color: #2d303e;
    color: #abbbc2;
    padding-left: 35px;
}

input::placeholder {
    color:#ABBBC2;
    font-family: 'Barlow';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
.v-header__main_search_bar {
    position: relative;
    display: flex;
    align-items: center; 
}
.v-header__main_search_bar img {
    position: absolute;
    left: 10px;
}
.v-header__menu_slider {
    display: flex;
    align-items: center;
    color: white;

    border-bottom: 1px solid #393c49;
    padding-bottom: 15px;
}
.v-header__menu_slider p {
    cursor: pointer;
    transition: color 0.2s ease;
    margin-right: 32px;

    & > p {
        padding-right: 50px;
    }
}

.v-header__menu_slider p:hover {
    color: #ea7c69;
}

.v-header__menu_slider & > p {
    padding-right: 50px;
}

.v-header__menu_slider p.selected {
    color: #ea7c69;
    position: relative;
}

.v-header__menu_slider p.selected::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 37px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 10px;
}

</style>