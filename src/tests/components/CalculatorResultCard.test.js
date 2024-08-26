import { test, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import CalculatorResultCard from "../../components/CalculatorResultCard.vue";

test("Card should render heading and profitability with the values passed in props", async () => {
    render(CalculatorResultCard, { props: { title: "TAXA SELIC", profitability: 5000.0 } });

    const cardHeading = await screen.getByRole("heading", {
        name: "TAXA SELIC"
    });
    const profitabilityElement = screen.getByText("R$ 5.000,00");

    expect(profitabilityElement).toBeInTheDocument();
    expect(cardHeading).toBeInTheDocument();
});

test("Card should render img element if logoPath prop is passed", async () => {
    render(CalculatorResultCard, { props: { logoPath: "./logo-path.svg", title: "TAXA SELIC", profitability: 5000.0 } });

    const logoElement = await screen.getByRole("img", {
        name: "./logo-path.svg"
    })

    expect(logoElement).toBeInTheDocument();
});

test("Card should not render img element if logoPath prop is not passed", async () => {
    render(CalculatorResultCard, { props: { title: "TAXA SELIC", profitability: 5000.0 } });

    const logoElement = await screen.queryByRole("img");

    expect(logoElement).not.toBeInTheDocument();
});