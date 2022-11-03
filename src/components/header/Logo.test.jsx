import { render, screen } from "@testing-library/react";
import Logo from "components/header/Logo";
import { IMAGE } from "constants/style/StyleParams";

const { getByRole } = screen;

beforeEach(() => {
  render(<Logo />);
});

describe("Logo component", () => {
  test("renders the correct Logo", () => {
    const logo = getByRole("img");
    expect(logo).toHaveAttribute("src", IMAGE.headerLogo);
  });
});
