<template>
    <div>
        <div class="v-cart-container"
            :class="{ 'show-payment': showPayment }"
            :style="{'transform': showPayment ? 'translateX(-409px)' : 'none'}">
            <div class = 'v-cart'>
                <div class="v-cart__header" v-if="!showPayment">
                    <h2>#Order 34562</h2>
                    <div class="v-cart__selectors">
                        <p
                            v-for="category in categories"
                            :key="category"
                            @click="selectCategory(category)"
                            :class="{ 'selected': selectedCategory === category }"
                        >{{ category }}</p>
                    </div>
                    <div class="v-cart__order-info">
                        <p>Item</p>
                        <p>Qty</p>
                        <p>Price</p>
                    </div>
                </div>

                <div class="v-cart__header__confirmation" v-else>
                    <img src="../../assets/icons/Back.svg" alt="">
                    <div class="v-cart__header__confirmation__header">
                        <div class="v-cart__header__confirmation__header__title">
                            <h1>Confirmation</h1>
                            <p>Orders #34562</p>
                        </div>
                        <button><img src="../../assets/icons/Add.svg" alt=""></button>
                    </div>
                    
                </div>
                <div class="v-cart__devider-content"></div>
                <div class="v-cart-content">
                    <div class="v-cart-items">
                        <v-cart-item
                        v-for="(item, index) in cart_data"
                        :key="item.article"
                        :cart_item_data="item"
                        @deleteFromCart="deleteFromCart(index)"
                        />
                    </div>
                    
                    <div class="v-cart__devider"></div>
                    <div class="v-cart-total">
                        <div class="v-cart-total__disaccount">
                            <p class="name">Disacount</p>
                            <p class="cost">$ 0</p>
                        </div>
                        <div class="v-cart-total__subtotal">
                            <p class="name">Sub Total</p>
                            <p class="cost">{{ calculateSubTotal }}</p>
                        </div>
                    </div>
                </div>
                <button 
                class="v-cart-order-payment" 
                @click="showPayment = true"
                v-if="!showPayment">
                Continue To Payment
                </button>
            </div>
            <div class="v-cart-payment">
                <v-payment 
                    v-show="showPayment" 
                    @closePayment="showPayment = false" 
                />
            </div>
        </div>
        <div class="v-cart-overlay" :class="{ 'show-overlay': showPayment }"></div>
    </div>
</template>

<script>
import vCartItem from './v-cart-item.vue';
import vPayment from './v-payment.vue';
import {mapActions} from 'vuex';

export default {
    name: 'v-cart',
    components: {
        vCartItem,
        vPayment
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            selectedCategory: 'Dine In',
            categories: ['Dine In', 'To Go', 'Delivery'],
            showPayment: false,
            showPaymentHeader: false,
        }
    },
    computed: {
        calculateSubTotal(){
            let subtotal = 0;
            this.cart_data.forEach((item) => {
                subtotal += item.price * item.quantity;
            });
            return `$ ${subtotal.toFixed(2)}`; 
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index);
        },
        selectCategory(category) {
            this.selectedCategory = category;
            console.log('Selected category:', category)
        },
    }
}
</script>

<style>
.v-cart-container {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    width: 406px;
    transition: transform 0.3s ease;
}

.v-cart{
    height: 100vh;
    padding: 24px;
    background-color: #1f1d2b;
    width: 406px;
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.v-cart__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    height: 132px;
    gap: 24px;
}

.v-cart__header__confirmation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}

.v-cart__header__confirmation__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.v-cart__header__confirmation__header__title {
    display: flex;
    gap: 8px;
    flex-direction: column;
}

.v-cart__header__confirmation__header__title h1 {
    color: var(--white, #FFF);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; 
}

.v-cart__header__confirmation__header__title p {
    color: var(--text-light, #ABBBC2);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}

.v-cart__header__confirmation button {
    display: inline-flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10px;

    border-radius: 8px;
    background:#EA7C69;
    border: none;
}

.v-cart__header__confirmation img {
    width: 20px;
    height: 20px;
}

.v-cart__selectors {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.v-cart__selectors p {
    color: #ea7c69;
    background-color: #1f1d2b;
    border: 1px solid #393c49;
    border-radius: 5px;
    padding: 8px;
    margin-right: 10px;

    cursor: pointer;
    transition: border 0.2s ease;
}

.v-cart__order-info {
    display: flex;
    justify-content: space-between;
}

.v-cart__order-info p:first-child {
    flex-grow: 2;
}

.v-cart__order-info p:last-child {
    width: 75px;
    text-align: right;
}

.v-cart__devider {
    border: 1px solid #393c49;
}

.v-cart__devider-content {
    border-bottom: 2px solid #393c49;
    padding-top: 24px;
    width: 100%;
}

.v-cart-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    margin-bottom: 42px;
    height: calc(100% - 174px);
    overflow-y: auto;
}

.v-cart-items {
    height: calc(100% - 100px);
    overflow-y: auto; 
    scrollbar-width: none;
}

.v-cart-items::-webkit-scrollbar {
    width: 0;
}

.v-cart-items::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0);
}

.v-cart-total {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.v-cart-total__disaccount, .v-cart-total__subtotal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.v-cart-total .name {
    color:#ABBBC2;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
}

.v-cart-total .cost {
    color:#FFF;
    text-align: right;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}

.v-cart-order-payment {
    height: 48px;
    background-color: #ea7c69;
    border-radius: 5px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #FAFAFA;

    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    padding: 14px;
    gap: 8px;
    cursor: pointer;

    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.30)
    }
}

.v-cart__selectors p.selected {
    color: white;
    background-color: #ea7c69;
}

.v-cart-payment {
    display: flex;
    justify-content: flex-start;
    margin-left: 406px;
}

.v-cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.70);
    z-index: 98; 
    display: none;
}

.v-cart-container.show-payment + .v-cart-overlay {
    display: block;
}

</style>