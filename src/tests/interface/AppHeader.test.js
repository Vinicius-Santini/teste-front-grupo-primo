import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import AppHeader from "../../components/AppHeader.vue";

test("AppHeader should render correctly", () => {
    const appHeader = render(AppHeader)

    expect(appHeader).toMatchSnapshot();
})