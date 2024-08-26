import { convertToBrl, calculateInvestment, makeCurrencyMask } from "../../helpers/index.js"

test("convertToBrl should return number converted to BRL currency", () => {
    expect(convertToBrl(100.0)).toBe("R$ 100,00");
});

test("calculateInvestment should return profitability based on parameters", () => {
    expect(calculateInvestment(1000, 200, 2, 9.25)).toBe(6444.112956692987);
});

test("makeCurrencyMask should return value with currency mask", () => {
    expect(makeCurrencyMask("20")).toBe("R$ 0,20");
});