import { render, screen, fireEvent } from "@testing-library/react";
import MoreOptionsMenu from "../../../components/movieCard/UI/MoreOptionsMenu";

describe("MoreOptionsMenu component", () => {
//   test("test", () => {
//     render(<MoreOptionsMenu />);

//     const testElement = screen.getByRole("");
//     expect(testElement).toBeInTheDocument();
//   });

  test("renders the link that has the icon of a more options menu", () => {
    render(<MoreOptionsMenu />);

    const moreOptionsMenu = screen.getByRole("link");
    expect(moreOptionsMenu).toBeInTheDocument();
  });
});
