<template>
    <div class="dashboard">
        <DashboardHeader/>
        <DashboardOrderCard/>
        <DashboardOrderReport/>
        <DashboardMostOrdered/>
        <DashboardMostTypeOfOrder/>
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

<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 104px auto 372px;
    grid-template-rows: auto auto auto auto;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-right: 24px;
} 
</style>