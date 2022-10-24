import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sort from "../../components/filter/Sort";
// import PageWrapper from '../../components/PageWrapper'

describe("Sort component", () => {
  //   test("test", () => {
  //     render(<Sort />);

  //     const testElement = screen.getByRole("");
  //     expect(testElement).toBeInTheDocument();
  //   });

  test("renders the headings", () => {
    render(<Sort />);

    const headingElements = screen.getAllByRole("heading");
    headingElements.map((heading) => expect(heading).toBeInTheDocument());
  });

  test("renders the combobox", () => {
    render(<Sort />);

    const comboboxElement = screen.getByRole("combobox");
    expect(comboboxElement).toBeInTheDocument();
  });

  test("renders the combobox options", () => {
    render(<Sort />);

    const comboboxElementOptions = screen.getAllByRole("option");
    comboboxElementOptions.map((option) => expect(option).toBeInTheDocument());
  });

  test("renders a link tag", () => {
    render(<Sort />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });

  test("changes button color when an oprtion is selected from the combobox", () => {
    render(<Sort />);

    const comboboxElement = screen.getByRole("combobox");
    fireEvent.change(comboboxElement);

    const searchButton = screen.getByRole("link");
    const buttonClass =
      searchButton.parentElement?.parentElement.getAttribute("class");

    expect(buttonClass).toMatch(/on/i);
  });

  //   test("change the button color and preform the operation", () => {
  //     render(<Sort />);

  //     const searchButton = screen.getByRole("link").parentElement?.parentElement;
  //     const buttonClass = searchButton.getAttribute("class");

  //     fireEvent.click(searchButton);

  //     expect(buttonClass).toMatch(/off/i);
  //   });

  test("unrenders the sort filtering options when the arrow is pressed", () => {
    render(<Sort />);

    const filterOptionsElement = screen.getByRole("heading", {
      name: "Sort Result By",
    }).parentElement;
    const arrowElement = screen.getByRole("heading", {
      name: "Sort",
    }).parentElement.lastChild;

    userEvent.click(arrowElement);

    expect(filterOptionsElement).not.toBeInTheDocument();
  });
});
