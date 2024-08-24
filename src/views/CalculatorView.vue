<script setup>
import { ref } from 'vue';

import AppHeader from "../components/AppHeader.vue"
import AppBanner from "../components/AppBanner.vue"
import CalculatorSimulation from "../components/CalculatorSimulation.vue"
import CalculatorResult from "../components/CalculatorResult.vue"

import { calculateInvestment } from '../helpers';
import { selic, arca } from "../utils/yieldRates.js"

const selicProfitability = ref(null);
const arcaProfitability = ref(null);
const investmentPeriod = ref(null);

function handleSimulationData(initialInvestment, monthlyInvestment, investmentTime) {
    if (initialInvestment && investmentTime) {
        if (!monthlyInvestment) {
            monthlyInvestment = 0
        }
        investmentPeriod.value = investmentTime * 12
        selicProfitability.value = calculateInvestment(initialInvestment, monthlyInvestment, investmentTime, selic)
        arcaProfitability.value = calculateInvestment(initialInvestment, monthlyInvestment, investmentTime, arca)
    }
}
</script>

<template>
    <AppHeader />
    <div v-if="!selicProfitability || !arcaProfitability">
        <AppBanner />
        <div class="calculator-wrapper">
            <CalculatorSimulation @send-simulation-data="handleSimulationData" />
        </div>
    </div>
    <div v-else>
        <div class="calculator-wrapper2">
            <CalculatorResult :investment-period=investmentPeriod :selic-profitability=selicProfitability
                :arca-profitability=arcaProfitability />
        </div>
    </div>
</template>

<style>
.calculator-wrapper {
    padding: 80px 120px 80px 120px;

    @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 28px 0 0 0;
    }
}

.calculator-wrapper2 {
    padding: 56px;
}
</style>