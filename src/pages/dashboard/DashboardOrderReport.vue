<template>
    <div class="dashboard-order-report">
        <div class="dashboard-order-report__header">
            <div class="dashboard-order-report__header-title">
                <h2>{{ $t('headers.order-report')}}</h2>
                <SelectField 
                    :options="selectOptions" 
                    :initialValue="selectedOption" 
                    class=" dashboard-order-report__header-select normal-medium" 
                />
            </div>
            <div class="dashboard-order-report__header-tabs">
                <p class="dashboard-order-report__header-tab-text normal-semibold">{{ $t('tabs.customer') }}</p>
                <p class="dashboard-order-report__header-tab-text normal-semibold">{{ $t('tabs.menu') }}</p>
                <p class="dashboard-order-report__header-tab-text normal-semibold">{{ $t('tabs.total-payment') }}</p>
                <p class="dashboard-order-report__header-tab-text normal-semibold">{{ $t('tabs.status') }}</p>
            </div>
            <div class="dashboard-order-report__header-tabs-devider"></div>
        </div>
        <div class="dashboard-order-report__feedbacks">
            <div class="dashboard-order-report__feedback">
                <template v-if="isLoaded">
                    <template v-if="isLoadFailed">
                        <p class="large-semibold">Ooops... Something went wrong</p>
                    </template>
                    <template v-else-if="reports.length">
                        <OrderReport
                            v-for="report in reports"
                            :key="report.id"
                            :report="report"
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
    </div>
</template>

<script setup>
import SelectField from '@/fields/SelectField.vue';
import OrderReport from '@/fields/OrderReport.vue'
import { ref, computed } from 'vue'
import { useStore } from '@/store/index.js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const isLoaded = ref(false);
const isLoadFailed = ref(false);
const store = useStore();
store.GET_ORDER_REPORTS_FROM_MOCKOON(isLoaded, isLoadFailed);
const reports = computed(() => store.reports);
const selectOptions = [
    {value: 'filter', label: 'Filter Order'},
    {value: 'yesterday', label: 'Yesterday'},
    {value: 'last-week', label: 'Last Week'}
]

const selectedOption = ref('filter');
</script>

<script>
export default {
    setup(){
        return {
            reports
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.dashboard-order-report 
    display: flex
    padding-top: 24px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 16px
    margin-bottom: 24px
    border-radius: 8px
    background: $background-secondary-main
    width: 100%

.dashboard-order-report__header
    display: flex
    flex-direction: column
    justify-content: flex-start

.dashboard-order-report__header-title 
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    margin-bottom: 24px

.dashboard-order-report__header-select
    width: 128px
    background: url(/src/assets/icons/Option.svg) no-repeat left 14px center
    background-color: $background-secondary-main

.dashboard-order-report__header-tabs 
    display: grid
    grid-template-columns: 189px 169px 149px 91px
    color: $white
    white-space: nowrap
    margin-bottom: 16px

.dashboard-order-report__header-tabs p 
    margin-right: 70px

.dashboard-order-report__header-tabs-devider
    border: 1px solid $border-primary-main
    width: 100%

.dashboard-order-report__feedbacks
    display: flex
    justify-content: center
    align-items: center

.dashboard-order-report__feedback 
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 2px

</style>
