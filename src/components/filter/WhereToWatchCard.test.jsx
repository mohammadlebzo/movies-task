import { render, screen } from "@testing-library/react";
import WhereToWatchCard from "./WhereToWatchCard";
import userEvent from "@testing-library/user-event";

const { getByRole } = screen;

beforeEach(() => {
  render(<WhereToWatchCard />);
});

describe("WhereToWatchCard component", () => {
  test("renders 'Where To Watch' heading text", () => {
    let heading = getByRole("heading", { name: "Where To Watch" })
    let arrow = heading.parentElement.lastChild;

    userEvent.click(arrow);

    expect(getByRole("heading", { name: "Where To Watch" })).toHaveTextContent("Where To Watch");
  });
});
