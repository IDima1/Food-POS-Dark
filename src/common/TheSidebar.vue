<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <img class="sidebar_logo-img" src="../../public/SidebarRestaurant.svg" alt="logo">
        </div>
        <div class="sidebar__menu">
            <div class="sidebar__menu-item"
                :class="{ 'active-item': $route.path === '/' }"
                @click="$router.push('/')">
                <img class="sidebar__menu-img" src="@/assets/icons/Home.svg" alt=""/>
            </div>
            <div class="sidebar__menu-item"
                :class="{ 'active-item': $route.path === '/discount' }"
                @click="showAlert">
                <img class="sidebar__menu-img" src="@/assets/icons/Discount.svg" alt=""/>
            </div>
            <div class="sidebar__menu-item"
                :class="{ 'active-item': $route.path === '/dashboard' }"
                @click="$router.push('/dashboard')">
                <img class="sidebar__menu-img" src="@/assets/icons/Dashboard.svg" alt=""/>
            </div>
            <div class="sidebar__menu-item"
                :class="{ 'active-item': $route.path === '/message' }"
                @click="showAlert">
                <img class="sidebar__menu-img" src="@/assets/icons/Message.svg" alt=""/>
            </div>
            <div class="sidebar__menu-item"
                :class="{ 'active-item': $route.path === '/notification' }"
                @click="showAlert">
                <img class="sidebar__menu-img" src="@/assets/icons/Notification.svg" alt=""/>
            </div>
            <div class="sidebar__menu-item"
                :class="{ 'active-item': $route.path === '/settings' }"
                @click="$router.push('/settings')">
                <img class="sidebar__menu-img" src="@/assets/icons/Setting.svg" alt=""/>
            </div>
            <div class="sidebar__menu-logout"
                :class="{ 'active-item': $route.path === '/log-out' }"
                @click="showAlert">
                <img class="sidebar__menu-img" src="@/assets/icons/Log Out.svg" alt=""/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter} from 'vue-router';

const $route = useRoute();
const $router = useRouter();
const showAlert = () => {
    alert('Under construction');
}
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.sidebar
    padding: 20px 0px
    background-color: $background-secondary-main
    height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    border-radius: 0px 15px 15px 0px
    position: fixed
    width: 104px

.sidebar__logo
    background-color: #82604e
    width: 56px
    height: 56px
    border-radius: 15px
    display: flex
    justify-content: center
    align-items: center
    flex-shrink: 0
.sidebar_logo-img
    width: 36px
    height: 36px

.sidebar__menu
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-evenly
    padding-bottom: 50px

.sidebar__menu-item
    width: 56px
    height: 56px
    display: flex
    justify-content: center
    align-items: center
    position: relative
    z-index: 10
    cursor: pointer
    border-radius: 15px

.sidebar__menu-logout
    width: 56px
    height: 56px
    border-radius: 15px
    display: flex
    justify-content: center
    align-items: center
    flex-shrink: 0
    transition: border 0.2s ease-in-out

.sidebar__menu-item.active-item
    background-color: $primary-main
    border-color: $primary-main
    z-index: 2
    position: relative

.sidebar__menu-item.active-item::before
    content: url("../assets/icons/SidebarActive.svg")
    position: absolute
    z-index: -1
    left: -12px
    top: -25px
    width: 56px
    height: 56px
    border-radius: 15px

.sidebar__menu-item.active-item::after
    content: ''
    position: absolute
    z-index: 0
    top: 0
    left: 0
    width: 56px
    height: 56px
    border-radius: 15px
    background-color: $primary-main
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.32)

.sidebar__menu-item.active-item img
    position: relative
    z-index: 1
</style>