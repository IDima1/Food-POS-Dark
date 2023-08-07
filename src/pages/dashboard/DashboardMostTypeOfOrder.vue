<template>
    <div class="dashboard-most-type-of-order">
        <div class="dashboard-most-type-of-order__header">
            <div class="dashboard-most-type-of-order__header-title">
                <h2 class="dashboard-most-type-of-order__header-title-text">Most Type of Order</h2>
                <div>
                    <select class="dashboard-most-type-of-order__header-selector" name="header-filter" id="">
                        <option value="1">Today</option>
                        <option value="1">Yesterday</option>
                        <option value="1">Last Week</option>
                    </select>
                </div>
            </div>
            <div class="dashboard-most-type-of-order__header-devider"></div>
        </div>
        <div class="dashboard-most-type-of-order__content">
            <!-- Improve live pie chart -->
            <div class="dashboard-most-type-of-order__content">
                <img src="@/assets/Circle.svg" alt="">
            </div>

            <div class="dashboard-most-type-of-order__content-cells">
                <div class="dashboard-most-type-of-order__content-cells-cell">
                    <img class="dashboard-most-type-of-order__content-img" src="@/assets/icons/Ellipse-pink.svg" alt="">
                    <div class="dashboard-most-type-of-order__content-cells-cell-container">
                        <p class="normal-medium">Dine In</p>
                        <p class="small-regular">200 customers</p>
                    </div>
                </div>

                <div class="dashboard-most-type-of-order__content-cells-cell">
                    <img src="@/assets/icons/Ellipse-yellow.svg" alt="">
                    <div class="dashboard-most-type-of-order__content-cells-cell-container">
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-title normal-medium">To Go</p>
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-customers small-regular">122 customers</p>
                    </div>
                </div>

                <div class="dashboard-most-type-of-order__content-cells-cell">
                    <img src="@/assets/icons/Ellipse-blue.svg" alt="">
                    <div class="dashboard-most-type-of-order__content-cells-cell-container">
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-title normal-medium">Delivery</p>
                        <p class="dashboard-most-type-of-order__content-cells-cell-container-customers small-regular">264 customers</p>
                    </div>
                </div>
            </div>
            <!-- <div class="dashboard-most-type-of-order__content-circle">
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
    name: 'DashboardMostTypeOfOrder'
}
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.dashboard-most-type-of-order
    grid-area: 4 / 3 / 6 / 4

    display: flex
    padding: 24px 0px 40px 0px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 32px
    margin-bottom: 24px

    border-radius: 8px
    background: $darkBg2

.dashboard-most-type-of-order__header-title
    display: inline-flex
    justify-content: center
    align-items: center
    gap: 64px
    background: $darkBg2
    color: $white
    padding-bottom: 16px

.dashboard-most-type-of-order__header-selector
    display: flex
    height: 45px
    width: 95px
    padding: 14px
    padding-left: 44px
    background-color: $formBg

.dashboard-most-type-of-order__header-devider 
    border: 1px solid $darkLine
    width: 100%

.dashboard-most-type-of-order__content
    display: flex
    align-items: center
    flex-direction: row
    gap: 27px

.dashboard-most-type-of-order__content-cells
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 16px

.dashboard-most-type-of-order__content-cells-cell 
    display: flex
    gap: 9px
    align-items: start

.dashboard-most-type-of-order__content-cells-cell-container 
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 2px

.small-regular 
    color: $textLight


// @property --p{
//     syntax: '<number>';
//     inherits: true;
//     initial-value: 0;
// }

// .all-pie {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     position: relative;
// }

// .all-pie .pie {
//     position: absolute;
// }

// .pie {
//     width:var(--w);
//     aspect-ratio:1;
//     position:relative;
//     display:inline-grid;
//     margin:5px;
//     place-content:center;
// }

// .pie:before,
// .pie:after {
//     content:"";
//     position:absolute;
//     border-radius:50%;
// }
// .pie:before {
//     inset:0;
//     background:
//         radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
//         conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
//     -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
//             mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
// }
// .pie:after {
//     inset:calc(50% - var(--b)/2);
//     background:var(--c);
//     transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
// }
// .animate {
//     animation:p 1s .5s both;
// }

// .pie-blue {
//     --w: 176px;
//     --b: 22px;
//     top: calc(50% - var(--w) / 2);
//     left: calc(50% - var(--w) / 2);
// }

// .pie-yellow {
//     --w: 153px;
//     --b: 15px;
//     top: calc(50% - var(--w) / 2);
//     left: calc(50% - var(--w) / 2);
// }

// .pie-pink {
//     --w: 130px;
//     --b: 10px;
//     top: calc(50% - var(--w) / 2);
//     left: calc(50% - var(--w) / 2);
// }

</style>