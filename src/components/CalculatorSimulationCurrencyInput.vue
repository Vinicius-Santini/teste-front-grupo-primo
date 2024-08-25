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

<style>
input {
    width: 22vw;
    height: 60px;
    padding-left: 12px;
    background-color: #FFFFFF;
    border-radius: 12px;
    border: 2px solid #DDDCE0;
    color: var(--primary-text-color);
    font-size: 1.375rem;

    @media (max-width: 1024px) {
        width: 96%;
        margin-bottom: 32px;
        padding-left: 10px;
    }
}
</style>