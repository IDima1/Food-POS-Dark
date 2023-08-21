<template>
    <div class="setting">
        <h1 class="setting__header">{{$t('headers.settings')}}</h1>
        <SettingsOption/>
        <SettingsProductManagement/>
    </div>
</template>

<script setup>
import SettingsOption from '@/pages/settings/SettingsOption.vue';
import SettingsProductManagement from '@/pages/settings/SettingsProductManagement.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="sass" scoped>
.setting 
    display: grid
    grid-template-columns: 104px 275px auto
    grid-template-rows: 63px 1fr
    grid-column-gap: 24px
    grid-row-gap: 24px

.setting__header
    grid-area: 1 / 2 / 2 / 4
    display: flex
    padding: 25px 0px 0px 0px

</style>