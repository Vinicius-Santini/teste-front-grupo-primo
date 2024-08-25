import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import AppBanner from "../../components/AppBanner.vue";

test("AppBanner should render correctly", () => {
    const appBanner = render(AppBanner)

    expect(appBanner).toMatchSnapshot();
})