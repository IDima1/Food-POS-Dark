<template>
    <div class="dashboard-header">
        <div class="dashboard-header__title">
            <h1 class="dashboard-header__header">{{ $t('headers.dashboard')}}</h1>
            <p class="dashboard-header__date large-regular">{{ $t('current-date')}}</p>
        </div>
        <div class="dashboard-header__devider"></div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'
.dashboard-header 
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 24px
    width: 100%

.dashboard-header__title
    display: flex
    flex-direction: column
    justify-content: flex-start

.dashboard-header__date
    color: $text-primary-light

.dashboard-header__devider
    border-bottom: 1px solid $border-primary-main
    width: 100%

</style>