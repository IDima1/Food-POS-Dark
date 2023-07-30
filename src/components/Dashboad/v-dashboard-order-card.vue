<template>
    <div class="v-dashboard-order-card">
      <div v-for="card in getPositivePercentage" :key="card.title" class="v-dashboard-order-card__card-detail">
        <div class="v-dashboard-order-card__card-detail-title-1">
          <img :src="card.icon" class="icon">
          <p :class="{ 'green-text': card.positivePercentage, 'red-text': !card.positivePercentage }">
            {{ card.percentage }}
          </p>
          <img
          :src="card.positivePercentage ? card.arrowUpIcon : card.arrowDownIcon"
          class="arrow"
          :style="{ backgroundColor: card.positivePercentage ? 'rgba(136, 224, 145, 0.24)' : 'rgba(255, 100, 113, 0.24)' }"
          >
        </div>
        <div class="v-dashboard-order-card__card-content">
          <h1>{{ card.amount }}</h1>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </template>
<script>
import CoinIcon from '../../assets/icons/Coin.svg'
import OrderIcon from '../../assets/icons/Order.svg'
import CustomerIcon from '../../assets/icons/Customer.svg'
import ArrowUpIcon from '../../assets/icons/Arrow-up-green.svg'
import ArrowDownIcon from '../../assets/icons/Arrow-down-red.svg'

export default {
    name: 'v-dashboard-order-card',
    data() {
        return {
            cardDetails: [
                {
                icon: CoinIcon,
                percentage: '+32.40%',
                arrowUpIcon: ArrowUpIcon,
                arrowDownIcon: ArrowDownIcon,
                amount: '$10,243.00',
                description: 'Total Revenue',
                },
                {
                icon: OrderIcon,
                percentage: '-12.40%',
                arrowUpIcon: ArrowUpIcon,
                arrowDownIcon: ArrowDownIcon,
                amount: '23,456',
                description: 'Total Dish Ordered',
                },
                {
                icon: CustomerIcon,
                percentage: '+2.40%',
                arrowUpIcon: ArrowUpIcon,
                arrowDownIcon: ArrowDownIcon,
                amount: '1,234',
                description: 'Total Customer',
                },
            ],
        };
    },
    computed: {
        getPositivePercentage() {
            return this.cardDetails.map((card) => ({
            ...card,
            positivePercentage: parseFloat(card.percentage) >= 0,
            }));
        },
    },
}
</script>
<style>
.v-dashboard-order-card {
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
}

.v-dashboard-order-card__card-detail {
    display: flex;
    width: 199px;
    padding: 16px;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;

    border-radius: 8px;
    background: var(--base-dark-bg-2, #1F1D2B);

    cursor: pointer;
}

.v-dashboard-order-card__card-detail-title-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.v-dashboard-order-card__card-detail-title-1 .icon  {
    display: flex;
    padding: 7px;
    align-items: flex-start;
    gap: 10px;

    border-radius: 8px;
    background: #252836;
}

.v-dashboard-order-card__card-detail-title-1 p {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}

.v-dashboard-order-card__card-detail-title-1 .arrow  {
    display: flex;
    padding: 2px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 20px;

    width: 16px;
    height: 16px;
}

.v-dashboard-order-card__card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}

.v-dashboard-order-card__card-content h1 {
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
}

.v-dashboard-order-card__card-content p {
    color:#ABBBC2;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
}

.green-text {
    color: #50D1AA;
}

.red-text {
    color: #FF7CA3;
}
</style>
