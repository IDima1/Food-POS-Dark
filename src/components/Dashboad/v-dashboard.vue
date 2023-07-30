<template>
    <div class="dashboard">
        <vDashboardHeader/>
        <vDashboardOrderCard/>
        <vDashboardOrderReport/>
        <vDashboardMostOrdered/>
        <vDashboardMostTypeOfOrder/>
    </div>
</template>
<script>
import vDashboardHeader from './v-dashboard-header.vue';
import vDashboardOrderCard from './v-dashboard-order-card.vue';
import vDashboardOrderReport from './v-dashboard-order-report.vue';
import vDashboardMostOrdered from './v-dashboard-most-ordered.vue';
import vDashboardMostTypeOfOrder from './v-dashboard-most-type-of-order.vue';

export default {
    name: 'v-dashboard',
    components: {
        vDashboardHeader,
        vDashboardOrderCard,
        vDashboardOrderReport,
        vDashboardMostOrdered,
        vDashboardMostTypeOfOrder
    }
}
</script>
<style>
.dashboard {
    display: grid;
    grid-template-columns: 104px 1fr 372px;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-right: 24px;
} 
</style>