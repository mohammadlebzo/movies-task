import { render, screen } from "@testing-library/react";
import MoreOptionsMenu from "./MoreOptionsMenu";

const { getByRole } = screen;

beforeEach(() => {
  render(<MoreOptionsMenu />);
});

describe("MoreOptionsMenu component", () => {
  test("renders the options icon", async () => {
    let optionsIcon = getByRole("link")
    expect(optionsIcon).toBeInTheDocument()
  });
});