<script setup>
import { selic, arca } from "../utils/yieldRates.js"

import CalculatorResultCard from "./CalculatorResultCard.vue"

const props = defineProps({
    investmentPeriod: Number,
    selicProfitability: Number,
    arcaProfitability: Number
})
</script>

<template>
    <div class="calculator-result-wrapper">
        <div class="calculator-result-container">
            <h1 class="calculator-result-title">
                Resultado:
            </h1>
            <h2 class="calculator-result-period">
                Em {{ investmentPeriod }} meses você teria:
            </h2>
            <CalculatorResultCard title="TAXA SELIC" :profitability=selicProfitability />
            <CalculatorResultCard logoPath="logo-arca.svg" title="FUNDO ARCA" :profitability=arcaProfitability />
            <div class="divider"></div>
            <div class="calculator-result-rates-wrapper">
                <div class="calculator-result-rate-content">
                    <div class="calculator-result-rate-name">TAXA SELIC:</div>
                    <div class="calculator-result-rate-value">{{ selic }}%</div>
                </div>
                <div class="calculator-result-rate-content">
                    <div class="calculator-result-rate-name">RENTABILIDADE DO ARCA:</div>
                    <div class="calculator-result-rate-value">{{ arca }}% a.a.</div>
                </div>
            </div>
            <div class="calculator-result-help-wrapper">
                <div class="calculator-result-help-content">
                    <img src="../assets/help.svg" class="" />
                    <div class="calculator-result-help-info">Valores utilizados no simulador de investimentos
                        (referentes à
                        data de última atualização - esses valores podem alterar de acordo com o mercado):</div>
                </div>
                <div class="calculator-result-help-date">- Data da última atualização: 10/01/2024</div>
            </div>
        </div>
    </div>
</template>

<style>
.calculator-result-wrapper {
    min-height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-application-color);
    border-radius: 16px;
    color: var(--highlighted-text-color);
    font-weight: 600;

    @media (max-width: 1024px) {
        width: 90%;
    }

    .calculator-result-container {
        width: 94%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 4vh;

        .calculator-result-title {
            font-weight: 700;
            font-size: 2.5rem;
            margin-bottom: 5vh;

            @media (max-width: 1024px) {
                font-size: 2rem;
            }
        }

        .calculator-result-period {
            font-size: 2rem;
            margin-bottom: 12px;
            color: #3A3A3A;

            @media (max-width: 1024px) {
                font-size: 1.125rem;
            }
        }

        .calculator-result-rates-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 3vh 0 3vh 0;

            .calculator-result-rate-content {
                display: flex;
                align-items: center;
                margin-bottom: 3vh;

                @media (max-width: 1024px) {
                    flex-direction: column;
                    align-items: flex-start;
                }

                .calculator-result-rate-name {
                    font-size: 1.0625;
                    letter-spacing: 4px;
                    line-height: 19px;

                    @media (max-width: 1024px) {
                        font-size: 1rem;
                        line-height: 18px;
                    }
                }

                .calculator-result-rate-value {
                    font-weight: 800;
                    font-size: 1.5rem;
                    padding-left: 8px;
                    text-align: center;
                    line-height: 32px;

                    @media (max-width: 1024px) {
                        padding-top: 10px;
                        padding-left: 0px;
                        font-size: 1.125rem;
                        line-height: 24px;
                    }
                }
            }
        }

        .calculator-result-help-wrapper {
            font-weight: 400;
            font-size: 1.125rem;
            color: #6A6A6A;
            padding-bottom: 48px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: justify;

            @media (max-width: 1024px) {
                font-size: 0.875rem;
            }

            .calculator-result-help-content {
                display: flex;
                align-items: center;

                @media (max-width: 1024px) {
                    align-items: flex-start;
                    margin-right: 20px;
                }

                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 16px;
                }
            }

            .calculator-result-help-date {
                margin: 20px 0 0 40px;

                @media (max-width: 1024px) {
                    margin: 20px 40px 0 52px;
                }
            }
        }
    }

}
</style>