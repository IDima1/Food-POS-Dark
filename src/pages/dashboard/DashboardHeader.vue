<template>
    <div class="v-dashboard-header">
        <div class="v-dashboard-header__main_title">
            <h1>Dashboard</h1>
            <p>Tuesday, 2 Feb 2021</p>
        </div>
        <div class="v-dashboard__header__devider"></div>
    </div>
</template>
<script>
export default {
    name: 'DashboardHeader'
}
</script>
<style scoped>
.v-dashboard-header {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 24px;
    gap:24px;
}

.v-dashboard-header__main_title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.v-dashboard-header__main_title h1 {
    color: white;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

.v-dashboard-header__main_title p {
    color: #ABBBC2;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.v-dashboard__header__devider {
    border-bottom: 1px solid #393C49;
    width: 100%;
}


</style>