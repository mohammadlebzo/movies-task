import { render, screen, fireEvent } from "@testing-library/react";
import Score from "../../../components/movieCard/UI/Score";

describe("Score component", () => {
//   test("test", () => {
//     render(<Score />);

//     const testElement = screen.getByRole("");
//     expect(testElement).toBeInTheDocument();
//   });

  test("renders the score progress bar", () => {
    render(<Score />);

    const progressBarElement = screen.getByRole("progressbar");
    expect(progressBarElement).toBeInTheDocument();
  });
});
