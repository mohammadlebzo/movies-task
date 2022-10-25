import { render, screen } from "@testing-library/react";
import MoreOptionsMenu from "./MoreOptionsMenu";

const { getByRole } = screen;

describe("MoreOptionsMenu component", () => {

  test("renders the link that has the icon of a more options menu", () => {
    render(<MoreOptionsMenu />);

    const moreOptionsMenu = getByRole("link");
    expect(moreOptionsMenu).toBeInTheDocument();
  });
});
