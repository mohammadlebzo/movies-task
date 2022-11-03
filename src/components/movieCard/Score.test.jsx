import { render, screen } from "@testing-library/react";
import Score from "./Score";

const { getByText } = screen;

beforeEach(() => {
  render(<Score score={50} />);
});

describe("Score component", () => {
  test("renders the returned score", async () => {
    let score = getByText("500")
    expect(score).toBeInTheDocument()
  });
});
