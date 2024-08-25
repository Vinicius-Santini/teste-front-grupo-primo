import { test, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import AppBanner from "../../components/AppBanner.vue";

test("Banner should render title and description with the content passed in the props", async () => {
    render(AppBanner, { props: { bannerTitle: "Titulo de banner", bannerDescription: "Descricao para o banner." } });

    const bannerHeading = await screen.getByRole("heading", {
        name: "Titulo de banner"
    });

    const bannerDesc = await screen.getByText("Descricao para o banner.")

    expect(bannerHeading).toBeInTheDocument();
    expect(bannerDesc).toBeInTheDocument();
});