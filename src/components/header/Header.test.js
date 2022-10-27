import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

const { getByRole, getAllByRole } = screen;

describe("Header component", () => {
  test("renders main header wrapper", () => {
    render(<Header />);

    const headerWrapperElement = getByRole("banner");

    expect(headerWrapperElement).toBeInTheDocument();
  });

  test("shows header on document when at top of document or when scrolling up to the top", () => {
    render(<Header />);

    fireEvent.scroll(window, { target: { scrollY: 10 } });
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    const headerWrapperElement = getByRole("banner");
    const headerVisibility = headerWrapperElement.getAttribute("class");

    expect(headerVisibility).toMatch(/down/i);
  });

  // test("hides the header from the document when scrolling down", () => {
  //   render(<Header />);

  //   const headerWrapperElement = getByRole("banner");
  //   const headerVisibility = headerWrapperElement.getAttribute("class");

  //   global.screenTop = 6;

  //   expect(headerVisibility).toMatch(/up/i);
  // });

  test("renders the nav items list itself 'ul'", () => {
    render(<Header />);

    const navListElements = getAllByRole("list");
    navListElements.map((listElement) =>
      expect(listElement).toBeInTheDocument()
    );
  });

  test("renders the inner items of the nav items list 'ul'", () => {
    render(<Header />);

    const navListItems = getAllByRole("listitem");
    navListItems.map((navItem) => expect(navItem).toBeInTheDocument());
  });

  test("renders navagation elements", () => {
    render(<Header />);

    const navlinkElements = getAllByRole("link");
    navlinkElements.map((navLinkItem) =>
      expect(navLinkItem).toBeInTheDocument()
    );
  });
});
