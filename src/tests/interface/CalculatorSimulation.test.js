import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import CalculatorSimulation from "../../components/CalculatorSimulation.vue";

test("CalculatorSimulation should render correctly", () => {
    const calculatorSimulation = render(CalculatorSimulation)

    expect(calculatorSimulation).toMatchSnapshot();
})