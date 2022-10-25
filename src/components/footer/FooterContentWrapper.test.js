import { render, screen } from "@testing-library/react";
import FooterContentWrapper from "./FooterContentWrapper";

const { getAllByRole } = screen;

describe("FooterContentWrapper component", () => {
//   test("test", () => {
//     render(<FooterContentWrapper />);

//     const testElement = screen.getByRole("");
//     expect(testElement).toBeInTheDocument();
//   });

  test("renders heading elements \'h#\'", () => {
    render(<FooterContentWrapper />);

    const headingElements = getAllByRole('heading');
    headingElements.map(heading => expect(heading).toBeInTheDocument())
  });

  test("renders list elements \'ul\'", () => {
    render(<FooterContentWrapper />);

    const listElements = getAllByRole('list');
    listElements.map(list => expect(list).toBeInTheDocument())
  });

  test("renders the items within list elements \'li\'", () => {
    render(<FooterContentWrapper />);

    const listItems = getAllByRole('listitem');
    listItems.map(item => expect(item).toBeInTheDocument())
  });

});
