import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import CalculatorResultCard from "../../components/CalculatorResultCard.vue";

test("CalculatorResultCard should render correctly", () => {
    const calculatorResultCard = render(CalculatorResultCard, { props: { title: "TAXA SELIC", profitability: 1000.0 } })

    expect(calculatorResultCard).toMatchSnapshot();
})