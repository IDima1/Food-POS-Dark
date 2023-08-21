<template>
    <div class="dashboard-most-ordered">
        <div class="dashboard-most-ordered__header">
            <h2 class="dashboard-most-ordered__title">{{$t('headers.most-ordered')}}</h2>
            <div class="dashboard-most-ordered__selector">
                <SelectField :options="selectOptions" :initialValue="selectedOption" />
            </div>
        </div>
        <div class="dashboard-most-ordered__content">
            <div class="dashboard-most-ordered__menu">
                <template v-if="isLoaded">
                    <template v-if="isLoadFailed">
                        <p class="large-semibold">Ooops... Something went wrong</p>
                    </template>
                    <template v-else-if="mostOrderedDishes">
                        <OrderMost
                            v-for="mostOrderedDish in mostOrderedDishes"
                            :key="mostOrderedDish.id"
                            :mostOrderedDish="mostOrderedDish"
                        />
                    </template>
                    <template v-else>
                        <p class="large-semibold">No most ordered dishes found</p>
                    </template>
                </template>
                <template v-else>
                    <p class="large-semibold">loading ...</p>
                </template>
            </div>  
        </div>
        <ButtonField
            :label="$t('buttons.view-button')"
            class="dashboard-most-ordered__button"
            @click="onViewAll"
        />
    </div>
</template>

<script setup>
import ButtonField from '@/fields/ButtonField.vue';
import OrderMost from '@/fields/OrderMost.vue'
import SelectField from '@/fields/SelectField.vue';
import { useStore } from '@/store/index.js'
import { ref, computed } from 'vue';

const isLoaded = ref(false);
const isLoadFailed = ref(false);
const store = useStore();
store.GET_MOST_ORDERED_FROM_MOCKOON(isLoaded, isLoadFailed);
const mostOrderedDishes = computed(() => store.mostOrderedDishes);

const onViewAll = () => {
    console.log('View all most ordered dishes')
};

const selectOptions = [
    {value: 'today', label: 'Today'},
    {value: 'yesterday', label: 'Yesterday'},
    {value: 'last-week', label: 'Last Week'}
]

const selectedOption = ref('today');
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.dashboard-most-ordered 
    display: flex
    padding: 24px
    flex-direction: column
    align-items: flex-start
    gap: 20px
    border-radius: 8px
    background: $background-secondary-main

.dashboard-most-ordered__header
    display: flex
    justify-content: space-between
    align-items: center
    gap: 111px
    color: $white
    padding-bottom: 20px
    border-bottom: 2px solid $border-primary-main
    width: 100%

.dashboard-most-ordered__content
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 32px

.dashboard-most-ordered__menu
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 24px
    width: 100%

.dashboard-most-ordered__button
    border-radius: 8px
    border: 1px solid  $primary-main
    color: $primary-main
    background-color: $background-secondary-main

.normal-semibold 
    color: $primary-main

.normal-medium  
    color: $text-secondary-main

.small-regular 
    color: $text-primary-light
</style>
