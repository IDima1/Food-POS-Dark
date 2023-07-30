<template>
    <div class="v-payment">
        <div class="v-cart-content-wrapper">
            <div class="v-payment__content">
                <div class="v-payment__content__header">
                    <h1>Payment</h1>
                    <p>3 payment method available</p>
                </div>
                <div class="v-payment__content__devider"></div>
                <div class="v-payment__content__payment-method">
                    <h2>Payment Method</h2>
                    <div class="v-payment__content__payment-method__tabs">
                        <div class="v-payment__content__payment-method__tabs__data"
                            :class="{selected: selectedPaymentMethod === 'Credit Card'}"
                            @click="selectPaymentMethod('Credit Card')">
                            <img src="../../assets/icons/Card.svg" alt="">
                            Credit Card
                    </div>
                        <div class="v-payment__content__payment-method__tabs__data"
                            :class="{selected: selectedPaymentMethod === 'Paypal'}"
                            @click="selectPaymentMethod('Paypal')">
                            <img src="../../assets/icons/Paypal.svg" alt="">
                            Paypal
                        </div>
                        <div class="v-payment__content__payment-method__tabs__data"
                            :class="{selected: selectedPaymentMethod === 'Cash'}"
                            @click="selectPaymentMethod('Cash')">
                            <img src="../../assets/icons/Wallet.svg" alt="">
                            Cash
                        </div>
                    </div>
                    <div class="v-payment__content__payment-method__forms">
                        <div class="v-payment__content__payment-method__forms__holder-name">
                            <p>Cardholder Name</p>
                            <input class="v-payment__payment-method__forms__card-holder" placeholder="Levi Ackerman"/>
                            <p>Card Number</p>
                            <input class="v-payment__payment-method__forms__card-number" placeholder="2584 1421 0897 1244"/>
                        </div>  
                        <div class="v-payment__content__payment-method__forms__data-cvv">
                            <div>
                                <p>Expiration Date</p>
                                <input class="v-payment__payment-method__forms__card-date" placeholder="02/2022"/>
                            </div>
                            <div>
                                <p>CVV</p>
                                <input 
                                class="v-payment__payment-method__forms__card-cvv" 
                                placeholder="● ● ●"
                                type="password"/>
                            </div>
                        </div>
                    </div>
                    <div class="v-payment__payment-method__devider"></div>
                    <div class="v-payment__payment-method__form">
                        <div>
                            <p>Order Type</p>
                            <select name="order-type" id="">
                                <option value="1"><p>Dine In</p></option>
                                <option value="2">To Go</option>
                                <option value="3">Delivery</option>
                            </select>
                        </div>
                        <div>
                            <p>Table no.</p>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="v-payment__buttons">
                <button class="v-payment__buttons__cancel" @click="closePayment">Cancel</button>
                <button class="v-payment__buttons__confirm" @click="confirmPayment">Confirm Payment</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-payment',
    data() {
        return {
            selectedPaymentMethod: null
        };
    },
    methods: {
        selectPaymentMethod(method) {
            this.selectedPaymentMethod = method;
        },
        closePayment(){
            this.$emit('closePayment')
        },
        confirmPayment(){
            this.closePayment();
            console.log('Payment was successful')
        }
    }
}
</script>
<style scoped>
.v-payment {
    display: inline-flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    background:#1F1D2B; 
    width: 405px;
    height: 100vh;
    border-left: 1px solid #393C49;
}
.v-payment__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px; 
}

.v-cart-content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    min-height: 300px;
}
.v-payment__content__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 100%;
    gap: 8px;
    padding-top: 36px;
}

.v-payment__content__header h1 {
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

.v-payment__content__header p {
    color:#ABBBC2;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
}

.v-payment__content__devider {
    border: 1px solid #393C49;
    width: 100%;
}

.v-payment__content__payment-method {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}

.v-payment__content__payment-method h2 {
    color: #FFF;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

.v-payment__content__payment-method__tabs {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.v-payment__content__payment-method__tabs__data {
    display: flex;
    width: 101px;
    height: 64px;
    padding: 10px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;

    border-radius: 8px;
    border: 1px solid #393C49;
    background: none;

    cursor: pointer;
    color: #FFF;

    white-space: nowrap;
}

.v-payment__content__payment-method__tabs__data.selected {
    border: 1px solid #ABBBC2;
    background: #252836;
    position: relative;
}

.v-payment__content__payment-method__tabs__data.selected::after {
    content: url('../../assets/icons/Mask.svg');
    position: absolute;
    top: 6px;
    right: 6px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-payment__content__payment-method__forms {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--white, #FFF);
}

.v-payment__content__payment-method__forms__holder-name input {
    display: flex;
    width: 357px;
    padding: 14px;
    align-items: flex-start;
    gap: 8px;
    margin: 8px 0px 16px 0px;
    border-radius: 8px;
    border: 1px solid #393C49;
    background:#2D303E;
    color: #E0E6E9;
    font-family: Barlow;
}

.v-payment__content__payment-method__forms__data-cvv {
    display: inline-flex;
    align-items: flex-start;
    gap: 13px;
}

.v-payment__content__payment-method__forms__data-cvv input {
    display: flex;
    width: 172px;
    padding: 14px;
    align-items: flex-start;
    gap: 8px;
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #2D303E;
    color: #E0E6E9;
    font-family: Barlow;
}

.v-payment__payment-method__devider {
    border: 1px solid #393C49;
    width: 100%;
}

.v-payment__payment-method__form {
    display: flex;
    align-items: flex-start;
    gap: 13px;
    color: #E0E6E9;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.v-payment__payment-method__form select {
    appearance: none;
    display: flex;
    width: 172px;
    padding: 14px;
    align-items: center;
    gap: 10px;
    color: #E0E6E9;
    margin-top: 10px;

    border-radius: 8px;
    border: 1px solid #393C49;

    background: #1F1D2B;
    background: url('../../assets/icons/arrow-ios-down.svg') no-repeat left 14px center;
    padding-left: 44px;

    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    background-color: #2D303E;
}

.v-payment__payment-method__form input {
    display: flex;
    width: 172px;
    padding: 14px;
    align-items: flex-start;
    gap: 8px;
    margin-top: 10px;

    border-radius: 8px;
    border: 1px solid #393C49;
    background: #2D303E;
    color: #E0E6E9;
    font-family: 'Barlow';
}

.v-payment__buttons {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.v-payment__buttons__cancel, .v-payment__buttons__confirm {
    display: flex;
    width: 175px;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1;

    border-radius: 8px;
    border: 1px solid#EA7C69;

    background-color: transparent;
    cursor: pointer;

}
.v-payment__buttons__confirm {
    background: #EA7C69;
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.40);
    color: #FAFAFA;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

.v-payment__buttons__cancel {
    color:#EA7C69;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
}

</style>