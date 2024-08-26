import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import AppCurrencyInput from "../../components/AppCurrencyInput.vue";

test("AppCurrencyInput should render correctly", () => {
    const appCurrencyInput = render(AppCurrencyInput)

    expect(AppCurrencyInput).toMatchSnapshot();
})