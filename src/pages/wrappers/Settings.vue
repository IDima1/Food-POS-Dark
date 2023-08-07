<template>
    <div class="setting">
        <h1 class="setting__header">Settings</h1>
        <SettingsOption/>
        <SettingsProductManagement/>
    </div>
</template>

<script>
import SettingsOption from '@/pages/settings/SettingsOption.vue';
import SettingsProductManagement from '@/pages/settings/SettingsProductManagement.vue';

export default {
    name: 'Settings',
    components: {
        SettingsOption,
        SettingsProductManagement
    }
}
</script>

<style lang="sass" scoped>
.setting 
    display: grid
    grid-template-columns: 104px 275px auto
    grid-template-rows: 63px 1fr
    grid-column-gap: 24px
    grid-row-gap: 24px

    &__header
        grid-area: 1 / 2 / 2 / 4
        display: flex
        padding: 25px 0px 0px 0px

</style>