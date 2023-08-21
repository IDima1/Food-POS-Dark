<template>
    <div class="menu">
        <div class="menu__header">
            <h2 class="menu__title">{{ $t('headers.choose-dishes') }}</h2>
            <div class="menu__dropdown">
                <SelectField :options="selectOptions" :initialValue="selectedOption" />
            </div>
        </div>
        <div class="menu__list">
            <template v-if="isLoaded">
                <template v-if="isLoadFailed">
                    <p class="large-semibold">Ooops... Something went wrong</p>
                </template>
                <template v-else-if="dishes">
                    <DishSmallCard
                        v-for="dish in dishes"
                        :key="dish.article"
                        :dish_data="dish"
                        @addToCart="addToCart"
                    />
                </template>
                <template v-else>
                    <p class="large-semibold">No reports found</p>
                </template>
            </template>
            <template v-else>
                <p class="large-semibold">loading ...</p>
            </template>
           
        </div>
    </div>
</template>
  
<script setup>
import DishSmallCard from "@/common/cards/DishSmallCard.vue";
import SelectField from "@/fields/SelectField.vue";
import { ref, computed } from "vue";
import { useStore } from "@/store/index.js";
import { useI18n } from 'vue-i18n';

const isLoaded = ref(false);
const isLoadFailed = ref(false);
const { t } = useI18n();
const store = useStore();
store.GET_DISHES_FROM_MOCKOON(isLoaded, isLoadFailed);
const dishes = computed(() => store.dishes);

const addToCart = (data) => {
    store.ADD_TO_CART(data);
};

const selectOptions = [
    {value: 'dine-in', label: 'Dine In'},
    {value: 'to-go', label: 'To Go'},
    {value: 'delivery', label: 'Delivery'}
]

const selectedOption = ref('dine-in');

</script>

<script>
export default {
    name: "HomepageMenu",
    setup() {
        return {
            dishes,
            addToCart
        };
    }
}
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.menu 
    grid-area: 2 / 2 / 4 / 3

.menu__header
    display: flex
    justify-content: space-between

.menu__list
    margin-top: 50px
    display: flex
    justify-content: center
    flex-wrap: wrap
    grid-column-gap: 28px
    grid-row-gap: 58px
</style>