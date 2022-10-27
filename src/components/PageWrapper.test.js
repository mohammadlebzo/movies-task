import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageWrapper from "./PageWrapper";
import {
  IMAGE_URL_START,
  TESTJSON,
} from "../constants/Defults";

const { getByRole, findAllByTestId } = screen;
const elements = {
  loadLink: ()=> getByRole("link", { name: "Load More" }),
};

describe("PageWrapper component", () => {
  test("renders main wrapper", () => {
    render(<PageWrapper />);

    const mainWrapperElement = getByRole("main");
    expect(mainWrapperElement).toBeInTheDocument();
  });

  test("renders 'Popular Movies' as a heading", () => {
    render(<PageWrapper />);

    const popularMoviesHeading = getByRole("heading", {
      name: "Popular Movies",
    });
    expect(popularMoviesHeading).toBeInTheDocument();
  });

  test("change the button color and preform the operation", () => {
    render(<PageWrapper />);

    const searchButton = getByRole("link", { name: "Search" }).parentElement
      ?.parentElement;
    const buttonClass = searchButton.getAttribute("class");

    userEvent.click(searchButton);

    expect(buttonClass).toMatch(/off/i);
  });

  test("renders more movies when pressing 'load more' button", () => {
    render(<PageWrapper />);

    // const loadMoreButton = getByRole("link", { name: "Load More" });
    // const loadMoreButtonContainer =
    //   loadMoreButton?.parentElement?.parentElement;

    userEvent.click(elements.loadLink());

    expect(elements.loadLink()).not.toBeInTheDocument();
  });

  test("renders fetched data, and checks format", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(TESTJSON),
      })
    );

    render(<PageWrapper />);

    const fetchedDataInnerImg = await findAllByTestId("custom-element");

    expect(fetchedDataInnerImg).not.toHaveLength(0);

    fetchedDataInnerImg.map((image) => {
      let imageSrc = image.getAttribute("src");

      expect(imageSrc).toMatch(new RegExp(IMAGE_URL_START, "i"));
    });
  });

  test("renders more data after the button", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(TESTJSON),
      })
    );

    render(<PageWrapper />);

    const fetchedDataInnerImgBefore = await findAllByTestId("custom-element");

    const loadMoreButton = getByRole("link", { name: "Load More" });
    userEvent.click(loadMoreButton);

    const fetchedDataInnerImgAfter = await findAllByTestId("custom-element");

    expect(fetchedDataInnerImgAfter).not.toBe(fetchedDataInnerImgBefore);
  });

  test("renders more movies after pressing 'load more' button, and scrolling down near bottom", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(TESTJSON),
      })
    );

    render(<PageWrapper />);

    const fetchedDataInnerImgBefore = await findAllByTestId("custom-element");

    const loadMoreButton = getByRole("link", { name: "Load More" });
    userEvent.click(loadMoreButton);

    const fetchedDataInnerImgMid = await findAllByTestId("custom-element");

    expect(fetchedDataInnerImgMid).not.toBe(fetchedDataInnerImgBefore);

    await fireEvent.scroll(window, { target: { scrollY: 2800 } });

    const fetchedDataInnerImgAfter = await findAllByTestId("custom-element");

    expect(fetchedDataInnerImgAfter).not.toBe(fetchedDataInnerImgMid);
  });
});
