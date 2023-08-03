import { defineStore } from 'pinia';
import dishes from '@/data/dishes.js';

export const useStore = defineStore('main', {
    state: () => ({
        dishes: dishes,
        cart: [],
        showPayment: false,
    }),
    actions: {
        SET_DISHES_TO_STATE(dishes) {
            this.dishes = dishes;
        },
        SET_CART(dish) {
            const existingDish = this.cart.find((item) => item.article === dish.article);
            if (existingDish) {
                existingDish.quantity++;
            } else {
                this.cart.push({ ...dish, quantity: 1 });
            }
        },
        REMOVE_FROM_CART(index) {
            const dish = this.cart[index];
            if (dish.quantity > 1) {
                dish.quantity--;
            } else {
                this.cart.splice(index, 1);
            }
        },
        ADD_TO_CART(dish) {
            this.SET_CART(dish);
        },
        DELETE_FROM_CART(index) {
            this.REMOVE_FROM_CART(index);
        },
        OPEN_PAYMENT() {
            this.showPayment = true;
        },
        CLOSE_PAYMENT() {
            this.showPayment = false;
        },
    },
    getters: {
        DISHES() {
            return this.dishes;
        },
        CART() {
            return this.cart;
        },
        SHOW_PAYMENT() {
            return this.showPayment;
        },
    },
});