<template>
    <div class="v-sidebar">
        <div class="v-sidebar__logo">
            <img src="../../public/SidebarRestaurant.svg" alt="logo">
        </div>
        <div class="v-sidebar__menu">
            <div class="v-sidebar__menu_item"
                :class="{ 'active-item': isActive('/') }"
                @click="$router.push('/')">
                <img src="@/assets/icons/Home.svg" alt=""/>
            </div>
            <div class="v-sidebar__menu_item"
                :class="{ 'active-item': isActive('/discount') }"
                @click="showAlert">
                <img src="@/assets/icons/Discount.svg" alt=""/>
            </div>
            <div class="v-sidebar__menu_item"
                :class="{ 'active-item': isActive('/dashboard') }"
                @click="$router.push('/dashboard')">
                <img src="@/assets/icons/Dashboard.svg" alt=""/>
            </div>
            <div class="v-sidebar__menu_item"
                :class="{ 'active-item': isActive('/messages') }"
                @click="showAlert">
                <img src="@/assets/icons/Message.svg" alt=""/>
            </div>
            <div class="v-sidebar__menu_item"
                :class="{ 'active-item': isActive('/notifications') }"
                @click="showAlert">
                <img src="@/assets/icons/Notification.svg" alt=""/>
            </div>
            <div class="v-sidebar__menu_item"
                :class="{ 'active-item': isActive('/settings') }"
                @click="$router.push('/settings')">
                <img src="@/assets/icons/Setting.svg" alt=""/>
            </div>
            <div class="v-sidebar__menu_logout"
                :class="{ 'active-item': isActive('/payment') }"
                @click="showAlert">
                <img src="@/assets/icons/Log Out.svg" alt=""/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheSidebar",
    data() {
        return {
            activeItem: null
        }
    },
    methods: {
        showAlert() {
            alert('Under construction');
        },
        isActive(route) {
            return this.$route.path === route;
        },
    }
}
</script>

<style scoped>
.v-sidebar {
    grid-area: 1 / 1 / 6 / 2;
    padding: 20px 0px;
    background-color: #1f1d2b;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 15px 15px 0px;

    position: fixed;
    width: 104px;
}  

.v-sidebar__menu{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 50px;
}

.v-sidebar__logo {
    background-color: #ea966942;
    width: 56px;
    height: 56px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
}

.v-sidebar__logo img {
    width: 36px;
    height: 36px;
}

.v-sidebar__menu_logout {
    width: 56px;
    height: 56px;

    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    border-color: #ea7c6900;
    transition: border 0.2s ease-in-out;
}

.v-sidebar__menu_item {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    cursor: pointer;
    border-radius: 15px;
    border-color: #ea7c6900;
}

.v-sidebar__menu_item.active-item {
    background-color: #ea7c69;
    border-color: #ea7c69;
    z-index: 2;
    position: relative;
}

.v-sidebar__menu_item.active-item::before {
    content: url("../assets/icons/SidebarActive.svg");
    position: absolute;
    z-index: -1;
    left: -12px;
    top: -25px;
    width: 56px;
    height: 56px;
    border-radius: 15px;
}

.v-sidebar__menu_item.active-item::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    border-radius: 15px;
    background-color: #EA7C69;
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.32);
}

.v-sidebar__menu_item.active-item img {
    position: relative;
    z-index: 1;
}

</style>