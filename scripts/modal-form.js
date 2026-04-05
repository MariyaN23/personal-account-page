import {closeModal} from "./modal.js";

export const form = document.querySelector('#ad-form')
const validateField = (input) => {
    const parent = input.closest('.ad-form__field')

    if (input.classList.contains('ad-form__input') || input.classList.contains('ad-form__textarea')) {
        if (!input.checkValidity()) {
            parent.classList.add('ad-form__field--invalid')
            return false
        } else {
            parent.classList.remove('ad-form__field--invalid')
            return true
        }
    }

    if (input.classList.contains('rating__input')) {
        const isSelected = !!form.querySelector('.rating__input:checked')
        if (!isSelected) {
            parent.classList.add('ad-form__field--invalid')
            return false
        } else {
            parent.classList.remove('ad-form__field--invalid')
            return true
        }
    }

    return true
}

export const clearValidation = () => {
    const invalidFields = form.querySelectorAll('.ad-form__field--invalid')
    invalidFields.forEach(field => {
        field.classList.remove('ad-form__field--invalid')
    })
}

form.addEventListener('input', (e) => {
    if (e.target.matches('.ad-form__input, .ad-form__textarea, .rating__input')) {
        validateField(e.target)
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let isValid = true

    const inputsToValidate = form.querySelectorAll('.ad-form__input, .ad-form__textarea, .rating__input[required]')

    inputsToValidate.forEach(input => {
        const isFieldValid = validateField(input)
        if (!isFieldValid) {
            isValid = false
        }
    })

    if (isValid) {
        closeModal()
    }
})
