<template>
    <div class="v-product-management">
        <div class="v-product-management__header">
            <div class="v-product-management__header__title">
                <h2>Products Management</h2>
                <button @click="onCategories">
                    <img src="@/assets/icons/Option.svg" alt="">
                    <p>Manage Categories</p>
                </button>
            </div>
            <div class="v-product-management__header__tab">
                <p
                    v-for="category in categories"
                    :key="category"
                    @click="selectCategory(category)"
                    :class="{ 'selected': selectedCategory === category}"
            >{{ category }}</p>
            </div>
        </div>
        <div class="v-product-management__devider"></div>
        <div class="v-product-management__content">
            <div class="v-product-management__content__row">
                <div class="v-product-management__content__row__cards">
                    <div class="v-product-management__content__add-product">
                        <div class="v-product-management__content__add-product__rectangle">
                            <button @click="addNewDish">
                                <img src="@/assets/icons/Add.svg" alt="">
                            </button>
                            <p>Add new dish</p>
                        </div>
                    </div>
                    <DishBigCard
                    v-for="(dish, index) in DISHES"
                    :key="dish.article"
                    :dish_data="dish"
                    />
                </div>
            </div>
           
        </div>
        <div class="v-product-management__devider"></div>
            <div class="v-product-management__buttons">
                <button class="v-product-management__buttons__discard" @click="discardChanges">Discard Changes</button>
                <button class="v-product-management__buttons__save" @click="saveChanges">Save Changes</button>
            </div>
    </div>
</template>

<script>
import DishBigCard from '@/cards/DishBigCard.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'SettingsProductManagement',
    components: {
        DishBigCard
    },
    data() {
        return {
            selectedCategory: 'Hot Dishes',
            categories: ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']  
        }
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
            console.log("Selected Category:", category);
        },
        onCategories(){
            console.log('Manage Caterories button push')
        },
        addNewDish(){
            console.log('Calling up the context menu for adding a dish')
        },
        discardChanges(){
            console.log('Changes was discarded')
        },
        saveChanges(){
            console.log('Changes was saved')
        }
    },
    computed: {
    ...mapGetters(['DISHES'])
    }

}
</script>

<style scoped>

.v-product-management {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    grid-area: 2 / 3 / 3 / 4;
    padding: 24px;
    margin: 0 24px 24px 0;
    border-radius: 8px;
    background-color: #1F1D2B;
    overflow: hidden;
}
.v-product-management__header {
    color: #FFF;
}
.v-product-management__header__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
}
.v-product-management__header__title button {
    display: flex;
    width: 178px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    border-radius: 8px;
    border: 1px solid #393C49;
    background-color: #1F1D2B;
    font-family: 'Barlow';
    font-weight: 600;
    line-height: 140%;
    color: #FFF;

    white-space: nowrap;
}

.v-product-management__header__tab {
    display: flex;
    align-items: center;
    color: white;
    height: 33px;
}

.v-product-management__header__tab p {
    cursor: pointer;
    transition: color 0.2s ease;
    margin-right: 32px;
}

.v-product-management__header__tab p:hover {
    color: #EA7C69;
}

.v-product-management__header__tab & > p {
    padding-right: 50px;
}

.v-product-management__header__tab p.selected {
    color: #ea7c69;
    position: relative;
}

.v-product-management__header__tab p.selected::after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 0;
    width: 37px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 10px;
}

.v-product-management__devider {
    border-bottom: 1px solid #393c49;
    margin-bottom: 24px;
}
.v-product-management__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-grow: 1;
    position: relative;
    gap: 16px;
    max-height: calc(100vh - 350px);
    overflow-y: auto;
}
.v-product-management__content__row {
    display: inline-flex;
    align-items: flex-start;
    gap: 16px;
    color: #FFF;
    flex-wrap: wrap;
    overflow-y: auto;
    scrollbar-width: none;
}
.v-product-management__content__row::-webkit-scrollbar {
    width: 0;
}
.v-product-management__content__add-product__rectangle {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    width: 221px;
    height: 299px;
    flex-shrink: 0;

    border-radius: 8px;
    border: 1px dashed #EA7C69;
    background:#1F1D2B;
}
.v-product-management__content__add-product__rectangle button {
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background-color: transparent;
    border: none; 
    cursor: pointer;
}

.v-product-management__content__add-product__rectangle p {
    color:#EA7C69;
    text-align: center;
}
.v-product-management__content__row__cards {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
}
.v-product-management__buttons {
    align-self: flex-star;
    margin-top: auto;
    display: flex;
    gap: 8px;
}
.v-product-management__buttons__discard, .v-product-management__buttons__save {
    display: flex;
    width: 172px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 8px;
    border: 1px solid#EA7C69;

    background-color: transparent;
    font-weight: 600;
    line-height: 140%;

    cursor: pointer;

}
.v-product-management__buttons__save {
    background: #EA7C69;
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.40);
    color: #FFF;
}

.v-product-management__buttons__discard {
    color:#EA7C69;
}

</style>