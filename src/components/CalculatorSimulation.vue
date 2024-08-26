<script setup>
import AppCurrencyInput from './AppCurrencyInput.vue';

const initialInvestment = defineModel('initialInvestment')
const monthlyInvestment = defineModel('monthlyInvestment')
const investmentTime = defineModel('investmentTime')

function calculateSpanDistance() {
    return 20 + (12 * investmentTime.value.toString().length) + 'px'
}

const emit = defineEmits(['send-simulation-data'])
</script>

<template>
    <div class="calculator-simulation-wrapper">
        <div class="calculator-simulation-container">
            <div class="calculator-simulation-title">Simule agora</div>
            <div class="calculator-simulation-description">Faça uma comparação e comece a investir em uma experiência
                fácil
                e intuitiva:</div>
            <div class="calculator-simulation-inputs-wrapper">
                <div class="calculator-simulation-inputs-content">
                    <label for="initial-investment">
                        Investimento inicial
                    </label>
                    <AppCurrencyInput id="initial-investment" v-model="initialInvestment" />
                </div>
                <div class="calculator-simulation-inputs-content">
                    <label for="monthly-investment">
                        Investimento mensal
                    </label>
                    <AppCurrencyInput id="monthly-investment" v-model="monthlyInvestment" />
                </div>
                <div class="calculator-simulation-inputs-content">
                    <label for="investment-time">
                        Quanto tempo deixaria seu dinheiro investido?
                    </label>
                    <div class="calculator-simulation-inputs-content-time-input-wrapper">
                        <input id="investment-time" v-model="investmentTime" type="number" placeholder="1 ano">
                        <span v-if="investmentTime && investmentTime < 2">ano</span>
                        <span :style="{'left': calculateSpanDistance()}"
                            v-else-if="investmentTime && investmentTime > 1">anos</span>
                    </div>
                </div>
            </div>
            <div class="calculator-simulation-button-wrapper">
                <button @click="emit('send-simulation-data', initialInvestment, monthlyInvestment, investmentTime)"
                    :disabled="(!initialInvestment && !monthlyInvestment) || !investmentTime">Calcular<img
                        src="../assets/arrow-right-alt.svg" /></button>
            </div>
        </div>
    </div>
</template>

<style>
.calculator-simulation-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-application-color);
    border-radius: 16px;
    color: var(--primary-text-color);
    font-weight: 400;
    text-align: justify;

    @media (max-width: 1024px) {
        width: 90%;
    }

    .calculator-simulation-container {
        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 4vh 0 4vh 0;

        @media (max-width: 1024px) {
            width: 85%;
            height: 94%;
            padding: 0px;
        }

        .calculator-simulation-title {
            font-weight: 600;
            font-size: 2rem;
            color: var(--highlighted-text-color);
            margin-bottom: 16px;

            @media (max-width: 1024px) {
                font-size: 1.25rem;
            }
        }

        .calculator-simulation-description {
            font-size: 1.5625rem;

            @media (max-width: 1024px) {
                font-size: 1rem;
            }
        }

        .calculator-simulation-inputs-wrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 9.2vh;

            @media (max-width: 1024px) {
                flex-direction: column;
                margin-top: 44px;
                width: 100%;
            }

            .calculator-simulation-inputs-content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                @media (max-width: 1024px) {
                    width: 100%;
                    align-items: flex-start;
                }

                label {
                    font-size: 1.375rem;
                    padding-bottom: 8px;
                    max-width: 80%;

                    @media (max-width: 1440px) {
                        font-size: 1rem;
                    }
                }

                .calculator-simulation-inputs-content-time-input-wrapper {
                    position: relative;

                    @media (max-width: 1024px) {
                        width: 100%;
                        align-items: flex-start;
                    }

                    span {
                        position: absolute;
                        left: 30px;
                        color: var(--primary-text-color);
                        font-size: 1.375rem;
                        top: 14px;
                    }

                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                ::placeholder {
                    font-size: 1.25rem;
                    color: #BEBEBE;
                }
            }


        }

        .calculator-simulation-button-wrapper {
            width: 100%;
            margin-top: 10vh;
            display: flex;
            justify-content: flex-end;

            @media (max-width: 1024px) {
                margin-top: 20px;
                justify-content: flex-start;
            }

            button {
                width: 10em;
                height: 3em;
                margin-right: 12px;
                border-radius: 16px;
                background-color: var(--green-highlight-color);
                color: var(--highlighted-text-color);
                font-weight: 600;
                font-size: 1.5625rem;

                @media (max-width: 767px) {
                    width: 100%;
                }

                @media (max-width: 1024px) {
                    width: 98%;
                    margin-right: 0px;
                }

                img {
                    margin-left: 20px;
                }
            }

            button:disabled,
            button[disabled] {
                opacity: 0.5;
            }
        }
    }

}
</style>