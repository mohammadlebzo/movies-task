import { render, screen, fireEvent } from "@testing-library/react";
import Movies from "../../components/movieCard/Movies";

describe("Movies component", () => {
//   test("test", () => {
//     render(<Movies />);

//     const testElement = screen.getByRole("");
//     expect(testElement).toBeInTheDocument();
//   });

  test("renders all link elements", () => {
    render(<Movies />);

    const linkElements = screen.getAllByRole("link");
    linkElements.map(link => expect(link).toBeInTheDocument())
  });

  test("renders all image elements", () => {
    render(<Movies />);

    const imageElements = screen.getAllByRole("img");
    imageElements.map(image => expect(image).toBeInTheDocument())
  });

  test("renders all heading elements", () => {
    render(<Movies />);

    const headingElements = screen.getAllByRole("heading");
    headingElements.map(heading => expect(heading).toBeInTheDocument())
  });


});
