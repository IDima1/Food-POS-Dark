<template>
    <div class="dashboard-most-type-of-order">
        <div class="dashboard-most-type-of-order__header">
            <div class="dashboard-most-type-of-order__header-title">
                <h2 class="dashboard-most-type-of-order__header-title-text">Most Type of Order</h2>
                <div>
                    <select class="dashboard-most-type-of-order__header-selector" name="header-filter" id="">
                        <option value="1">Today</option>
                        <option value="1">Yesterday</option>
                        <option value="1">Last Week</option>
                    </select>
                </div>
            </div>
            <div class="dashboard-most-type-of-order__header-devider"></div>
        </div>
        <div class="dashboard-most-type-of-order__content">
            <div class="dashboard-most-type-of-order__content-chart">
                
                <TheChart/>
            </div>
            <div class="dashboard-most-type-of-order__content-cells">
                <div class="dashboard-most-type-of-order__content-cells-cell">
                    <img class="dashboard-most-type-of-order__content-img" src="@/assets/icons/Ellipse-pink.svg" alt="">
                    <div class="dashboard-most-type-of-order__content-cells-cell-container">
                        <p class="normal-medium">Dine In</p>
                        <p class="small-regular">200 customers</p>
                    </div>
                </div>

                <div class="dashboard-most-type-of-order__content-cells-cell">
                    <img src="@/assets/icons/Ellipse-yellow.svg" alt="">
                    <div class="dashboard-most-type-of-order__content-cells-cell-container">
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-title normal-medium">To Go</p>
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-customers small-regular">122 customers</p>
                    </div>
                </div>

                <div class="dashboard-most-type-of-order__content-cells-cell">
                    <img src="@/assets/icons/Ellipse-blue.svg" alt="">
                    <div class="dashboard-most-type-of-order__content-cells-cell-container">
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-title normal-medium">Delivery</p>
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-customers small-regular">264 customers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheChart from '../../common/TheChart.vue';
export default {
    name: 'DashboardMostTypeOfOrder',
    components: {
        TheChart
    }
}
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'

.dashboard-most-type-of-order
    display: flex
    padding: 24px 24px 40px 24px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 32px
    border-radius: 8px
    background: $darkBg2

    &__header-title
        display: inline-flex
        justify-content: center
        align-items: center
        gap: 64px
        background: $darkBg2
        color: $white
        padding-bottom: 16px

    &__header-selector
        display: flex
        height: 45px
        width: 95px
        padding: 14px
        padding-left: 44px
        background-color: $formBg

    &__header-devider 
        border: 1px solid $darkLine
        width: 100%

    &__content
        display: flex
        align-items: center
        flex-direction: row
        gap: 27px

    &__content-cells
        display: inline-flex
        flex-direction: column
        align-items: flex-start
        gap: 16px

    &__content-cells-cell 
        display: flex
        gap: 9px
        align-items: start

    &__content-cells-cell-container 
        display: inline-flex
        flex-direction: column
        align-items: flex-start
        gap: 2px

    .small-regular 
        color: $textLight
</style>
