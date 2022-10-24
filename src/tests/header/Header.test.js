import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../components/header/Header";

describe("Header component", () => {
  //   test("test", () => {
  //     render(<Header />);

  //     const testElement = screen.getByRole("");
  //     expect(testElement).toBeInTheDocument();
  //   });

  test("renders main header wrapper", () => {
    render(<Header />);

    // global.window.scrollY

    const headerWrapperElement = screen.getByRole("banner");

    expect(headerWrapperElement).toBeInTheDocument();
  });

  test("shows header on document when at top of document or when scrolling up to the top", () => {
    render(<Header />);

    fireEvent.scroll(window, { target: { scrollY: 8 } });

    const headerWrapperElement = screen.getByRole("banner");
    const headerVisibility = headerWrapperElement.getAttribute("visibility");

    expect(headerVisibility).toBe("1");
  });

  test("hides the header from the document when scrolling down", () => {
    render(<Header />);

    fireEvent.scroll(window, { target: { scrollY: 20 } });

    const headerWrapperElement = screen.getByRole("banner");
    const headerVisibility = headerWrapperElement.getAttribute("visibility");

    expect(headerVisibility).toBe("0");
  });

  test("renders the nav items list itself 'ul'", () => {
    render(<Header />);

    const navListElements = screen.getAllByRole("list");
    navListElements.map((listElement) =>
      expect(listElement).toBeInTheDocument()
    );
  });

  test("renders the inner items of the nav items list 'ul'", () => {
    render(<Header />);

    const navListItems = screen.getAllByRole("listitem");
    navListItems.map((navItem) => expect(navItem).toBeInTheDocument());
  });

  test("renders navagation elements", () => {
    render(<Header />);

    const navlinkElements = screen.getAllByRole("link");
    navlinkElements.map((navLinkItem) =>
      expect(navLinkItem).toBeInTheDocument()
    );
  });
});
