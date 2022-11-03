import { render, screen } from "@testing-library/react";
import Card from "components/movieCard/Card";
import { IMAGE_URL_START } from "constants/Defults";

const { findAllByAltText } = screen;

beforeEach(() => {
  render(<Card page={501} />);
});

describe("Card component", () => {
  test("renders empty images as there are no returned data", async () => {
    const innerImgs = await findAllByAltText("Movie Image");
    expect(innerImgs).not.toHaveLength(0);
    innerImgs.map((img) => expect(img).toHaveAttribute("src", IMAGE_URL_START));
  });
});
