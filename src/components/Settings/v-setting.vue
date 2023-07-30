<template>
    <div class="v-setting">
        <h1 class="v-setting-header">Settings</h1>
        <vSettingOption/>
        <vProductManagement/>
    </div>
</template>
<script>
import vSettingOption from './v-setting-option.vue';
import vProductManagement from './v-product-management.vue';

export default {
    name: 'v-setting',
    components: {
        vSettingOption,
        vProductManagement
    }
}
</script>
<style>
.v-setting {
    display: grid;
    grid-template-columns: 104px 275px auto;
    grid-template-rows: 63px 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
}

.v-setting-header {
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    padding: 25px 0px 0px 0px;
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
}
</style>