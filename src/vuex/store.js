import { createStore } from 'vuex';
import dishes from '../data/dishes';

let store = createStore({
    state: {
        dishes: dishes,
        cart: []
    },
    mutations: {
        SET_DISHES_TO_STATE: (state, dishes) => {
           state.dishes = dishes;
        },
        SET_CART: (state, dish) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function(item) {
                    if(item.article === dish.article){
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if(!isProductExists) {
                    state.cart.push(dish);
                }
            } else {
                state.cart.push(dish);
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            if (state.cart[index].quantity > 1) {
              state.cart[index].quantity--;
            } else {
              state.cart.splice(index, 1);
            }
        }
    },
    actions: {
        ADD_TO_CART({commit}, dish) {
            commit('SET_CART', dish);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        }
    },
    getters: {
        DISHES(state) {
            return state.dishes;
        },
        CART(state) {
            return state.cart;
        }
    },
    
});

export default store;