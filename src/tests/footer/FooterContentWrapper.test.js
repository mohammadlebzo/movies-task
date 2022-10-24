import { render, screen, fireEvent } from "@testing-library/react";
import FooterContentWrapper from "../../components/footer/FooterContentWrapper";

describe("FooterContentWrapper component", () => {
//   test("test", () => {
//     render(<FooterContentWrapper />);

//     const testElement = screen.getByRole("");
//     expect(testElement).toBeInTheDocument();
//   });

  test("renders heading elements \'h#\'", () => {
    render(<FooterContentWrapper />);

    const headingElements = screen.getAllByRole('heading');
    headingElements.map(heading => expect(heading).toBeInTheDocument())
  });

  test("renders list elements \'ul\'", () => {
    render(<FooterContentWrapper />);

    const listElements = screen.getAllByRole('list');
    listElements.map(list => expect(list).toBeInTheDocument())
  });

  test("renders the items within list elements \'li\'", () => {
    render(<FooterContentWrapper />);

    const listItems = screen.getAllByRole('listitem');
    listItems.map(item => expect(item).toBeInTheDocument())
  });

});
