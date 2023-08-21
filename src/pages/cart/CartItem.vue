<template>
    <div class="cart-item">
        <div class="cart-item__info">
            <div class="cart-item__info-description">
                <img class="cart-item__info-image" :src="'../src/assets/dishes/' + cart_item_data.image" alt="img"/>
                <div class="cart-item__info-container">
                    <p class="cart-item__info-name normal-medium">{{ cartItem.name }}</p>
                    <p class="cart-item__info-price small-medium"> $ {{ cartItem.price }}</p>
                </div>
                <div class="cart-item__quantity">
                    <p class="cart-item__quantity-text large-medium">{{ cartItem.quantity }}</p>
                </div>
                <p class="cart-item__total-price large-medium"> $ {{ calculateTotalPrice() }}</p>
            </div>
        </div>
        <div class="cart-item__note">
             <InputField 
                class="cart-item__note-input"
                type="text" 
                placeholder="Order Note..."/> 
            <div class="cart-item__note-button-delete" @click="deleteFromCart">
                <img src="@/assets/icons/Trash.svg" alt="" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import InputField from '@/fields/InputField.vue';
import { computed } from 'vue';
import { useStore } from '@/store/index.js';

const props = defineProps(['cart_item_data']);
const store = useStore();
const cartItem = computed(() => store.CART.find((item) => item.article === props.cart_item_data.article));

const calculateTotalPrice = () => {
    return (cartItem.value.price * cartItem.value.quantity).toFixed(2);
};

const deleteFromCart = () => {
    store.DELETE_FROM_CART(store.CART.indexOf(cartItem.value));
};
</script>

<script>
export default {
    name: 'CartItem',
    setup() {
        return {
            dish: cartItem.value,
            cartItem,
            calculateTotalPrice,
            deleteFromCart,
        };
    },
}
</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'

.cart-item 
    margin-top: 24px
    height: 106px

.cart-item__info-description
    display: flex
    justify-content: space-between
    align-items: center
    color: $white

.cart-item__info-container
    display: flex
    flex-direction: column
    justify-content: center
    width: 51px
    flex-grow: 2

.cart-item__info-image
    width: 40px
    height: 40px
    margin-right: 7px
    border-radius: 50%

.cart-item__info-description .normal-medium 
    color: $white
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    max-width: 140px

.cart-item__quantity
    border-radius: 8px
    background-color: $background-tertiary-main
    width: 48px
    height: 48px
    margin-right: 21px
    display: flex
    justify-content: center
    align-items: center
    padding: 14px 14px 12px 14px
    flex-shrink: 0

.cart-item__total-price
    color: $white

.cart-item__note
    display: flex
    justify-content: space-between
    margin-top: 10px

.cart-item__note-input
    flex-grow: 2
    border: none
    padding-left: 25px
    color: $white

.cart-item__note-input:focus
    outline: none

.cart-item__note-button-delete
    width: 48px
    height: 48px
    display: flex
    justify-content: center
    align-items: center
    padding: 14px 14px 12px 14px
    gap: 8px
    border: 1px solid $primary-main
    border-radius: 8px
    cursor: pointer
    transition: border-width 0.2s ease
    margin-left: 17px

.cart-item__note-button-delete:hover
    border-width: 3px

::v-deep input
    padding: 14px
    width: 100%
</style>