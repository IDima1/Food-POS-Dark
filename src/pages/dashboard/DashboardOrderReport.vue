<template>
    <div class="dashboard-order-report">
        <div class="dashboard-order-report__header">
            <div class="dashboard-order-report__header-title">
                <h2>Order Report</h2>
                <select class="dashboard-order-report__header-select" name="title-filter" id="">
                    <option value="1">Filter Order</option>
                    <option value="1">Example</option>
                    <option value="1">Example</option>
                </select>
            </div>
            <div class="dashboard-order-report__header-tabs">
                <p class="dashboard-order-report__header-tab-text normal-semibold">Customer</p>
                <p class="dashboard-order-report__header-tab-text normal-semibold">Menu</p>
                <p class="dashboard-order-report__header-tab-text normal-semibold">Total Payment</p>
                <p class="dashboard-order-report__header-tab-text normal-semibold">Status</p>
            </div>
            <div class="dashboard-order-report__header-tabs-devider"></div>
        </div>
        <div class="dashboard-order-report__feedbacks">
            <div class="dashboard-order-report__feedback">
                <div
                    v-for="(order, index) in orderReportData"
                    :key="index"
                    class="dashboard-order-report__feedback-one">
                    <div class="dashboard-order-report__feedback-one-customer">
                        <img class="dashboard-order-report__feedback-one-avatar" src="@/assets/avatars/Avatar 1.svg" alt="">
                        <p class="dashboard-order-report__feedback-one-name normal-regular">{{ order.name }}</p>
                    </div>
                    <p class="dashboard-order-report__feedback-one-dishes normal-regular">{{ order.menu }}</p>
                    <p class="dashboard-order-report__feedback-one-cost normal-regular">{{ order.payment }}</p>
                    <p
                    :class="{
                        'dashboard-order-report__feedback-one-status': true,
                        'dashboard-order-report__feedback-one-status--completed': order.status === 'Completed',
                        'dashboard-order-report__feedback-one-status--preparing': order.status === 'Preparing',
                        'dashboard-order-report__feedback-one-status--pending': order.status === 'Pending'}"
                    >{{ order.status }}</p>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>
import orderReportData from '@/data/order-report.js';
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.dashboard-order-report 
    grid-area:  3 / 2 / 6 / 3
    display: flex
    padding-top: 24px
    flex-direction: column
    justify-content: center
    align-items: center // fix position
    gap: 16px
    margin-bottom: 24px
    border-radius: 8px
    background: $darkBg2

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
    background-color: $formBg

.dashboard-order-report__header-tabs 
    height: 20px
    display: grid
    grid-template-columns: 189px 169px 149px 91px
    color: $white
    white-space: nowrap
    margin-bottom: 16px

.dashboard-order-report__header-tabs p 
    margin-right: 70px

.dashboard-order-report__header-tabs-devider 
    border: 1px solid $darkLine
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

.dashboard-order-report__feedback-one 
    display: grid
    grid-template-columns: 189px 169px 149px 91px
    padding: 10px 0px
    align-items: flex-start
    flex: 1
    color: $textLighter

.dashboard-order-report__feedback-one-customer
    display: flex
    align-items:center
    gap: 16px

.dashboard-order-report__feedback-one-avatar
    width: 32px
    height: 32px
    flex-shrink: 0

.normal-regular 
    color: $textLighter

.dashboard-order-report__feedback-one-status 
    display: flex
    width: 91px
    padding: 4px 12px
    justify-content: center
    align-items: center
    gap: 10px
    border-radius: 30px

.dashboard-order-report__feedback-one-status--completed 
    background: rgba(107, 226, 190, 0.24)
    color: $green

.dashboard-order-report__feedback-one-status--preparing
    background: rgba(146, 144, 254, 0.20)
    color: $purple
    
.dashboard-order-report__feedback-one-status--pending 
    background: rgba(255, 181, 114, 0.20)
    color: $orange

</style>