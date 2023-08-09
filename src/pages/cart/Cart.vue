<template>
    <div class="cart__wrapper">
        <div class="cart-container" 
        :class="{ 'show-payment': showPayment }" 
        :style="{'transform': showPayment ? 'translateX(-409px)' : 'none'}">
            <div class="cart">
                <div class="cart__header" v-if="!showPayment">
                    <h2 class="cart__header-title">#Order 34562</h2>
                    <div class="cart__header-selectors">
                        <p
                            class="cart__header-selector normal-semibold"
                            v-for="category in categories"
                            :key="category"
                            @click="selectCategory(category)"
                            :class="{ 'selected': selectedCategory === category }" 
                        >{{ category }}</p>
                    </div>
                    <div class="cart__order-info">
                        <p class="cart__info-label large-semibold">Item</p>
                        <p class="cart__info-label large-semibold">Qty</p>
                        <p class="cart__info-label large-semibold">Price</p>
                    </div>
                </div>
                <div class="cart__confirmation" v-else>
                    <img src="@/assets/icons/Back.svg" alt="">
                    <div class="cart__confirmation-header">
                        <div class="cart__confirmation-title">
                            <h1 class="cart__confirmation-title-text">Confirmation</h1>
                            <p class="cart__confirmation-subtitle large-medium">Orders #34562</p>
                        </div>
                        <button class="cart__confirmation-button">
                            <img class="cart__confirmation-button-img" src="@/assets/icons/Add.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="cart__devider-content"></div>
                <div class="cart__content">
                    <div class="cart__content-cart-items">
                        <div 
                            class="cart__content-empty-message"
                            v-if="cartItems.length === 0">
                            <p class="cart__content-empty-message-text large-semibold">Cart is empty.</p>
                        </div>
                        <CartItem
                            v-for="(item, index) in cartItems"
                            :key="item.article"
                            :cart_item_data="item"
                            @deleteFromCart="deleteFromCart(index)"
                        />
                    </div>
                    <div class="cart__devider"></div>
                    <div class="cart__total">
                        <div class="cart__total-disaccount">
                            <p class="cart__total-disaccount-text normal-regular">Disacount</p>
                            <p class="cart__total-disaccount-value large-medium">$ 0</p>
                        </div>
                        <div class="cart__total-subtotal">
                            <p class="cart__total-disaccount-text normal-regular">Sub Total</p>
                            <p class="cart__total-disaccount-value large-medium">{{ calculateSubTotal() }}</p>
                        </div>
                    </div>
                </div>
                <button class="cart__order-payment" 
                    @click="showPayment = true" 
                    v-if="!showPayment">
                    <p class="cart__order-payment-button-text normal-semibold">Continue To Payment</p>
                </button>
            </div>
            <div class="cart__payment">
                <ThePayment 
                    v-show="showPayment" 
                    @closePayment="showPayment" 
                />
            </div>
        </div>
        <div class="cart-overlay" :class="{ 'show-overlay': showPayment }"></div>
    </div>
</template>
  
<script setup>
import CartItem from "@/pages/cart/CartItem.vue";
import ThePayment from "@/common/ThePayment.vue";
import { defineEmits, defineProps, computed, ref } from "vue";
import { useStore } from "@/pinia/pinia.js";

const store = useStore();
const props = defineProps(['cart_data']);
const cartItems = props.cart_data;
const categories = ["Dine In", "To Go", "Delivery"];
const selectedCategory = ref("Dine In");

const showPayment = computed({
    get: () => store.SHOW_PAYMENT,
    set: (value) => store.OPEN_PAYMENT(value),
});

const calculateSubTotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
    });
    return `$ ${subtotal.toFixed(2)}`;
};

const deleteFromCart = (index) => {
    store.DELETE_FROM_CART(index);
};

const selectCategory = (category) => {
    selectedCategory.value = category;
    console.log("Selected category:", category);
};

const showPaymentModal = () => {
    store.OPEN_PAYMENT();
};

const closePaymentModal = () => {
    store.CLOSE_PAYMENT();
};

const emit = defineEmits();

</script>

<script>
export default {
    components: {
        CartItem,
        ThePayment,
    }
}
</script>
  
<style lang="sass" scoped>
@import '@/styles/variables.sass'
.cart-container 
    position: fixed
    top: 0
    right: 0
    z-index: 100
    width: 406px
    transition: transform 0.3s ease

    .cart
        height: 100vh
        padding: 24px
        background-color: $darkBg2
        width: 406px
        position: fixed
        right: 0
        display: flex
        flex-direction: column
        justify-content: space-between
        overflow: hidden

        &__header 
            display: flex
            flex-direction: column
            justify-content: space-between
            height: 132px
            gap: 24px

        &__confirmation 
            display: flex
            flex-direction: column
            align-items: flex-start
            gap: 16px

            &-header
                display: flex
                justify-content: space-between
                align-items: center
                width: 100%

            &-title 
                display: flex
                gap: 8px
                flex-direction: column

            .large-medium
                color: $textLight

            &-button
                display: inline-flex
                padding: 14px
                align-items: flex-start
                gap: 10px
                border-radius: 8px
                background: $primary
                border: none

                &-img
                    width: 20px
                    height: 20px

        &__header-selectors
            display: flex
            align-items: flex-start
            gap: 10px

            p
                color: $primary
                background-color: $darkBg1
                border: 1px solid $darkLine
                border-radius: 5px
                padding: 8px
                margin-right: 10px

                cursor: pointer
                transition: border 0.2s ease

            p.selected 
                color: $white
                background-color: $primary

        &__order-info
            display: flex
            justify-content: space-between
            color: $white

            p:first-child 
                flex-grow: 2

            p:last-child
                width: 75px
                text-align: right

        &__devider 
            border: 1px solid $darkLine
            width: 100%

        &__devider-content
            border-bottom: 1px solid $darkLine
            padding-top: 24px
            width: 100%

        &__content 
            display: flex
            flex-direction: column
            flex-grow: 1
            position: relative
            margin-bottom: 42px
            height: calc(100% - 174px)
            overflow-y: auto

            &-cart-items
                height: calc(100% - 100px)
                overflow-y: auto
                scrollbar-width: none

                &::-webkit-scrollbar
                    width: 0

        &__total 
            display: flex
            justify-content: space-between
            flex-direction: column
            gap: 16px
            position: absolute
            bottom: 0
            left: 0
            right: 0

            &-disaccount, &-subtotal
                display: flex
                flex-direction: row
                justify-content: space-between

            .large-medium
                color: $white

            .normal-regular
                color: $textLight 

        &__order-payment 
            height: 48px
            background-color: $primary
            border-radius: 5px
            border: none
            display: flex
            justify-content: center
            align-items: center
            color: $base
            padding: 14px
            gap: 8px
            cursor: pointer
            transition: box-shadow 0.2s ease

            &:hover
                box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.30)

        &__payment 
            display: flex
            justify-content: flex-start
            margin-left: 406px

    .cart-overlay 
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: rgba(0, 0, 0, 0.70)
        z-index: 98
        display: none

    .cart-container.show-payment, .cart-overlay 
        display: block

    .cart__content-empty-message-text
        color: $white
        text-align: center
        margin-top: 24px

</style>
