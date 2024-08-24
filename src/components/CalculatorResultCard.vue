<script setup>
import { convertToBrl } from "../helpers/index.js"

const props = defineProps({
    icon: String,
    title: String,
    profitability: Number
})

function getLogoUrl() {
    return new URL(`../assets/${props.icon}`, import.meta.url)
}
</script>

<template>
    <div class="calculator-result-card-wrapper">
        <img>
        <div class="calculator-result-card-container">
            <img v-if="icon" :src="getLogoUrl()" class="calculator-result-card-logo" />
            <div class="calculator-result-card-title">{{ title }}</div>
            <div class="calculator-result-card-value">{{ convertToBrl(profitability) }}</div>
        </div>
    </div>
</template>

<style>
.calculator-result-card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 24px;
    margin-bottom: 12px;
    border: 1px solid #BFBDB6;
    padding-top: 20px;

    .calculator-result-card-container {
        width: 96%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 600;

        img {
            width: 112px;
            height: 32px;
            margin-bottom: 8px;
        }

        .calculator-result-card-title {
            font-size: 16px;
            margin-bottom: 4px;
            color: #595855;
            letter-spacing: 4px;
        }

        .calculator-result-card-value {
            font-size: 88px;
            line-height: 96px;
            padding-bottom: 28px;
        }
    }
}
</style>