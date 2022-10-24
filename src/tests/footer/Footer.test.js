import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../../components/footer/Footer";

describe("Footer component", () => {
  //   test("test", () => {
  //     render(<Footer />);

  //     const testElement = screen.getByRole("");
  //     expect(testElement).toBeInTheDocument();
  //   });

  test("renders the footer wrapper", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  test("renders the nav tag container", () => {
    render(<Footer />);

    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders the footer logo image", () => {
    render(<Footer />);

    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
  });

  test("renders all the links in the footer", () => {
    render(<Footer />);

    const linkElements = screen.getAllByRole("link");
    linkElements.map((link) => expect(link).toBeInTheDocument());
  });

  test("redirects to the home page when any link is pressed", () => {
    render(<Footer />);

    const currentURL = global.window.location.href;
    const linkElements = screen.getAllByRole("link");

    linkElements.map((link) => {
      userEvent.click(link);
      expect(currentURL).toBe("http://localhost/");
    });
  });
});
