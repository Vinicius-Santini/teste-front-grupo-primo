import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import CalculatorView from "../../views/CalculatorView.vue";

test("CalculatorView should render correctly", () => {
    const calculatorView = render(CalculatorView)

    expect(calculatorView).toMatchSnapshot();
})