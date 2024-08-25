<script setup>
import { makeCurrencyMask } from '../helpers';

const props = defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function handleInputedValue(event) {
    const maskedValue = makeCurrencyMask(event.target.value)
    event.target.value = maskedValue
    const floatString = maskedValue.replace(/\./g, '').replace(/,/g, '.').replace("R$ ", "")
    const investmentValue = parseFloat(floatString)
    emit('update:modelValue', investmentValue)
}
</script>

<template>
    <input type="text" placeholder="R$ 0,00" @input="handleInputedValue($event, inputName)">
</template>