import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

const { getByRole, getAllByRole } = screen;

describe("Footer component", () => {
  test("renders the footer wrapper", () => {
    render(<Footer />);

    const footerElement = getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders the nav tag container", () => {
    render(<Footer />);

    const navElement = getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders the footer logo image", () => {
    render(<Footer />);

    const logoImage = getByRole("img");
    expect(logoImage).toBeInTheDocument();
  });

  test("renders all the links in the footer", () => {
    render(<Footer />);

    const linkElements = getAllByRole("link");
    linkElements.map((link) => expect(link).toBeInTheDocument());
  });

  test("redirects to the home page when any link is pressed", () => {
    render(<Footer />);

    const currentURL = global.window.location.href;
    const linkElements = getAllByRole("link");

    linkElements.map((link) => {
      userEvent.click(link);
      expect(currentURL).toBe("http://localhost/");
    });
  });
});
