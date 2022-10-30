import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";
import { IMAGE } from "../../constants/style/StyleParams";

const { getByRole } = screen;

describe("Footer component", () => {
  test("renders the logo", () => {
    render(<Footer />);
    const logo = getByRole("img");
    expect(logo).toHaveAttribute("src", IMAGE.footerLogo);
  });
});
