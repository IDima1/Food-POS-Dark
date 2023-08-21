<template>
    <div class="dashboard-most-type-of-order">
        <div class="dashboard-most-type-of-order__header">
            <div class="dashboard-most-type-of-order__header-title">
                <h2 class="dashboard-most-type-of-order__header-headline">{{$t('headers.most-type-of-order')}}</h2>
                <SelectField :options="selectOptions" :initialValue="selectedOption" />
            </div>
            <div class="dashboard-most-type-of-order__header-devider"></div>
        </div>
        <div class="dashboard-most-type-of-order__content">
            <TheChart/>
            <div class="dashboard-most-type-of-order__content-legend">
                <template v-if="isLoaded">
                    <template v-if="isLoadFailed">
                        <p class="large-semibold">Ooops... Something went wrong</p>
                    </template>
                    <template v-else-if="legends">
                        <ChartInfo
                            v-for="legend in legends"
                            :key="legend.title"
                            :legend="legend"
                        />
                    </template>
                    <template v-else>
                        <p class="large-semibold">No chart legend found</p>
                    </template>
                </template>
                <template v-else>
                    <p class="large-semibold">loading ...</p>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
import TheChart from '@/common/chart/TheChart.vue';
import ChartInfo from '@/common/chart/ChartInfo.vue';
import SelectField from '@/fields/SelectField.vue';
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store/index.js'

const { t } = useI18n();
const isLoaded = ref(false);
const isLoadFailed = ref(false);
const store = useStore();
store.GET_LEGEND_CHART_FROM_MOCKOON(isLoaded, isLoadFailed);
const legends = computed(() => store.legends);
const selectOptions = [
    {value: 'today', label: 'Today'},
    {value: 'yesterday', label: 'Yesterday'},
    {value: 'last-week', label: 'Last Week'}
];

const selectedOption = ref('today');
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.dashboard-most-type-of-order
    display: flex
    padding: 24px 24px 40px 24px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 32px
    border-radius: 8px
    background: $background-secondary-main

.dashboard-most-type-of-order__header-title
    display: inline-flex
    justify-content: center
    align-items: center
    gap: 64px
    background: $background-secondary-main
    color: $white
    padding-bottom: 16px

.dashboard-most-type-of-order__header-devider
    border: 1px solid $border-primary-main
    width: 100%

.dashboard-most-type-of-order__content
    display: flex
    align-items: center
    flex-direction: row
    gap: 27px

.dashboard-most-type-of-order__content-legend
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 16px

.legend-cell
    display: flex
    gap: 9px
    align-items: start

.legend-cell-container
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 2px

.small-regular 
    color: $text-primary-light
</style>
