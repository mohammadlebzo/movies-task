import { render, screen } from "@testing-library/react";
import Sort from "./Sort";
import userEvent from "@testing-library/user-event";

const { getByRole, getAllByRole } = screen;

// const elements = {
//   comboBox: () => getByRole("combobox"),
//   searchButton: () => getByRole("link"),
// };

describe("Sort component", () => {
  test("renders the headings", () => {
    render(<Sort />);

    const headingElements = getAllByRole("heading");
    headingElements.map((heading) => expect(heading).toBeInTheDocument());
  });

  test("renders the combobox", () => {
    render(<Sort />);

    const comboBox = getByRole("combobox");

    expect(comboBox).toBeInTheDocument();
  });

  test("renders the combobox options", () => {
    render(<Sort />);

    const comboboxElementOptions = getAllByRole("option");
    comboboxElementOptions.map((option) => expect(option).toBeInTheDocument());
  });

  test("renders a link tag", () => {
    render(<Sort />);

    const searchButton = getByRole("link");

    expect(searchButton).toBeInTheDocument();
  });

  test("changes button color when an oprtion is selected from the combobox", () => {
    render(<Sort />);

    const comboBox = getByRole("combobox");
    userEvent.selectOptions(
      comboBox,
      getByRole("option", { name: "Rating Descending" })
    );

    const searchButton = getByRole("link");
    const buttonClass =
      searchButton.parentElement?.parentElement.getAttribute("class");

    expect(buttonClass).toMatch(/on/i);
  });

  test("unrenders the sort filtering options when the arrow is pressed", () => {
    render(<Sort />);

    const filterOptionsElement = getByRole("heading", {
      name: "Sort Result By",
    }).parentElement;
    const arrowElement = getByRole("heading", {
      name: "Sort",
    }).parentElement.lastChild;

    userEvent.click(arrowElement);

    expect(filterOptionsElement).not.toBeInTheDocument();
  });
});
