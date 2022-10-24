import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageWrapper from "../components/PageWrapper";

describe("PageWrapper component", () => {
  // test("test", () => {
  //   render(<PageWrapper />);

  //   const testElement = screen.getByRole("");
  //   expect(testElement).toBeInTheDocument();
  // });

  test("renders main wrapper", () => {
    render(<PageWrapper />);

    const mainWrapperElement = screen.getByRole("main");
    expect(mainWrapperElement).toBeInTheDocument();
  });

  test("renders 'Popular Movies' as a heading", () => {
    render(<PageWrapper />);

    const popularMoviesHeading = screen.getByRole("heading", {
      name: "Popular Movies",
    });
    expect(popularMoviesHeading).toBeInTheDocument();
  });

  test("change the button color and preform the operation", () => {
    render(<PageWrapper />);

    const searchButton = screen.getByRole("link", { name: "Search" })
      .parentElement?.parentElement;
    const buttonClass = searchButton.getAttribute("class");

    fireEvent.click(searchButton);

    expect(buttonClass).toMatch(/off/i);
  });

  test("renders more movies when pressing 'load more' button", () => {
    render(<PageWrapper />);

    const loadMoreButton = screen.getByRole("link", { name: "Load More" });
    const loadMoreButtonContainer =
      loadMoreButton?.parentElement?.parentElement;

    userEvent.click(loadMoreButton);

    expect(loadMoreButtonContainer).not.toBeInTheDocument();
  });

  test("testing fetch data", () => {
    render(<PageWrapper />);

    const testID = screen.findAllByTestId("test");
    
    // console.log(testID);
    expect(testID).not.toHaveLength(0);
  });

  // test("renders more movies after pressing 'load more' button, and scrolling down near bottom", () => {
  //   render(<PageWrapper />);

  //   const loadMoreButton = screen.getByRole("link", { name: "Load More" });
  //   const loadMoreButtonContainer =
  //     loadMoreButton?.parentElement?.parentElement;
  //   const cardsContainer = loadMoreButtonContainer?.parentElement;

  //   console.log(cardsContainer);

  //   userEvent.click(loadMoreButton);

  //   fireEvent.scroll(window, { target: { scrollY: 2100 } });

  //   // expect(cardsContainer).toBe(2);
  // });


});
