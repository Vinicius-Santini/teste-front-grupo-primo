<script setup>
const initialInvestment = defineModel('initialInvestment')
const monthlyInvestment = defineModel('monthlyInvestment')
const investmentTime = defineModel('investmentTime')

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
                <div class="calculator-simulation-input-wrapper">
                    <label for="initial-investment">
                        Investimento inicial
                    </label>
                    <input v-model="initialInvestment" id="initial-investment" type="number" placeholder="R$ 0,00">
                </div>
                <div class="calculator-simulation-input-wrapper">
                    <label for="monthly-investment">
                        Investimento mensal
                    </label>
                    <input v-model="monthlyInvestment" id="monthly-investment" type="number" placeholder="R$ 0,00">
                </div>
                <div class="calculator-simulation-input-wrapper">
                    <label for="investment-time">
                        Quanto tempo deixaria seu dinheiro investido?
                    </label>
                    <input v-model="investmentTime" id="investment-time" type="number" placeholder="1 ano">
                </div>
            </div>
            <div class="calculator-simulation-button-wrapper">
                <button @click="emit('send-simulation-data', initialInvestment, monthlyInvestment, investmentTime)"
                    :disabled="(!initialInvestment && !monthlyInvestment) || !investmentTime">Calcular<img
                        src="../assets/arrow_right_alt.svg" /></button>
            </div>
        </div>
    </div>
</template>

<style>
.calculator-simulation-wrapper {
    min-height: fit-content;
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
        padding: 44px 0 44px 0;

        @media (max-width: 1024px) {
            height: 94%;
            padding: 0px;
        }

        .calculator-simulation-title {
            font-weight: 600;
            font-size: 33px;
            color: var(--highlighted-text-color);
            margin-bottom: 16px;

            @media (max-width: 1024px) {
                font-size: 20px;
            }
        }

        .calculator-simulation-description {
            font-size: 25px;

            @media (max-width: 1024px) {
                font-size: 16px;
            }
        }

        .calculator-simulation-inputs-wrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 100px;

            @media (max-width: 1024px) {
                flex-direction: column;
                margin-top: 44px;
                width: 100%;
            }

            .calculator-simulation-input-wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;

                @media (max-width: 1024px) {
                    width: 100%;
                    align-items: flex-start;
                }

                label {
                    font-size: 22px;
                    padding-bottom: 8px;

                    @media (max-width: 1440px) {
                        font-size: 16px;
                    }
                }

                input {
                    width: 22vw;
                    height: 60px;
                    padding-left: 12px;
                    background-color: #FFFFFF;
                    border-radius: 12px;
                    border: 2px solid #DDDCE0;
                    color: var(--primary-text-color);
                    font-size: 22px;

                    @media (max-width: 1024px) {
                        width: 100%;
                        margin-bottom: 32px;
                        padding-left: 0px;
                    }
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                ::placeholder {
                    font-size: 20px;
                    color: #BEBEBE;
                }
            }


        }

        .calculator-simulation-button-wrapper {
            width: 100%;
            margin-top: 124px;
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
                font-size: 25px;

                @media (max-width: 1024px) {
                    width: 100%;
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