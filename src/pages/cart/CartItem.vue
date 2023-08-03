<template>
    <div class="v-cart-item">
        <div class="v-cart-item__info">
            <div class="v-cart-item__info-description">
                <img class="v-cart-item__info-image" v-bind:src="'../src/assets/dishes/' + cart_item_data.image" alt="img"/>
                <div class="v-cart-item__info-description__name-price">
                    <h4>{{ dish.name }}</h4>
                    <p class="v-cart-item__price"> $ {{ dish.price }}</p>
                </div>
                <div class="v-cart-item__quantity">{{ cartItem.quantity }}</div>
                <p class="v-cart-item__total-price"> $ {{ calculateTotalPrice() }}</p>
            </div>
        </div>
        <div class="v-cart-item__info-note">
            <input type="text" placeholder="Order Note..." />
            <div @click="deleteFromCart">
                <img src="@/assets/icons/Trash.svg" alt="" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import { useStore } from '@/pinia/pinia.js';

export default defineComponent({
    name: 'CartItem',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    setup(props) {
        const store = useStore();
        const cartItem = store.CART.find((item) => item.article === props.cart_item_data.article);

        const calculateTotalPrice = () => {
            return (cartItem.price * cartItem.quantity).toFixed(2);
        };

        const deleteFromCart = () => {
            store.DELETE_FROM_CART(store.CART.indexOf(cartItem));
        };

        return {
            dish: cartItem,
            cartItem,
            calculateTotalPrice,
            deleteFromCart,
        };
    },
});
</script>

<style scoped>
.v-cart-item {
    margin-top: 24px;
    height: 106px;
}

.v-cart-item__info-description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.v-cart-item__info-description__name-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 51px;
    flex-grow: 2;
}

.v-cart-item__info-description img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
    margin-right: 7px;
}

.v-cart-item__info-description h4 {
    color: var(--white, #FFF);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
}

.v-cart-item__info-description h4:last-child {
    width: 65px;
    text-align: right;
}

.v-cart-item__quantity {
    border-radius: 8px;
    background-color: #2D303E;
    width: 48px;
    height: 48px;
    margin-right: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 14px 12px 14px;

    flex-shrink: 0;

    color:#FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}

.v-cart-item__price {
    color:#ABBBC2;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
}

.v-cart-item__total-price {
    color: #FFF;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}

.v-cart-item__info-note {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.v-cart-item__info-note input {
    flex-grow: 2;
    border-radius: 5px;
    background-color: #2d303e;
    border: none;
    padding-left: 25px;
    color: white;
    height: 48px;
}

.v-cart-item__info-note input::placeholder {
    font-family: 'Barlow'
}

.v-cart-item__info-note input:focus {
    outline: none;
} 

.v-cart-item__info-note div {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #EA7C69;
    border-radius: 8px;

    cursor: pointer;
    transition: border-width 0.2s ease;

    margin-left: 17px;

}
.v-cart-item__info-note div:hover {
    border-width: 3px;
}
</style>