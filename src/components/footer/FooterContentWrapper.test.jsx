import { render, screen } from "@testing-library/react";
import { TITLES, CONTENT } from "constants/mock/MockFooterData";
import FooterContentWrapper from "components/footer/FooterContentWrapper";

const { getAllByRole } = screen;

beforeEach(() => {
  render(<FooterContentWrapper />);
});

describe("FooterContentWrapper component", () => {
  test("renders heading elements (h#) content", () => {
    const headingElements = getAllByRole("heading");
    headingElements.map((heading, idx) => expect(heading).toHaveTextContent(TITLES[idx]));
  });

  test("renders the items list's content", () => {
    const listItems = getAllByRole("listitem");
    listItems.map((item, idx) => expect(item).toHaveTextContent([].concat(...CONTENT)[idx]));
  });
});
