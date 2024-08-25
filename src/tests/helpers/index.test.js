import { convertToBrl, calculateInvestment } from "../../helpers/index.js"

test("Returns number converted to BRL currency", () => {
    expect(convertToBrl(100.0)).toBe("R$ 100,00");
});

test("Returns profitability based on parameters", () => {
    expect(calculateInvestment(1000, 200, 2, 9.25)).toBe(6444.112956692987);
});