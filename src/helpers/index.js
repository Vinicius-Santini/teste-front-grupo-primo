export function convertToBrl(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export function calculateInvestment(mainAmount, monthlyAmount = 0, years, yieldRate) {
    const workDaysPeriod = years * 252
    const decimalYieldRate = yieldRate / 100.0

    return profitabilityCalculation(mainAmount, decimalYieldRate, workDaysPeriod) + monthlyInvestment(monthlyAmount, decimalYieldRate, workDaysPeriod)
}

function profitabilityCalculation(mainAmount, decimalYieldRate, workDaysPeriod) {
    const decimalYieldRatePlusOne = decimalYieldRate + 1

    return decimalYieldRatePlusOne ** (workDaysPeriod / 252) * mainAmount
}

function monthlyInvestment(monthlyAmount, decimalYieldRate, workDaysPeriod) {
    const monthlyYieldRate = decimalYieldRate / 12
    const monthlyYieldRatePlusOne = monthlyYieldRate + 1
    const months = workDaysPeriod / 21

    return (monthlyYieldRatePlusOne ** months - 1) * monthlyAmount / monthlyYieldRate
}