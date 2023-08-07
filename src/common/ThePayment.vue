<template>
    <div class="payment">
        <div class="payment__wrapper">
            <div class="payment__content">
                <div class="payment__content-header">
                    <h1 class="payment__content-header-title">Payment</h1>
                    <p class="payment__content-header-subtitle">3 payment method available</p>
                </div>
                <div class="payment__content-devider"></div>
                <div class="payment__content-payment-method">
                    <h2 class="payment__content-payment-method-title">Payment Method</h2>
                    <div class="payment__content-payment-method-tabs">
                        <div class="payment__content-payment-method-tab"
                            :class="{selected: selectedPaymentMethod === 'Credit Card'}"
                            @click="selectPaymentMethod('Credit Card')">
                            <img src="@/assets/icons/Card.svg" alt="">
                            <p class="payment__content-payment-method-tab-text">Credit Card</p>
                        </div>
                        <div class="payment__content-payment-method-tab"
                            :class="{selected: selectedPaymentMethod === 'Paypal'}"
                            @click="selectPaymentMethod('Paypal')">
                            <img src="@/assets/icons/Paypal.svg" alt="">
                            <p class="payment__content-payment-method-tab-text">Paypal</p>
                        </div>
                        <div class="payment__content-payment-method-tab"
                            :class="{selected: selectedPaymentMethod === 'Cash'}"
                            @click="selectPaymentMethod('Cash')">
                            <img src="@/assets/icons/Wallet.svg" alt="">
                            <p class="payment__content-payment-method-tab-text">Cash</p>
                        </div>
                    </div>
                    <div class="payment__content-payment-method-forms">
                        <div class="payment__content-payment-method-forms-holder-name">
                            <p class=" payment__content-payment-method-forms-label normal-medium">Cardholder Name</p>
                            <input class="payment__content-payment-method-forms-input-name" placeholder="Levi Ackerman"/>
                            <p class="payment__content-payment-method-forms-label normal-medium ">Card Number</p>
                            <input class="payment__content-payment-method-forms-input-name" placeholder="2584 1421 0897 1244"/>
                        </div>  
                        <div class="payment__content-payment-method-forms-data-cvv">
                            <div class="payment__content-payment-method-forms-data">
                                <p class="payment__content-payment-method-forms-label normal-medium">Expiration Date</p>
                                <input class="payment__content-payment-method-forms-input-data-cvv normal-medium" placeholder="02/2022"/>
                            </div>
                            <div class="payment__content-payment-method-forms-cvv">
                                <p class="payment__content-payment-method-forms-label normal-medium">CVV</p>
                                <input 
                                    class="payment__content-payment-method-forms-input-data-cvv" 
                                    placeholder="● ● ●"
                                    type="password"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="payment__payment-method-devider"></div>
                    <div class="payment__payment-method-form">
                        <div class="payment__payment-method-form-order-type">
                            <p class="payment__content-payment-method-forms-label normal-medium">Order Type</p>
                            <select class="payment__payment-method-form-select" name="order-type" id="">
                                <option value="1"><p>Dine In</p></option>
                                <option value="2">To Go</option>
                                <option value="3">Delivery</option>
                            </select>
                        </div>
                        <div class="payment__payment-method-form-table">
                            <p class="payment__content-payment-method-forms-label normal-medium">Table no.</p>
                            <input class="payment__content-payment-method-forms-input" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="payment__buttons">
                <button 
                    class="payment__buttons-cancel" 
                    @click="closePayment">
                    <p class="payment__buttons-confirm-text">Cancel</p>
                </button>
                <button 
                    class="payment__buttons-confirm" 
                    @click="confirmPayment">
                    <p class="payment__buttons-confirm-text">Confirm Payment</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from '@/pinia/pinia.js';

export default defineComponent({
    name: "Payment",
    setup() {
        const store = useStore();
        const selectedPaymentMethod = ref(null);

        const selectPaymentMethod = (method) => {
            selectedPaymentMethod.value = method;
        };

        const closePayment = () => {
            store.CLOSE_PAYMENT();
        };

        const confirmPayment = () => {
            console.log("Payment was successful");
        };

        return {
            selectedPaymentMethod,
            selectPaymentMethod,
            closePayment,
            confirmPayment,
        };
    },
});
</script>

<style lang="sass" scoped>
@import '@/styles/variables.sass'
.payment 
    display: inline-flex
    padding: 24px
    flex-direction: column
    align-items: flex-start
    gap: 24px

    background-color: $darkBg2
    width: 405px
    height: 100vh
    border-left: 1px solid $darkLine
.payment__content 
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 24px

.payment__wrapper 
    position: relative
    display: flex
    flex-direction: column
    flex-grow: 1
    overflow-y: auto
    min-height: 300px

.payment__content-header 
    display: flex
    flex-direction: column
    justify-content: center
    text-align: left
    width: 100%
    gap: 8px
    padding-top: 36px

.payment__content-header-subtitle
    color: #ABBBC2

.payment__content-devider 
    border: 1px solid $darkLine
    width: 100%

.payment__content-payment-method 
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 16px

.payment__content-payment-method-tabs 
    display: flex
    align-items: flex-start
    gap: 8px

.payment__content-payment-method-tab 
    display: flex
    width: 101px
    height: 64px
    padding: 10px 16px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 2px
    border-radius: 8px
    border: 1px solid $darkLine
    background: none
    cursor: pointer
    color: $white
    white-space: nowrap

.payment__content-payment-method-tab.selected 
    border: 1px solid $textLight
    background: $darkBg1
    position: relative

.payment__content-payment-method-tab.selected::after 
    content: url('@/assets/icons/Mask.svg')
    position: absolute
    top: 6px
    right: 6px
    width: 13px
    height: 13px
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center

.payment__content-payment-method-forms 
    display: flex
    flex-direction: column
    align-items: flex-start

.payment__content-payment-method-forms-input-name
    display: flex
    width: 357px
    padding: 14px
    align-items: flex-start
    gap: 8px
    margin: 8px 0px 16px 0px
    border-radius: 8px

.payment__content-payment-method-forms-data-cvv
    display: inline-flex
    align-items: flex-start
    gap: 13px

.payment__content-payment-method-forms-input-data-cvv
    display: flex
    align-items: flex-start
    width: 172px
    padding: 14px
    gap: 8px
    margin-top: 8px
    border-radius: 8px

.payment__payment-method-devider 
    border: 1px solid $darkLine
    width: 100%

.payment__payment-method-form 
    display: flex
    align-items: flex-start
    gap: 13px

.payment__payment-method-form-select
    display: flex
    width: 172px
    margin-top: 10px
    padding-left: 44px
    background-color: $formBg

.payment__content-payment-method-forms-input
    display: flex
    align-items: flex-start
    width: 172px
    padding: 14px
    gap: 8px
    margin-top: 10px
    border-radius: 8px

.payment__buttons 
    position: absolute
    bottom: 0
    left: 0
    right: 0
    display: flex
    justify-content: center
    gap: 8px

.payment__buttons-cancel, .payment__buttons-confirm 
    display: flex
    width: 175px
    padding: 14px
    justify-content: center
    align-items: center
    gap: 8px
    flex: 1
    border-radius: 8px
    border: 1px solid $primary
    background-color: transparent
    cursor: pointer

.payment__buttons-confirm 
    background: $primary
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.40)
    color: $base

.payment__buttons-cancel 
    color: $primary

</style>