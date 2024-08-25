import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import CalculatorSimulationCurrencyInput from "../../components/CalculatorSimulationCurrencyInput.vue";

test("CalculatorSimulationCurrencyInput should render correctly", () => {
    const calculatorSimulationCurrencyInput = render(CalculatorSimulationCurrencyInput)

    expect(calculatorSimulationCurrencyInput).toMatchSnapshot();
})