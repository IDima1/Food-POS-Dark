<template>
    <div class="setting-option">
        <div
            v-for="(tab, index) in tabs"
            :key="index"
            :class="['setting-option__content', { 'active-tab': index === activeTab }]"
            @click="selectTab(index)">
            <div class="setting-option__content-prop">
                <img class="setting-option__content-img" :src="tab.img" alt="">
                <p class="setting-option__content-text normal-medium">{{ tab.header }}</p><br>
                <p class="setting-option__content-text small-regular">{{ tab.description }}</p>
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppereanceIcon from '@/assets/icons/Appereance.svg';
import RestaurantIcon from '@/assets/icons/Restaurant.svg';
import DiscountIcon from '@/assets/icons/Appereance.svg';
import NotificationIcon from '@/assets/icons/Restaurant.svg';
import SecurityIcon from '@/assets/icons/Appereance.svg';
import About_UsIcon from '@/assets/icons/Restaurant.svg';

const activeTab = ref(2);
const tabs = [
    {
        header: 'Appearence',
        description: 'Dark and Light mode, Font size',
        img: AppereanceIcon,
    },
    {
        header: 'Your Restaurant',
        description: 'Dark and Light mode, Font size',
        img: RestaurantIcon,
    },
    {
        header: 'Products Management',
        description: 'Manage your product, pricing, etc',
        img: DiscountIcon,
    },
    {
        header: 'Notifications',
        description: 'Customize your notifications',
        img: NotificationIcon,
    },
    {
        header: 'Security',
        description: 'Configure Password, PIN, etc',
        img: SecurityIcon,
    },
    {
        header: 'Security',
        description: 'Configure Password, PIN, etc',
        img: SecurityIcon,
    },
    {
        header: 'About Us',
        description: 'Find out more about Posly',
        img: About_UsIcon,
    },
];

const selectTab = (index) => {
    activeTab.value = index;
    console.log('Selected Tab:', index);
}
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.setting-option 
    grid-area: 2 / 2 / 3 / 3
    display: inline-flex
    min-height: 723px
    flex-direction: column
    align-items: flex-start
    flex-shrink: 0
    margin-bottom: 24px
    border-radius: 8px
    background-color: $darkBg2
    position: relative

.setting-option__content 
    display: flex
    width: 275px
    padding: 24px 0px 24px 24px
    align-items: flex-end
    gap: 20px
    border-radius: 8px

.setting-option__content p
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 4px

.small-regular 
    color: #ABBBC2
    padding-left: 24px

.setting-option__content-img
    width: 16px
    height: 16px
    flex-shrink: 0
    margin-right: 8px

.setting-option__content:hover 
    cursor: pointer
    background-color:rgba(234, 124, 105, 0.26)

.setting-option__content.active-tab 
    background-color: rgba(234, 124, 105, 0.26)
    position: relative

.setting-option__content.active-tab::after 
    content: ""
    position: absolute
    top: auto
    right: 0
    height: 39px
    width: 4px
    border-radius: 16px
    background-color: $primary
    z-index: 1

</style>