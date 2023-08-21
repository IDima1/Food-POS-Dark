<template>
    <div class="cart__wrapper">
        <div class="cart-container" 
        :class="{ 'show-payment': showPayment }" 
        :style="{'transform': showPayment ? 'translateX(-409px)' : 'none'}">
            <div class="cart">
                <div class="cart__header" v-if="!showPayment">
                    <h2 class="cart__header-title">{{ $t('headers.orders') }} #34562</h2>
                    <div class="cart__header-selectors">
                        <p
                            class="cart__header-selector normal-semibold"
                            v-for="category in categories"
                            :key="category"
                            @click="selectCategory(category)"
                            :class="{ 'selected': selectedCategory === category }"
                        >{{ $t(`states.${category.toLowerCase().replace(/\s/g, '-')}`) }}</p>
                    </div>
                    <div class="cart__order-info">
                        <p class="cart__info-label large-semibold">{{ $t('cart.item') }}</p>
                        <p class="cart__info-label large-semibold">{{ $t('cart.qty') }}</p>
                        <p class="cart__info-label large-semibold">{{ $t('cart.price') }}</p>
                    </div>
                </div>
                <div class="cart__confirmation" v-else>
                    <img src="@/assets/icons/Back.svg" alt="">
                    <div class="cart__confirmation-header">
                        <div class="cart__confirmation-title">
                            <h1 class="cart__confirmation-title-text">{{ $t('headers.confirmation') }}</h1>
                            <p class="cart__confirmation-subtitle large-medium">{{ $t('headers.orders') }} #34562</p>
                        </div>
                        <ButtonField
                            class="cart__confirmation-button"
                            :img="AddSvg"    
                        />
                    </div>
                </div>
                <div class="cart__devider-content"></div>
                <div class="cart__content">
                    <div class="cart__content-cart-items">
                        <template v-if="cart_data">
                            <template v-if="isLoadedFailed">
                                <p class="large-semibold">Ooops... Something went wrong</p>
                            </template>
                            <template v-else-if="cart_data.length">
                                <CartItem
                                    v-for="(item, index) in cart_data"
                                    :key="item.article"
                                    :cart_item_data="item"
                                    @deleteFromCart="deleteFromCart(index)"
                                 />
                            </template>
                            <template v-else>
                                <div 
                                    class="cart__content-empty-message"
                                    v-if="cart_data.length === 0">
                                    <p class="cart__content-empty-message-text large-semibold">{{ $t('cart.empty-message') }}</p>
                                </div>
                            </template>
                        </template>
                        <template v-else>
                            <p>loading ...</p>
                        </template>
                    </div>
                    <div class="cart__devider"></div>
                    <div class="cart__total">
                        <div class="cart__total-disaccount">
                            <p class="cart__total-disaccount-text normal-regular">{{ $t('cart.discount') }}</p>
                            <p class="cart__total-disaccount-value large-medium">$ 0</p>
                        </div>
                        <div class="cart__total-subtotal">
                            <p class="cart__total-disaccount-text normal-regular">{{ $t('cart.subtotal') }}</p>
                            <p class="cart__total-disaccount-value large-medium">{{ calculateSubTotal() }}</p>
                        </div>
                    </div>
                </div>
                <ButtonField
                v-if="!showPayment"
                :label="$t('buttons.payment-button')" 
                @click="showPayment = true" 
                />
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
import AddSvg from '@/assets/icons/Add.svg'
import ButtonField from "@/fields/ButtonField.vue";
import CartItem from "@/pages/cart/CartItem.vue";
import ThePayment from "@/forms/ThePayment.vue";
import { computed, ref } from "vue";
import { useStore } from "@/store/index.js";
import { useI18n } from "vue-i18n";

const isLoadedFailed = ref(false);
const { t } = useI18n();
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
</script>
  
<style lang="sass" scoped>
@import '@/styles/app.sass'
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
    background-color: $background-secondary-main
    width: 409px
    position: fixed
    right: 0
    display: flex
    flex-direction: column
    justify-content: space-between
    overflow: hidden

.cart__header 
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 132px
    gap: 24px

.cart__confirmation 
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 16px

.cart__confirmation-header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%

.cart__confirmation-title 
    display: flex
    gap: 8px
    flex-direction: column

.large-medium p:first-child
    color: $text-secondary-main

.cart__confirmation-button
    align-items: flex-start
    gap: 10px
    border: none
    width: 48px
    height: 48px

.cart__header-selectors
    display: flex
    align-items: flex-start
    gap: 10px

.cart__header-selectors p
    color: $primary-main
    background-color: $background-primary-main
    border: 1px solid $border-primary-main
    border-radius: 5px
    padding: 8px
    margin-right: 10px

    cursor: pointer
    transition: border 0.2s ease

.cart__order-info
    display: flex
    justify-content: space-between
    color: $white

.cart__order-info p:first-child 
    flex-grow: 2

.cart__order-info p:last-child
    width: 75px
    text-align: right

.cart__devider 
    border: 1px solid $border-primary-main
    width: 100%

.cart__devider-content
    border-bottom: 1px solid $border-primary-main
    padding-top: 24px
    width: 100%

.cart__content 
    display: flex
    flex-direction: column
    flex-grow: 1
    position: relative
    margin-bottom: 42px
    height: calc(100% - 174px)
    overflow-y: auto

.cart__content-cart-items
    height: calc(100% - 100px)
    overflow-y: auto
    scrollbar-width: none

.cart__content-cart-items::-webkit-scrollbar
    width: 0

.cart__total 
    display: flex
    justify-content: space-between
    flex-direction: column
    gap: 16px
    position: absolute
    bottom: 0
    left: 0
    right: 0

.cart__total-disaccount, .cart__total-subtotal
    display: flex
    flex-direction: row
    justify-content: space-between

.large-medium 
    color: $text-secondary-main

.large-semibold 
    color: $white

.cart__order-payment 
    height: 48px
    background-color: $primary-main
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

.cart__order-payment:hover
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.30)
    
.cart__header-selectors p.selected 
    color: $white
    background-color: $primary-main

.cart__payment 
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

.cart-container.show-payment + .cart-overlay 
    display: block

.cart__content-empty-message-text
    color: $white
    text-align: center
    margin-top: 24px

</style>