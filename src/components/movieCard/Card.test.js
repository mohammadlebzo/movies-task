import { render, screen } from "@testing-library/react";
import Card from "./Card";

const { getAllByRole } = screen;

describe("Card component", () => {
  test("renders all link elements", () => {
    render(<Card />);

    const linkElements = getAllByRole("link");
    linkElements.map((link) => expect(link).toBeInTheDocument());
  });

  test("renders all heading elements", () => {
    render(<Card />);

    const headingElements = getAllByRole("heading");
    headingElements.map((heading) => expect(heading).toBeInTheDocument());
  });
});
