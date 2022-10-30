import { render, screen, fireEvent } from "@testing-library/react";
import { IMAGE } from "../../constants/style/StyleParams";
import Header from "./Header";

const { getByRole } = screen;

beforeEach(() => {
  render(<Header />);
});

describe("Header component", () => {
  test("renders header logo", () => {
    const logo = getByRole("img");
    expect(logo).toHaveAttribute("src", IMAGE.headerLogo);
  });

  test("shows header on document when at top of document or when scrolling up to the top", () => {
    fireEvent.scroll(window, { target: { scrollY: 10 } });
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    const headerWrapperElement = getByRole("banner");
    const headerVisibility = headerWrapperElement.getAttribute("class");

    expect(headerVisibility).toMatch(/down/i);
  });

  test("renders the navbar content", () => {
    const content = ["Movies", "TV Shows", "People", "More", "Login", "Join TMDB"]
    const navbarItems = content.map(item => getByRole("link", {name: item}))

    navbarItems.map((item, idx) => expect(item).toHaveTextContent(content[idx]));
  })
});
