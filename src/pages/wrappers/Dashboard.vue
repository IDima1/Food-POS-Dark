<template>
    <div class="dashboard">
        <div class="dashboard__column-one">
            <DashboardHeader/>
            <div class="dashboard__column-one-content">
                <DashboardOrderCard/>
                <DashboardOrderReport/>
            </div>
        </div>
        <div class="dashboard__column-two">
            <DashboardMostOrdered/>
            <DashboardMostTypeOfOrder/>
        </div>
    </div>
</template>

<script>
import DashboardHeader from '@/pages/dashboard/DashboardHeader.vue';
import DashboardOrderCard from '@/pages/dashboard/DashboardOrderCard.vue';
import DashboardOrderReport from '@/pages/dashboard/DashboardOrderReport.vue';
import DashboardMostOrdered from '@/pages/dashboard/DashboardMostOrdered.vue';
import DashboardMostTypeOfOrder from '@/pages/dashboard/DashboardMostTypeOfOrder.vue';

export default {
    name: 'Dashboard',
    components: {
        DashboardHeader,
        DashboardOrderCard,
        DashboardOrderReport,
        DashboardMostOrdered,
        DashboardMostTypeOfOrder
    }
}
</script>

<style lang="sass" scoped>
@import '@/styles/styles.sass'
.dashboard
    display: flex
    align-items: stretch
    gap: $gap-24
    flex: 1
    
    &__column-one
        display: flex
        flex-direction: column
        align-items: flex-start
        gap: $gap-24
        flex: 1 
        margin: 24px 0px 0px 128px
        min-height: 100vh

    &__column-one-content
        display: flex
        flex-direction: column
        gap: $gap-24
        flex: 1 
        width: 100%

    &__column-two
        display: flex
        flex-direction: column
        align-items: flex-start
        gap: $gap-24
        width: 372px
        margin: 24px 24px 0px 0px
        
</style>
