<template>
    <div class="order-report">
        <div class="order-report__avatar-name">
            <img class="order-report__avatar" :src="'../src/assets/avatars/' + report.image" alt="">
            <p class="order-report__name normal-regular">{{ report.name }}</p>
        </div>
        <p class="order-report__feedback normal-regular">{{ report.menu }}</p>
        <p class="order-report__cost normal-regular">{{ report.payment }}</p>
        <p :class="orderStatus">{{ report.status }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    report: Object,
});

const orderStatus = computed(() => {
    return {
        'order-report__status': true,
        'order-report__status--completed': props.report.status === 'Completed',
        'order-report__status--preparing': props.report.status === 'Preparing',
        'order-report__status--pending': props.report.status === 'Pending',
    };
});
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.order-report
    display: grid
    grid-template-columns: 189px 169px 149px 91px
    padding: 10px 0px
    align-items: flex-start
    flex: 1
    color: $text-secondary-main

.order-report__avatar-name
    display: flex
    align-items: center
    gap: 16px

.order-report__avatar
    width: 32px
    height: 32px
    flex-shrink: 0

.order-report__status 
    display: flex
    width: 91px
    padding: 4px 12px
    justify-content: center
    align-items: center
    gap: 10px
    border-radius: 30px

    &--completed 
        background: rgba(107, 226, 190, 0.24)
        color: $completed-main

    &--preparing
        background: rgba(146, 144, 254, 0.20)
        color: $preparing-main

    &--pending 
        background: rgba(255, 181, 114, 0.20)
        color: $pending-main

.normal-regular 
    color: $text-secondary-main

</style>
