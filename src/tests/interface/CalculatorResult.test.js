import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import CalculatorResult from "../../components/CalculatorResult.vue";

test("CalculatorResult should render correctly", () => {
    const calculatorResult = render(CalculatorResult, { props: { investmentPeriod: 24, selicProfitability: 5000.0, arcaProfitability: 6000.0 } })

    expect(calculatorResult).toMatchSnapshot();
})