import { defineStore } from 'pinia';
import axios from 'axios'

export const useStore = defineStore('main', {
    state: () => ({
        dishes: null,
        reports: null,
        mostOrderedDishes: null,
        cards: [],
        legends: null,
        cart: [],
        showPayment: false,
    }),
    actions: {
        SET_DISHES_TO_STATE(dishes) {
            this.dishes = dishes;
        },
        SET_REPORTS_TO_STATE(reports) {
            this.reports = reports;
        },
        SET_MOSTORDERED_TO_STATE(mostOrderedDishes){
            this.mostOrderedDishes = mostOrderedDishes;
        },
        SET_CARDS_TO_STATE(cards) {
            this.cards = cards;
        },
        SET_LEGENDS_TO_STATE(legends) {
            this.legends = legends;
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
        async GET_DISHES_FROM_MOCKOON(isLoadedRef, isLoadFailedRef) {
            try {
                const response = await axios.get('http://localhost:3000/dishes');
                const dishes = response.data;
                this.SET_DISHES_TO_STATE(dishes);
            } catch (error) {
                isLoadFailedRef.value = true;
                console.error(error);
            }
            isLoadedRef.value = true;
        },
        async GET_ORDER_REPORTS_FROM_MOCKOON(isLoadedRef, isLoadFailedRef){
            try {
                const response = await axios.get('http://localhost:3000/reports');
                const reports = response.data;
                this.SET_REPORTS_TO_STATE(reports);
            } catch (error) {
                isLoadFailedRef.value = true;
                console.error(error);
            }
            isLoadedRef.value = true;
        },
        async GET_MOST_ORDERED_FROM_MOCKOON(isLoadedRef, isLoadFailedRef) {
            try {
                const response = await axios.get('http://localhost:3000/most-ordered');
                const mostOrderedDishes = response.data;
                this.SET_MOSTORDERED_TO_STATE(mostOrderedDishes);
            } catch (error) {
                isLoadFailedRef.value = true;
                console.error(error);
            }
            isLoadedRef.value = true;
        }, 
        async GET_ORDER_CARDS_FROM_MOCKOON(isLoadedRef, isLoadFailedRef) {
            try {
                const response = await axios.get('http://localhost:3000/cards');
                const cards = response.data;
                this.SET_CARDS_TO_STATE(cards);
            } catch (error) {
                isLoadFailedRef.value = true;
                console.error(error);
            }
            isLoadedRef.value = true;
        },
        async GET_LEGEND_CHART_FROM_MOCKOON(isLoadedRef, isLoadFailedRef) {
            try {
                const response = await axios.get('http://localhost:3000/legend');
                const legends = response.data;
                this.SET_LEGENDS_TO_STATE(legends);
            } catch (error) {
                isLoadFailedRef.value = true;
                console.error(error);
            }
            isLoadedRef.value = true;
        }
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
        CARDS() {
            return this.cards;
        }
    },
});