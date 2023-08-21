import { computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { get } from 'lodash'

export const useFormValidation = (state, rules) => {
    const validationRules = computed(() => rules);
    const validationController = useVuelidate(validationRules, state);
    const isFieldsValid = computed(() => !validationController.value.$invalid);
    const isFormValid = () => {
        validationController.value.$touch()
        return !validationController.value.$invalid
    }
    const getFieldErrorMessage = (fieldPath) => {
        let errorMessage = ''
        if (!validationController.value || !validationController.value.$invalid) {
            errorMessage = ''
        }

        const field = get(validationController.value, fieldPath)
    
        if (!field || !Object.keys(field).length) {
            throw new Error(
                `getFieldErrorMessage: Cannot find vuelidate field by '${fieldPath}'`,
            )
        }
    
        if (!field.$dirty) errorMessage = ''
    
        errorMessage = field.$errors.length
            ? (field.$errors[0].$message)
            : ''

        return errorMessage
    }
    const touchField = (fieldPath) => {
        const field = get(validationController.value, fieldPath)
        if (field) {
            field.$touch()
        }
    }
    
    return {
        isFieldsValid,
        getFieldErrorMessage,
        touchField,
        isFormValid,
    }
}
