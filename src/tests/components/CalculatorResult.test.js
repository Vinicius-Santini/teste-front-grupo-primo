import { test, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import CalculatorResult from "../../components/CalculatorResult.vue";

test("Card should render period heading with the value in investment period prop", async () => {
    render(CalculatorResult, { props: { investmentPeriod: 24, selicProfitability: 5000.0, arcaProfitability: 6000.0 } });

    const periodHeading = await screen.getByRole("heading", {
        name: "Em 24 meses você teria:"
    });

    expect(periodHeading).toBeInTheDocument();
});