<template>
    <div class="v-setting-option">
        <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['v-setting-option__content', { 'active-tab': index === activeTab }]"
        @click="selectTab(index)"
        >
            <div class="v-setting-option__content-prop">
                <img :src="tab.img" alt="">
                <p class="textheader">{{ tab.header }}</p><br>
                <p class="textdescr">{{ tab.description }}</p>
            </div>
        </div>
  </div>
</template>
<script>
import AppereanceIcon from '../../assets/icons/Appereance.svg';
import RestaurantIcon from '../../assets/icons/Restaurant.svg';
import DiscountIcon from '../../assets/icons/Appereance.svg';
import NotificationIcon from '../../assets/icons/Restaurant.svg';
import SecurityIcon from '../../assets/icons/Appereance.svg';
import About_UsIcon from '../../assets/icons/Restaurant.svg';

export default {
    name: 'v-setting-option',
    data() {
        return {
            activeTab: 2,
            tabs: [
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
            ]
        }
    },
    methods: {
        selectTab(index){
            console.log('Selected Tab:', index);
            this.activeTab = index;
        }
    }
}
</script>
<style>
.v-setting-option {
    grid-area: 2 / 2 / 3 / 3;
    display: inline-flex;
    min-height: 723px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    margin-bottom: 24px;;
    border-radius: 8px;
    background-color:#1F1D2B;
    position: relative;
} 

.v-setting-option__content {
    display: flex;
    width: 275px;
    padding: 24px 0px 24px 24px;
    align-items: flex-end;
    gap: 20px;
    border-radius: 8px;
}

.v-setting-option__content .textheader, .textdescr {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.v-setting-option__content .textheader {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin: 0;
}

.v-setting-option__content .textdescr {
    color:#ABBBC2;
    padding-left: 24px;

    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.v-setting-option__content img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-right: 8px;
}

.v-setting-option__content:hover {
    cursor: pointer;
    background-color:rgba(234, 124, 105, 0.26);
}

.v-setting-option__content.active-tab {
    background-color: rgba(234, 124, 105, 0.26);
    position: relative;
}

.v-setting-option__content.active-tab::after {
    content: "";
    position: absolute;
    top: auto;
    right: 0;
    height: 39px;
    width: 4px;
    border-radius: 16px;
    background-color: #EA7C69;
    z-index: 1;
}

</style>