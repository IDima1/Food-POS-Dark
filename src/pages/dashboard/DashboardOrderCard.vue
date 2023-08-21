<template>
    <div class="dashboard-order-cards">
        <template v-if="isLoaded">
            <template v-if="isLoadFailed">
                <p class="large-semibold">Ooops... Something went wrong</p>
            </template>
            <template v-else>
                <div v-for="card in cards" 
                    :key="card.description" 
                    class="dashboard-order-cards__card">
                    <div class="dashboard-order-cards__description">
                        <img class="dashboard-order-cards__icon" :src="'../src/assets/icons/' + card.icon" alt="">
                        <p
                        class="dashboard-order-cards__percentage small-medium"
                        :class="{'green-text': isPositivePercentage(card.percentage), 'red-text': !isPositivePercentage(card.percentage)}"
                        >
                        {{ card.percentage }}
                        </p>
                        <img
                            class="dashboard-order-cards__arrow"
                            :src="getArrowIconUrl(card.percentage)"
                            :style="{ backgroundColor: isPositivePercentage(card.percentage) ? 'rgba(136, 224, 145, 0.24)' : 'rgba(255, 100, 113, 0.24)' }"
                        >
                    </div>
                    <div class="dashboard-order-cards__content">
                        <h1 class="dashboard-order-cards__amount">{{ card.amount }}</h1>
                        <p class="dashboard-order-cards__text normal-medium">{{ card.description }}</p>
                    </div>
                </div>
            </template>
        </template>
        <template v-else>
            <p class="large-semibold">loading ...</p>
        </template>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useStore } from '@/store/index.js'; 

const isLoaded = ref(false);
const isLoadFailed = ref(false);
const store = useStore();
const cards = ref([])

onMounted(async()=> {
    await store.GET_ORDER_CARDS_FROM_MOCKOON(isLoaded, isLoadFailed);
    cards.value = reactive(store.cards);
});

const isPositivePercentage = (percentage) => parseFloat(percentage) > 0;
const getArrowIconUrl = (percentage) => `/src/assets/icons/${isPositivePercentage(percentage) ? 'Arrow-up-green.svg' : 'Arrow-down-red.svg'}`;
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.dashboard-order-cards 
    display: flex
    align-items: flex-start
    justify-content: space-between
    gap: 24px

.dashboard-order-cards__card 
    display: flex
    width: 199px
    padding: 16px
    flex-direction: column
    gap: 8px
    align-items: flex-start
    border-radius: 8px
    background: $background-secondary-main

.dashboard-order-cards__description
    display: flex
    justify-content: center
    align-items: center
    gap: 12px

.dashboard-order-cards__icon
    display: flex
    padding: 7px
    align-items: flex-start
    gap: 10px
    border-radius: 8px
    background: $background-primary-main

.dashboard-order-cards__arrow
    display: flex
    padding: 2px
    align-items: flex-start
    gap: 10px
    border-radius: 20px
    width: 16px
    height: 16px

.dashboard-order-cards__content
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 8px

.normal-medium 
    color: $text-primary-light

.green-text
    color: $completed-main

.red-text 
    color: $negative-main
</style>