import { ref } from 'vue'

export function useForm() {
    const isFormDisabled = ref(false)
    const isFormPending = ref(false)
    const isConfirmationShown = ref(false)

    const disableForm = () => {
        isFormDisabled.value = true
    }

    const enableForm = () => {
        isFormDisabled.value = false
    }

    return {
        isFormDisabled,
        isFormPending,
        isConfirmationShown,
        disableForm,
        enableForm,
    }
}