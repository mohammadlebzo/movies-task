import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageWrapper from "./PageWrapper";
import { IMAGE_URL_START, DEFAULT_IMG_PATH } from "../constants/Defults";

const { getByRole, findAllByPlaceholderText } = screen;

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

    fireEvent.click(searchButton);

    expect(buttonClass).toMatch(/off/i);
  });

  test("renders more movies when pressing 'load more' button", () => {
    render(<PageWrapper />);

    const loadMoreButton = getByRole("link", { name: "Load More" });
    const loadMoreButtonContainer =
      loadMoreButton?.parentElement?.parentElement;

    userEvent.click(loadMoreButton);

    expect(loadMoreButtonContainer).not.toBeInTheDocument();
  });

  test("renders fetched data, and checks format", async () => {
    render(<PageWrapper />);

    const fetchedDataInnerImg = await findAllByPlaceholderText(
      "fetchIndecator"
    );

    expect(fetchedDataInnerImg).not.toHaveLength(0);

    fetchedDataInnerImg.map((image) => {
      let imageSrc = image.getAttribute("src");

      expect(imageSrc).toMatch(new RegExp(IMAGE_URL_START, "i"));
    });

    // const comboBox = getByRole("combobox");
    // userEvent.selectOptions(
    //   comboBox,
    //   getByRole("option", { name: "Rating Ascending" })
    // );

    // const fetchedDataInnerImgAfter = await findAllByPlaceholderText(
    //   "fetchIndecator"
    // );

    // fetchedDataInnerImgAfter.map((image) => {
    //   let imageSrc = image.getAttribute("src");

    //   expect(imageSrc).toMatch(new RegExp(IMAGE_URL_START, "i"));
    // });
  });

  test("renders more data after the button", async () => {
    render(<PageWrapper />);

    const fetchedDataInnerImgBefore = await findAllByPlaceholderText(
      "fetchIndecator"
    );

    const loadMoreButton = screen.getByRole("link", { name: "Load More" });
    fireEvent.click(loadMoreButton);

    const fetchedDataInnerImgAfter = await findAllByPlaceholderText(
      "fetchIndecator"
    );

    expect(fetchedDataInnerImgAfter).not.toBe(fetchedDataInnerImgBefore);
  });

  test("renders more movies after pressing 'load more' button, and scrolling down near bottom", async () => {
    render(<PageWrapper />);

    const fetchedDataInnerImgBefore = await screen.findAllByPlaceholderText(
      "fetchIndecator"
    );

    const loadMoreButton = screen.getByRole("link", { name: "Load More" });
    fireEvent.click(loadMoreButton);

    const fetchedDataInnerImgMid = await screen.findAllByPlaceholderText(
      "fetchIndecator"
    );

    expect(fetchedDataInnerImgMid).not.toBe(fetchedDataInnerImgBefore);

    await fireEvent.scroll(window, { target: { scrollY: 2800 } });

    const fetchedDataInnerImgAfter = await screen.findAllByPlaceholderText(
      "fetchIndecator"
    );

    expect(fetchedDataInnerImgAfter).not.toBe(fetchedDataInnerImgMid);

    // expect(cardsContainer).toBe(2);
  });
});
