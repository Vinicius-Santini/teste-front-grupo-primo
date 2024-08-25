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
const investmentPeriodInMonths = ref(null);

function handleSimulationData(initialInvestment, monthlyInvestment, investmentTime) {
    if ((initialInvestment || monthlyInvestment) && investmentTime) {
        investmentPeriodInMonths.value = investmentTime * 12
        selicProfitability.value = calculateInvestment(initialInvestment, monthlyInvestment, investmentTime, selic)
        arcaProfitability.value = calculateInvestment(initialInvestment, monthlyInvestment, investmentTime, arca)
    }
}

const calculatorBannerTitle = "Simulador de investimento"
const calculatorBannerDescription = "Descubra o quanto você pode economizar."
</script>

<template>
    <AppHeader />
    <div v-if="!selicProfitability || !arcaProfitability">
        <AppBanner :bannerTitle=calculatorBannerTitle :bannerDescription=calculatorBannerDescription />
        <div class="calculator-simulation-component-wrapper">
            <CalculatorSimulation @send-simulation-data="handleSimulationData" />
        </div>
    </div>
    <div v-else>
        <div class="calculator-result-component-wrapper">
            <CalculatorResult :investment-period=investmentPeriod :selic-profitability=selicProfitability
                :arca-profitability=arcaProfitability />
        </div>
    </div>
</template>

<style>
.calculator-simulation-component-wrapper {
    padding: 7vh 6vw 7vh 6vw;

    @media (max-width: 1024px) {
        width: 100%;
        min-height: 728px;
        display: flex;
        justify-content: center;
        padding: 4vh 0 18vh 0;
    }
}

.calculator-result-component-wrapper {
    padding: 3vw;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 4vh 0 24vh 0;
        display: flex;
        justify-content: center;
    }
}
</style>