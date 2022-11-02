import { render, screen } from "@testing-library/react";
import Footer from "components/footer/Footer";
import { IMAGE } from "constants/style/StyleParams";

const { getByRole } = screen;

describe("Footer component", () => {
  test("renders the logo", () => {
    render(<Footer />);
    const logo = getByRole("img");
    expect(logo).toHaveAttribute("src", IMAGE.footerLogo);
  });
});
