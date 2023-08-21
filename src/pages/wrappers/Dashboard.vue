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
@import '@/styles/app.sass'
.dashboard
    display: flex
    align-items: stretch
    gap: 24px
    flex: 1
    
.dashboard__column-one
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 24px
    flex: 1 
    margin: 24px 0px 0px 128px
    min-height: 100vh

.dashboard__column-one-content
    display: flex
    flex-direction: column
    gap: 24px
    flex: 1 
    width: 100%

.dashboard__column-two
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 24px
    width: 372px
    margin: 24px 24px 0px 0px
        
</style>