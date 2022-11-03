import { render, screen } from "@testing-library/react";
import MoviesList from "./MoviesList";

const { getByRole } = screen;

beforeEach(() => {
  render(<MoviesList />);
});

describe("MoreOptionsMenu component", () => {
  test("renders the options icon", async () => {
    let loadButton = getByRole("link", { name: "Load More" })
    expect(loadButton).toHaveTextContent("Load More")
  });
});