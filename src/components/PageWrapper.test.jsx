import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageWrapper from "./PageWrapper";
import { IMAGE_URL_START } from "../constants/Defults";
import { MOCKDATA } from "../constants/mock/mockFetchData";
import { act } from "react-dom/test-utils";

const { getByRole, findAllByAltText } = screen;
const elements = {
  loadLink: () => getByRole("link", { name: "Load More" }),
  cardInnerImg: async () => await findAllByAltText("Movie Image"),
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCKDATA),
    })
  );

  render(<PageWrapper />);

  jest.useFakeTimers();
});

describe("PageWrapper component", () => {
  test("renders 'Popular Movies' as a heading", () => {
    const popularMoviesHeading = getByRole("heading", {
      name: "Popular Movies",
    });
    expect(popularMoviesHeading).toHaveTextContent("Popular Movies");
  });

  test("change the button color and preform the operation", () => {
    const combobox = getByRole("combobox");

    act(() => userEvent.selectOptions(
      combobox,
      getByRole("option", { name: "Rating Descending" })
    ));

    const searchButton = getByRole("link", { name: "Search" }).parentElement
      ?.parentElement;

    act(() => userEvent.click(searchButton));

    expect(combobox).toHaveValue("vote_average.desc");
  });

  test("renders more movies when pressing 'load more' button", () => {
    act(() => jest.runAllTimers());

    const loadMore = getByRole("link", { name: "Load More" });
    act(() => userEvent.click(loadMore));

    expect(loadMore).not.toBeInTheDocument();
  });

  test("renders fetched data, and checks format", async () => {
    act(() => jest.runAllTimers());

    const fetchedData = await elements.cardInnerImg();

    expect(fetchedData).not.toHaveLength(0);

    fetchedData.map((image) => {
      let imageSrc = image.getAttribute("src");

      expect(imageSrc).toMatch(new RegExp(IMAGE_URL_START, "i"));
    });
  });

  test("renders more data after the button", async () => {
    const fetchedDataBefore = await elements.cardInnerImg();

    const loadMoreButton = getByRole("link", { name: "Load More" });
    act(() => userEvent.click(loadMoreButton));

    const fetchedDataAfter = await elements.cardInnerImg();

    expect(fetchedDataAfter).not.toBe(fetchedDataBefore);
  });

  test("renders more movies after pressing 'load more' button, and scrolling down near bottom", async () => {
    const fetchedDataBefore = await elements.cardInnerImg();

    const loadMoreButton = getByRole("link", { name: "Load More" });
    act(() => userEvent.click(loadMoreButton));

    const fetchedDataMid = await elements.cardInnerImg();

    expect(fetchedDataMid).not.toBe(fetchedDataBefore);

    await fireEvent.scroll(window, { target: { scrollY: 2800 } });

    const fetchedDataAfter = await elements.cardInnerImg();

    expect(fetchedDataAfter).not.toBe(fetchedDataMid);
  });
});
