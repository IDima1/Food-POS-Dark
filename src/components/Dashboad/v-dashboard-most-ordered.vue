<template>
    <div class="v-dashboard-most-ordered">
        <div class="v-dashboard-most-ordered__header">
            <h2>Most Ordered</h2>
            <div>
                <select name="hedder-filter" id="">
                    <option value="1">Today</option>
                    <option value="1">Yesterday</option>
                    <option value="1">Last Week</option>
                </select>
            </div>
        </div>
        <div class="v-dashboard-most-ordered__content">
            <div class="v-dashboard-most-ordered__content-menu">
                <div v-for="dish in menuItems" 
                :key="dish.name" 
                class="v-dashboard-most-ordered__content-menu-dish">
                    <img :src="dish.image" :alt="dish.name">
                    <div>
                        <p class="v-dashboard-most-ordered__content-menu-dish-name">{{ dish.name }}</p>
                        <p class="v-dashboard-most-ordered__content-menu-dish-ordered">{{ dish.ordered }} dishes ordered</p>
                    </div>
                </div>
            </div>  
        </div>
        <button 
        class="v-dashboard-most-ordered__button"
        @click="onViewAll">View All</button>
    </div>
</template>
<script>
import DumplingImg from '../../assets/dishes/dumpling.svg'
export default {
    name: 'v-dashboard-most-ordered',
    data() {
        return {
            menuItems: [
                {
                name: 'Spicy seasoned seafood noodles',
                image: DumplingImg,
                ordered: 200,
                },
                {
                name: 'Salted pasta with mushroom sauce',
                image: DumplingImg,
                ordered: 120,
                },
                {
                name: 'Beef dumpling in hot and sour soup',
                image: DumplingImg,
                ordered: 80,
                },
            ],
        };
  },
    methods: {
        onViewAll(){
            console.log('View All')
        }
    }
}
</script>
<style>
.v-dashboard-most-ordered {
    grid-area: 1 / 3 / 4 / 4;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 8px;
    background:#1F1D2B;
    margin-top: 24px;
}

.v-dashboard-most-ordered__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 111px;
    color: #FFF;
    padding-bottom: 20px;
    border-bottom: 2px solid #393C49;
    width: 100%;
}

.v-dashboard-most-ordered__header h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
    white-space: nowrap;
}

.v-dashboard-most-ordered__header select {
    appearance: none;
    display: flex;
    height: 45px;
    width: 95px;
    padding: 14px;
    align-items: center;
    gap: 10px;
    color: #FFF;
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #1F1D2B;
    background: url(/src/assets/icons/arrow-ios-down.svg) no-repeat left 14px center;
    padding-left: 44px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    background-color: #2D303E;
}

.v-dashboard-most-ordered__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
}

.v-dashboard-most-ordered__content-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px; 
}

.v-dashboard-most-ordered__content-menu-dish {
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.v-dashboard-most-ordered__content-menu-dish img {
    width: 56px;
    height: 56px;
    border-radius: 50% ;
}

.v-dashboard-most-ordered__content-menu-dish div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.v-dashboard-most-ordered__content-menu-dish-name  {
    color:#E0E6E9;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; 
}

.v-dashboard-most-ordered__content-menu-dish-ordered {
    color: #ABBBC2;

    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.v-dashboard-most-ordered__button {
    display: flex;
    width: 100%;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 8px;
    border: 1px solid  #EA7C69;
    color: #EA7C69;
    background-color: #1F1D2B;

    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;

    cursor: pointer;
}

</style>