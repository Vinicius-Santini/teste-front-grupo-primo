import { test, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import CalculatorSimulation from "../../components/CalculatorSimulation.vue";

test("Calculate button should not be disabled if all fields are filled", async () => {
    const user = userEvent.setup();

    render(CalculatorSimulation);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);
    await user.type(initialInvestmentInput, "1000");

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);
    await user.type(monthlyInvestmentInput, "200");


    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });

    expect(calculateButton).not.toBeDisabled();
});

test("Calculate button should not be disabled if only initial investment is not filled", async () => {
    const user = userEvent.setup();

    render(CalculatorSimulation);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);
    await user.type(monthlyInvestmentInput, "200");


    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });

    expect(calculateButton).not.toBeDisabled();
});

test("Calculate button should not be disabled if only monthly investment is not filled", async () => {
    const user = userEvent.setup();

    render(CalculatorSimulation);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);
    await user.type(initialInvestmentInput, "1000");

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);

    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(investmentTimeInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });

    expect(calculateButton).not.toBeDisabled();
});

test("Calculate button should be disabled if only investment time is not filled", async () => {
    const user = userEvent.setup();

    render(CalculatorSimulation);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);
    await user.type(initialInvestmentInput, "1000");

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);
    await user.type(monthlyInvestmentInput, "200");


    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });

    expect(calculateButton).toBeDisabled();
});

test("Calculate button should be disabled if both main investment and monthly investment is not filled", async () => {
    const user = userEvent.setup();

    render(CalculatorSimulation);

    const initialInvestmentInput = await screen.findByLabelText("Investimento inicial");

    await user.clear(initialInvestmentInput);

    const monthlyInvestmentInput = await screen.findByLabelText("Investimento mensal");

    await user.clear(monthlyInvestmentInput);

    const investmentTimeInput = await screen.findByLabelText("Quanto tempo deixaria seu dinheiro investido?");

    await user.clear(investmentTimeInput);
    await user.type(monthlyInvestmentInput, "2");

    const calculateButton = await screen.getByRole("button", {
        name: /calcular/i
    });

    expect(calculateButton).toBeDisabled();
});