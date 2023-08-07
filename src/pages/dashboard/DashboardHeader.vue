<template>
    <div class="dashboard-header">
        <div class="dashboard-header__main-title">
            <h1 class="dashboard-header__headline">Dashboard</h1>
            <p class="dashboard-header__text large-regular">Tuesday, 2 Feb 2021</p>
        </div>
        <div class="dashboard-header__devider"></div>
    </div>
</template>

<script>
export default {
    name: 'DashboardHeader'
}
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.dashboard-header 
    grid-area: 1 / 2 / 2 / 3
    display: flex
    flex-direction: column
    align-items: flex-start
    padding-top: 24px
    gap: 24px

    &__main-title
        display: flex
        flex-direction: column
        justify-content: flex-start

    &__text
        color: $textLight

    &__devider
        border-bottom: 1px solid $darkLine
        width: 100%

</style>