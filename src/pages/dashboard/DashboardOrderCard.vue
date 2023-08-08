<template>
    <div class="dashboard-order-cards">
        <div v-for="card in getPositivePercentage" 
            :key="card.title" 
            class="dashboard-order-cards__card">
            <div class="dashboard-order-cards__card-description">
                <img class="dashboard-order-cards__card-icon" :src="card.icon">
                <p 
                    class="dashboard-order-cards__card-percentage small-medium"
                    :class="{ 'green-text'
                    :card.positivePercentage, 'red-text'
                    :!card.positivePercentage }">
                    {{ card.percentage }}
                </p>
                <img
                    class="dashboard-order-cards__card-arrow"
                    :src="card.positivePercentage ? card.arrowUpIcon : card.arrowDownIcon"
                    :style="{ backgroundColor: card.positivePercentage ? 'rgba(136, 224, 145, 0.24)' : 'rgba(255, 100, 113, 0.24)' }"
                >
            </div>
            <div class="dashboard-order-cards__card-content">
                <h1>{{ card.amount }}</h1>
                <p class="dashboard-order-cards__card-content-description normal-medium">{{ card.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import CoinIcon from '@/assets/icons/Coin.svg'
import OrderIcon from '@/assets/icons/Order.svg'
import CustomerIcon from '@/assets/icons/Customer.svg'
import ArrowUpIcon from '@/assets/icons/Arrow-up-green.svg'
import ArrowDownIcon from '@/assets/icons/Arrow-down-red.svg'

const cardDetails = [
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
];

const getPositivePercentage = cardDetails.map((card) => ({
    ...card,
    positivePercentage: parseFloat(card.percentage) >= 0,
    }));
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'

.dashboard-order-cards 
    grid-area: 2 / 2 / 3 / 3
    display: flex
    align-items: flex-start
    justify-content: space-between
    gap: 24px

.dashboard-order-cards__card 
    display: flex
    width: 199px
    padding: 16px
    flex-direction: column
    gap: 8px
    align-items: flex-start
    border-radius: 8px
    background: $darkBg2
    cursor: pointer

.dashboard-order-cards__card-description 
    display: flex
    justify-content: center
    align-items: center
    gap: 12px

.dashboard-order-cards__card-icon
    display: flex
    padding: 7px
    align-items: flex-start
    gap: 10px
    border-radius: 8px
    background: $darkBg1

.dashboard-order-cards__card-arrow
    display: flex
    padding: 2px
    align-items: flex-start
    gap: 10px
    border-radius: 20px
    width: 16px
    height: 16px

.dashboard-order-cards__card-content
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 8px

.normal-medium 
    color: $textLight

.green-text
    color: $green

.red-text 
    color: $red

</style>
