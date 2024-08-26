
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import App from "../App.vue";

test("Simulation filling out all fields correctly for happy path", async () => {
    const user = userEvent.setup();

    render(App);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);
    await user.type(initialInvestmentInput, "100000");

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);
    await user.type(monthlyInvestmentInput, "20000");


    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });
    await user.click(calculateButton);

    const selicProfitabilityElement = screen.getByText("R$ 6.444,11");
    expect(selicProfitabilityElement).toBeInTheDocument();

    const arcaProfitabilityElement = screen.getByText("R$ 7.119,10");
    expect(arcaProfitabilityElement).toBeInTheDocument();
});

test("Simulation not filling out just monthly investment for happy path", async () => {
    const user = userEvent.setup();

    render(App);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);
    await user.type(initialInvestmentInput, "100000");

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);

    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });
    await user.click(calculateButton);

    const selicProfitabilityElement = screen.getByText("R$ 1.193,56");
    expect(selicProfitabilityElement).toBeInTheDocument();

    const arcaProfitabilityElement = screen.getByText("R$ 1.392,40");
    expect(arcaProfitabilityElement).toBeInTheDocument();
});

test("Simulation not filling out just initial investment for happy path", async () => {
    const user = userEvent.setup();

    render(App);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);
    await user.type(monthlyInvestmentInput, "20000");


    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });
    await user.click(calculateButton);

    const selicProfitabilityElement = screen.getByText("R$ 5.250,56");
    expect(selicProfitabilityElement).toBeInTheDocument();

    const arcaProfitabilityElement = screen.getByText("R$ 5.726,70");
    expect(arcaProfitabilityElement).toBeInTheDocument();
});

test("Simulation not filling out any field should not render result", async () => {
    const user = userEvent.setup();

    render(App);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);

    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });
    await user.click(calculateButton);

    const resultHeading = screen.queryByRole("heading", {
        name: "Resultado:"
    });
    expect(resultHeading).not.toBeInTheDocument();
});

test("Simulation not filling out initial investment and monthly investment should not render result", async () => {
    const user = userEvent.setup();

    render(App);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);

    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });
    await user.click(calculateButton);

    const resultHeading = screen.queryByRole("heading", {
        name: "Resultado:"
    });
    expect(resultHeading).not.toBeInTheDocument();
});

test("Simulation not filling out just investment time should not render result", async () => {
    const user = userEvent.setup();

    render(App);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);
    await user.type(initialInvestmentInput, "100000");

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);
    await user.type(monthlyInvestmentInput, "20000");


    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });
    await user.click(calculateButton);

    const resultHeading = screen.queryByRole("heading", {
        name: "Resultado:"
    });
    expect(resultHeading).not.toBeInTheDocument();
});