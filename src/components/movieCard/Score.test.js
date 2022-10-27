import { render, screen } from "@testing-library/react";
import Score from "./Score";

const { getByRole } = screen;

describe("Score component", () => {
  test("renders the score progress bar", () => {
    render(<Score />);

    const progressBarElement = getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
  });
});
