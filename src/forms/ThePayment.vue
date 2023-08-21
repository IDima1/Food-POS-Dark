<template>
    <form class="payment-form" @submit.prevent="submit">
        <div class="payment">
            <div class="payment__wrapper">
                <div class="payment__content">
                    <div class="payment__content-header">
                        <h1 class="payment__content-title">{{ $t('headers.payment')}}</h1>
                        <p class="payment__content-subtitle"> 3 {{ $t('payment-container.methods-available')}}</p>
                    </div>
                    <div class="payment__content-devider"></div>
                    <div class="payment__content-payment">
                        <h2 class="payment__content-title">{{ $t('payment-container.method-payment')}}</h2>
                        <div class="payment__content-tabs">
                            <div class="payment__content-tab"
                                :class="{selected: selectedPaymentMethod === 'Credit Card'}"
                                @click="selectPaymentMethod('Credit Card')">
                                <img src="@/assets/icons/Card.svg" alt="">
                                <p class="payment__content-text">{{ $t('payment-container.method-card')}}</p>
                            </div>
                            <div class="payment__content-tab"
                                :class="{selected: selectedPaymentMethod === 'Paypal'}"
                                @click="selectPaymentMethod('Paypal')">
                                <img src="@/assets/icons/Paypal.svg" alt="">
                                <p class="payment__content-text">{{ $t('payment-container.method-paypal')}}</p>
                            </div>
                            <div class="payment__content-tab"
                                :class="{selected: selectedPaymentMethod === 'Cash'}"
                                @click="selectPaymentMethod('Cash')">
                                <img src="@/assets/icons/Wallet.svg" alt="">
                                <p class="payment__content-text">{{ $t('payment-container.method-cash')}}</p>
                            </div>
                        </div>
                        <div class="payment__content-forms">
                            <div class="payment__content-forms-holder">
                                <div>
                                <p class="payment__content-forms-label normal-medium">{{ $t('payment-container.data-name')}}</p>
                                <InputField
                                    v-model="payment.holdername"
                                    :errorMessage="getFieldErrorMessage('holdername')"
                                    :placeholder="$t('placeholders.payment-name')"
                                    class="payment__content-forms-input-name"
                                /> 
                                </div>
                                <div>
                                <p class="payment__content-forms-label normal-medium ">{{ $t('payment-container.data-number')}}</p>
                                <InputField
                                    v-model="payment.cardnumber"
                                    :errorMessage="getFieldErrorMessage('cardnumber')"
                                    :placeholder="$t('placeholders.payment-number')"
                                    class="payment__content-forms-input-name"
                                    :minLength="16"
                                    :maxLength="16"
                                />
                                </div>  
                            </div>  
                            <div class="payment__content-forms-data-cvv">
                                <div class="payment__content-forms-data">
                                    <p class="payment__content-forms-label normal-medium">{{ $t('payment-container.data-date')}}</p>
                                    <InputField
                                        type="text"
                                        v-model="payment.date"
                                        :errorMessage="getFieldErrorMessage('date')"
                                        :placeholder="$t('placeholders.payment-date')"
                                        class="payment__content-forms-input-data-cvv normal-medium"
                                        :minLength="4"
                                        :maxLength="4"
                                    />
                                </div>
                                <div class="payment__content-forms-cvv">
                                    <p class="payment__content-forms-label normal-medium">{{ $t('payment-container.data-cvv')}}</p>
                                    <InputField
                                        v-model="payment.cvv"
                                        :errorMessage="getFieldErrorMessage('cvv')"
                                        type="password"
                                        :placeholder="$t('placeholders.payment-cvv')" 
                                        class="payment__content-forms-input-data-cvv" 
                                        :minLength="3"
                                        :maxLength="3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="payment__payment-method-devider"></div>
                        <div class="payment__payment-method-form">
                            <div class="payment__payment-method-form-order-type">
                                <p class="payment__content-forms-label normal-medium">{{ $t('payment-container.data-type')}}</p>
                                <SelectField :options="selectOptions" :initialValue="selectedOption" />
                            </div>
                            <div class="payment__payment-method-form-table">
                                <p class="payment__content-forms-label normal-medium">{{ $t('payment-container.data-table')}}</p>
                                <InputField
                                    v-model="payment.table"
                                    :errorMessage="getFieldErrorMessage('table')"
                                    type="text"
                                    class="payment__content-forms-input" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment__buttons">
                    <ButtonField 
                        :label="$t('buttons.cancel-button')"
                        class="payment__cancel" 
                        @click="closePayment"
                    />
                    <ButtonField 
                        :label="$t('buttons.confirm-button')"
                        class="payment__confirm" 
                        @click="confirmPayment"
                    />
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import InputField from '@/fields/InputField.vue';
import ButtonField from '@/fields/ButtonField.vue'
import SelectField from '@/fields/SelectField.vue';

import { reactive, ref, defineExpose } from 'vue';
import { bus, BUS_EVENTS, required, alpha, numeric, minLength , maxLength , ErrorHandler } from '@/helpers'
import { useForm, useFormValidation } from '@/composables';
import { useStore } from '@/store/index.js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useStore();

const payment = reactive({
    holdername: '',
    cardnumber: '',
    date: '',
    cvv: '',
    table: '',
});

const { isFormDisabled, disableForm, enableForm } = useForm();
const { isFormValid, getFieldErrorMessage, touchField } = useFormValidation(
    payment,
    {
        holdername: { required, alpha },
        cardnumber: { required, numeric, minLength, maxLength },
        date: { required, numeric, minLength, maxLength },
        cvv: { required, numeric, minLength, maxLength },
        table: { numeric },
    }
);

const submit = async () => {
  if (!isFormValid()) return

  disableForm()
  try {
		await postSomeData('/some-endpoint', { 
            holdername: payment.holdername, 
            cardnumber: payment.cardnumber,
            date: payment.date,
            cvv: payment.cvv,
            table: payment.table
        })
        bus.emit(BUS_EVENTS.success, t('login-form.login-success-msg'))
  } catch (error) {
    ErrorHandler.process(error)
  }
  enableForm()
}

const selectedPaymentMethod = ref(null);

const selectPaymentMethod = (method) => {
    selectedPaymentMethod.value = method;
};

const selectOptions = [
    {value: 'dine-in', label: 'Dine In'},
    {value: 'to-go', label: 'To Go'},
    {value: 'delivery', label: 'Delivery'}
]

const selectedOption = ref('dine-in');

const closePayment = () => {
    store.CLOSE_PAYMENT();
};

const confirmPayment = () => {
    console.log("Payment was successful");
};

defineExpose({
    selectedPaymentMethod,
    selectPaymentMethod,
    closePayment,
    confirmPayment,
});

</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'
.payment 
    display: inline-flex
    padding: 24px
    flex-direction: column
    align-items: flex-start
    gap: 24px
    background-color: $background-secondary-main
    width: 405px
    height: 100vh
    border-left: 1px solid $border-primary-main
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

.payment__content-subtitle
    color: $text-primary-light

.payment__content-devider 
    border: 1px solid $border-primary-main
    width: 100%

.payment__content-payment 
    display: inline-flex
    flex-direction: column
    align-items: flex-start
    gap: 16px

.payment__content-tabs 
    display: flex
    align-items: flex-start
    gap: 8px

.payment__content-tab 
    display: flex
    width: 101px
    height: 64px
    padding: 10px 16px
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 2px
    border-radius: 8px
    border: 1px solid $border-primary-main
    background: none
    cursor: pointer
    color: $white
    white-space: nowrap

.payment__content-tab.selected 
    border: 1px solid $text-secondary-main
    background: $background-tertiary-main
    position: relative

.payment__content-tab.selected::after 
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

.payment__content-forms 
    display: flex
    flex-direction: column
    align-items: flex-start

:deep(.payment__content-forms-input-name)
    display: flex
    width: 357px
    padding: 14px
    align-items: flex-start
    gap: 8px
    margin: 8px 0px 16px 0px
    border-radius: 8px

:deep(.payment__content-forms-data-cvv)
    display: inline-flex
    align-items: flex-start
    gap: 13px

:deep(.payment__content-forms-input-data-cvv)
    display: flex
    align-items: flex-start
    width: 172px
    padding: 14px
    gap: 8px
    margin-top: 8px
    border-radius: 8px

.payment__payment-method-devider 
    border: 1px solid $border-primary-main
    width: 100%

.payment__payment-method-form 
    display: flex
    align-items: flex-start
    gap: 13px

:deep(.payment__content-forms-input)
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

.payment__cancel, .payment__confirm 
    display: flex
    width: 175px
    padding: 14px
    justify-content: center
    align-items: center
    gap: 8px
    flex: 1
    border-radius: 8px
    border: 1px solid $primary-main
    background-color: transparent
    cursor: pointer

.payment__confirm 
    background: $primary-main
    box-shadow: 0px 8px 24px 0px rgba(234, 124, 105, 0.40)
    color: $base

.payment__cancel 
    color: $primary-main
.select ::v-deep
    display: flex
    width: 172px
    margin-top: 10px

</style>
