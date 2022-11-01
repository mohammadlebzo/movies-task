import { render, screen } from "@testing-library/react";
import FilterCard from "./FiltersCard";
import userEvent from "@testing-library/user-event";

const { getByRole } = screen;

beforeEach(() => {
  render(<FilterCard />);
});

describe("FilterCard component", () => {
  test("renders 'Filters' heading text", () => {
    let heading = getByRole("heading", { name: "Filters" })
    let arrow = heading.parentElement.lastChild;

    userEvent.click(arrow);

    expect(heading).toHaveTextContent("Filters");
  });
});
