import { render, screen } from "@testing-library/react";
import ListPlaceholder from "../../../components/movieCard/UI/ListPlaceholder";

describe("ListPlaceholder component", () => {
//   test("test", () => {
//     render(<ListPlaceholder />);

//     const testElement = screen.getByRole("");
//     expect(testElement).toBeInTheDocument();
//   });

  test("renders the placeholder links", () => {
    render(<ListPlaceholder />);

    const linkElements = screen.getAllByRole("link");
    linkElements.map((link) => expect(link).toBeInTheDocument());
  });

  test("renders the placeholder images ", () => {
    render(<ListPlaceholder />);

    const imgElements = screen.getAllByRole("img");
    imgElements.map(img => expect(img).toBeInTheDocument())
  });

  test("renders the placeholder headings", () => {
    render(<ListPlaceholder />);

    const headingElements = screen.getAllByRole("heading");
    headingElements.map(heading => expect(heading).toBeInTheDocument())
  });
});
