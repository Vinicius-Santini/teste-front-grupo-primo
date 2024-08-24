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
            <div class="calculator-result-title">
                Resultado:
            </div>
            <div class="calculator-result-period">
                Em {{ investmentPeriod }} meses você teria:
            </div>
            <CalculatorResultCard title="TAXA SELIC" :profitability=selicProfitability />
            <CalculatorResultCard icon="logo-arca.svg" title="FUNDO ARCA" :profitability=arcaProfitability />
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
    background-color: #EEEEEE;
    border-radius: 16px;
    color: #21211F;
    font-weight: 600;

    .calculator-result-container {
        width: 94%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 44px;

        .calculator-result-title {
            font-weight: 700;
            font-size: 40px;
            margin-bottom: 60px;
        }

        .calculator-result-period {
            font-size: 32px;
            margin-bottom: 12px;
        }

        .divider {
            width: 100%;
            border-top: 5px solid #33E5B0;
            margin: 28px 0 28px 0;
        }

        .calculator-result-rates-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 32px 0 32px 0;

            .calculator-result-rate-content {
                display: flex;
                align-items: center;
                margin-bottom: 32px;

                .calculator-result-rate-name {
                    font-size: 17px;
                    letter-spacing: 4px;
                    text-align: center;
                    line-height: 19px;
                }

                .calculator-result-rate-value {
                    font-weight: 800;
                    font-size: 24px;
                    padding-left: 8px;
                    text-align: center;
                    line-height: 32px;
                }
            }
        }

        .calculator-result-help-wrapper {
            font-weight: 400;
            font-size: 18px;
            color: #6A6A6A;
            padding-bottom: 48px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .calculator-result-help-content {
                display: flex;
                align-items: center;

                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 16px;
                }
            }

            .calculator-result-help-date {
                margin: 20px 0 0 40px;
            }
        }
    }

}
</style>