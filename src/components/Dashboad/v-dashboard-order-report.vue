<template>
    <div class="v-dashboard-order-report">
        <div class="v-dashboard-order-report__header">
            <div class="v-dashboard-order-report__header-title">
                <h2>Order Report</h2>
                <select name="title-filter" id="">
                    <option value="1">Filter Order</option>
                    <option value="1">Example</option>
                    <option value="1">Example</option>
                </select>
            </div>
            <div class="v-dash-order-report__header-heading">
                <p>Customer</p>
                <p>Menu</p>
                <p>Total Payment</p>
                <p>Status</p>
            </div>
            <div class="v-dash-order-report__header-heading__devider"></div>
        </div>
        <div class="v-dashboard-order-report__rows">
            <div class="v-dashboard-order-report__rows-all">
                <div
                v-for="(order, index) in orderReportData"
                :key="index"
                class="v-dashboard-order-report__rows-all-1"
                >
                    <div>
                        <img src="../../assets/avatars/Avatar 1.svg" alt="">
                        <p class="v-dashboard-order-report__rows-all-1-name">{{ order.name }}</p>
                    </div>
                    <p class="v-dashboard-order-report__rows-all-1-menu">{{ order.menu }}</p>
                    <p class="v-dashboard-order-report__rows-all-1-payment">{{ order.payment }}</p>
                    <p
                    :class="{
                    'v-dashboard-order-report__rows-all-1-status': true,
                    'v-dashboard-order-report__rows-all-1-status--completed': order.status === 'Completed',
                    'v-dashboard-order-report__rows-all-1-status--preparing': order.status === 'Preparing',
                    'v-dashboard-order-report__rows-all-1-status--pending': order.status === 'Pending'
                    }"
                    >{{ order.status }}</p>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import orderReportData from '../../data/order-report.js';

export default {
    name: 'v-dashboard-order-report',
    data() {
        return {
            orderReportData: orderReportData,
        }
    }
}
</script>
<style>
.v-dashboard-order-report {
    grid-area:  3 / 2 / 6 / 3;
    display: flex;
    padding-top: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    border-radius: 8px;
    background: #1F1D2B;
} 

.v-dashboard-order-report__header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.v-dashboard-order-report__header-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.v-dashboard-order-report__header-title h2 {
    color:#FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

.v-dashboard-order-report__header-title p {
    color:#FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
}

.v-dashboard-order-report__header-title select {
    appearance: none;
    display: inline-flex;
    width: 128px;
    padding: 14px;
    align-items: center;
    gap: 10px;
    color: #FFF;
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #1F1D2B;
    background: url(/src/assets/icons/Option.svg) no-repeat left 14px center;
    padding-left: 44px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    background-color: #2D303E;
}

.v-dash-order-report__header-heading {
    height: 20px;
    display: grid;
    grid-template-columns: 189px 169px 149px 91px;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    white-space: nowrap;
    margin-bottom: 16px;
}

.v-dash-order-report__header-heading p {
    margin-right: 70px;
}

.v-dash-order-report__header-heading__devider {
    border: 1px solid #393C49;
    width: 100%;

}

.v-dashboard-order-report__rows {
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-dashboard-order-report__rows-all {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

.v-dashboard-order-report__rows-all-1 {
    display: grid;
    grid-template-columns: 189px 169px 149px 91px;
    padding: 10px 0px;
    align-items: flex-start;
    flex: 1;
    color: #E0E6E9;
}

.v-dashboard-order-report__rows-all-1 div {
    display: flex;
    align-items:center;
    gap:16px;
}

.v-dashboard-order-report__rows-all-1 div img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
}

.v-dashboard-order-report__rows-all-1-name, 
.v-dashboard-order-report__rows-all-1-menu, 
.v-dashboard-order-report__rows-all-1-payment {
    color:#E0E6E9;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.v-dashboard-order-report__rows-all-1-status {
    display: flex;
    width: 91px;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 30px; 
}

.v-dashboard-order-report__rows-all-1-status--completed {
    background: rgba(107, 226, 190, 0.24);
    color:#50D1AA;
}

.v-dashboard-order-report__rows-all-1-status--preparing {
    background: rgba(146, 144, 254, 0.20);
    color:#9290FE;
}

.v-dashboard-order-report__rows-all-1-status--pending {
    background: rgba(255, 181, 114, 0.20);
    color:#FFB572;
}

</style>