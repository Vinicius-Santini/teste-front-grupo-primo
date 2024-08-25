<script setup>
import { convertToBrl } from "../helpers/index.js"

const props = defineProps({
    logoPath: String,
    title: String,
    profitability: Number
})

function getLogoUrl() {
    return new URL(`../assets/${props.logoPath}`, import.meta.url)
}
</script>

<template>
    <div class="calculator-result-card-wrapper">
        <div class="calculator-result-card-container">
            <img v-if="logoPath" :src="getLogoUrl()" class="calculator-result-card-logo" :aria-label=logoPath />
            <h3 class="calculator-result-card-title">{{ title }}</h3>
            <div class="calculator-result-card-value">{{
                convertToBrl(profitability) }}</div>
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
    border: 1px solid var(--card-border-color);
    padding-top: 20px;

    .calculator-result-card-container {
        width: 96%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 600;

        @media (max-width: 1024px) {
            width: 85%;
        }

        img {
            width: 112px;
            height: 32px;
            margin-bottom: 8px;

            @media (max-width: 1024px) {
                width: 72px;
                height: 32px;
            }
        }

        .calculator-result-card-title {
            font-size: 1rem;
            margin-bottom: 4px;
            color: var(--primary-text-color);
            letter-spacing: 4px;

            @media (max-width: 1024px) {
                font-size: 0.875rem;
            }
        }

        .calculator-result-card-value {
            font-size: 5.5rem;
            line-height: 96px;
            padding-bottom: 4vh;

            @media (max-width: 1024px) {
                font-size: 2rem;
                line-height: 40px;
                padding-bottom: 4vh;
            }
        }
    }
}
</style>