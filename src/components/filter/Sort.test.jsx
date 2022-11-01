import { render, screen } from "@testing-library/react";
import Sort from "./Sort";
import userEvent from "@testing-library/user-event";

const { getByRole } = screen;

const elements = {
  comboBox: () => getByRole("combobox"),
  sortHeading: () => getByRole("heading", { name: "Sort" }),
  sortResultByHeading: () => getByRole("heading", { name: "Sort Result By" }),
};

beforeEach(() => {
  render(<Sort />);
});

describe("Sort component", () => {
  test("renders 'Sort' heading text", () => {
    expect(elements.sortHeading()).toHaveTextContent("Sort");
  });

  test("renders 'Sort Result By' heading text", () => {
    expect(elements.sortResultByHeading()).toHaveTextContent("Sort Result By");
  });

  test("unrenders the sort filtering options when the arrow is pressed", () => {
    const filterOptionsElement = elements.sortResultByHeading().parentElement;
    const arrowElement = elements.sortHeading().parentElement.lastChild;

    userEvent.click(arrowElement);

    expect(filterOptionsElement).not.toBeInTheDocument();
  });
});
