import { test, expect } from "vitest";
import { render } from "@testing-library/vue";
import App from "../../App.vue";

test("App should render correctly", () => {
    const app = render(App)

    expect(app).toMatchSnapshot();
})