import { test, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import CalculatorResultCard from "../../components/CalculatorResultCard.vue";

test("Card should render heading with the name passed in title prop", async () => {
    render(CalculatorResultCard, { props: { title: "TAXA SELIC", profitability: 5000.0 } });

    const cardHeading = await screen.getByRole("heading", {
        name: "TAXA SELIC"
    });

    expect(cardHeading).toBeInTheDocument();
});

test("Card should render profitability with the value passed in profitability prop as BRL", async () => {
    render(CalculatorResultCard, { props: { title: "TAXA SELIC", profitability: 5000.0 } });

    const value = 5000.0
    const brlValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    const profitabilityElement = await screen.getByTestId('profitability-result-element')

    expect(profitabilityElement.textContent).toBe(brlValue);
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