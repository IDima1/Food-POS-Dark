<template>
    <div class="v-dashboard-most-type-of-order">
        <div class="v-dashboard-most-type-of-order__header">
            <div class="v-dashboard-most-type-of-order__header__title">
                <h2>Most Type of Order</h2>
                <div>
                    <select name="hedder-filter" id="">
                        <option value="1">Today</option>
                        <option value="1">Yesterday</option>
                        <option value="1">Last Week</option>
                    </select>
                </div>
            </div>
            <div class="v-dashboard-most-type-of-order__header__devider"></div>
        </div>
        <div class="v-dashboard-most-type-of-order__chart">
            <div class="v-dashboard-most-type-of-order__chart">
                <img src="../../../public/Circle.svg" alt="">
            </div>

            <div class="v-dashboard-most-type-of-order__chart__info">
                <div class="v-dashboard-most-type-of-order__chart__info__group">
                    <img src="../../assets/icons/Ellipse-pink.svg" alt="">
                    <div class="v-dashboard-most-type-of-order__chart__info__group__frame">
                        <p class="header">Dine In</p>
                        <p class="customers">200 customers</p>
                    </div>
                </div>

                <div class="v-dashboard-most-type-of-order__chart__info__group">
                    <img src="../../assets/icons/Ellipse-yellow.svg" alt="">
                    <div class="v-dashboard-most-type-of-order__chart__info__group__frame">
                        <p class="header">To Go</p>
                        <p class="customers">122 customers</p>
                    </div>
                </div>

                <div class="v-dashboard-most-type-of-order__chart__info__group">
                    <img src="../../assets/icons/Ellipse-blue.svg" alt="">
                    <div class="v-dashboard-most-type-of-order__chart__info__group__frame">
                        <p class="header">Delivery</p>
                        <p class="customers">264 customers</p>
                    </div>
                </div>
            </div>


            <!-- <div class="v-dashboard-most-type-of-order__chart-circle">
                    <div class="all-pie">
                        <div
                            class="pie pie-blue"
                            style="--p: 80;--c:#65B0F6;--b:11px;--w:">
                        </div>
                        <div
                            class="pie pie-yellow"
                            style="--p: 40;--c:#FFB572;--b:11px;--w:">
                        </div>
                        <div
                            class="pie pie-pink"
                            style="--p: 60;--c:#FF7CA3;--b:11px;--w:">
                        </div>
                    </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-dashboard-most-type-of-order'
}
</script>
<style>
.v-dashboard-most-type-of-order {
    grid-area: 4 / 3 / 6 / 4;

    display: flex;
    padding: 24px 0px 40px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-bottom: 24px;

    border-radius: 8px;
    background:#1F1D2B;
} 

.v-dashboard-most-type-of-order__header__title {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 64px;
    background:#1F1D2B;
    color: #FFF;
    padding-bottom: 16px;
}

.v-dashboard-most-type-of-order__header h2 {
    color:#FFF;
    font-size: 20px;
    font-weight: 600;
    line-height: 140%;
}

.v-dashboard-most-type-of-order__header__title select {
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

.v-dashboard-most-type-of-order__header__devider {
    border: 1px solid #393C49;
    width: 100%;
}

.v-dashboard-most-type-of-order__chart {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 27px;
}
.v-dashboard-most-type-of-order__chart__info {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}

.v-dashboard-most-type-of-order__chart__info__group {
    display: flex;
    gap: 9px;
    align-items: start;
}

.v-dashboard-most-type-of-order__chart__info__group__frame {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

.header {
    color: var(--white, #FFF);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
}

.customers {
    color: var(--text-light, #ABBBC2);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
}

@property --p{
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
}

.all-pie {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
}

.all-pie .pie {
    position: absolute;
}

.pie {
    width:var(--w);
    aspect-ratio:1;
    position:relative;
    display:inline-grid;
    margin:5px;
    place-content:center;
}

.pie:before,
.pie:after {
    content:"";
    position:absolute;
    border-radius:50%;
}
.pie:before {
    inset:0;
    background:
        radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
        conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
            mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
}
.pie:after {
    inset:calc(50% - var(--b)/2);
    background:var(--c);
    transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
}
.animate {
    animation:p 1s .5s both;
}

.pie-blue {
    --w: 176px;
    --b: 22px;
    top: calc(50% - var(--w) / 2);
    left: calc(50% - var(--w) / 2);
}

.pie-yellow {
    --w: 153px;
    --b: 15px;
    top: calc(50% - var(--w) / 2);
    left: calc(50% - var(--w) / 2);
}

.pie-pink {
    --w: 130px;
    --b: 10px;
    top: calc(50% - var(--w) / 2);
    left: calc(50% - var(--w) / 2);
}

</style>