import {
  FONT,
  BACKGROUND,
  MEDIA,
  BORDER,
} from "constants/style/StyleParams";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState, useRef } from "react";

const CardController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.875rem 1rem;

  & h2 {
    font-size: 1.1rem;
    margin: 0;
    font-weight: 600;
  }

  & span {
    background-image: url(${BACKGROUND.iconURL.closeArrow});
    position: relative;
    top: 0;
    left: 0;
    min-width: 0.9rem;
    min-height: 0.9rem;
    width: 0.9rem;
    height: 0.9rem;
    cursor: pointer;
  }
`;

const FilterSortCard = styled.div`
  &:first-of-type {
    margin-top: 0;
  }

  margin-top: 0.75rem;
  min-width: 16.25rem;
  width: 16.25rem;
  border: 0.063rem solid ${BORDER.color.lightGray};
  border-radius: ${BORDER.radius.default};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.5rem ${BACKGROUND.color.veryLightBlack};
  background-color: ${BACKGROUND.color.white};

  @media screen and (${MEDIA.mobile}) {
    min-width: 100%;
    width: 100%;
  }
`;

const FilterContainer = styled.div`
  border-top: 0.063rem solid ${BORDER.color.veryLightGray};
  padding: 0.2rem 1rem 1rem 1rem;

  & h3 {
    display: inline-flex;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.625rem;
  }

  & select {
    width: 100%;
    font-family: ${FONT.family.main};
    font-size: 0.9rem;
    font-weight: 500;
    border-width: 0;
    outline: 0;
    position: relative;
    padding: 0.375rem 0.75rem;

    background-color: ${BACKGROUND.color.grayBG1_base};
    border-radius: 0.25rem;

    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
      border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    cursor: pointer;

    & option {
      background-color: ${BACKGROUND.color.white};
      font-weight: 600;
    }

    & option:hover {
      background-color: ${BACKGROUND.color.grayBG1_hover};
    }
  }

  & select:hover {
    background-color: ${BACKGROUND.color.grayBG1_hover};
  }

  @media screen and (${MEDIA.mobile}) {
    width: 100%;
  }
`;

const SearchButton = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  height: 2.75rem;

  & p {
    & a {
      color: ${FONT.color.veryLightBlack};
      font-size: 1.2em;
      font-weight: 600;
      text-decoration: none;
    }
  }

  &.on {
    background-color: ${BACKGROUND.color.lightBlue};

    & a {
      color: ${FONT.color.white};
    }
  }

  &.on:hover {
    background-color: ${BACKGROUND.color.darkBlue};
  }

  &.off {
    background-color: ${BACKGROUND.color.grayBG1_base};

    & a {
      color: ${FONT.color.veryLightBlack};
    }
  }
`;

function Sort({
  setFilter,
  setToggleScrollLoading,
  setAllowLoading,
  setPage,
  titles,
}) {
  const [isShowen, setIsShowen] = useState(true);
  const [buttonClassName, setButtonClassName] = useState("off");
  const option = useRef();

  return (
    <>
      {titles.map((title, idx) => {
        return (
          <FilterSortCard key={idx}>
            <CardController>
              <h2>{title}</h2>
              <span
                style={
                  title === "Sort"
                    ? isShowen
                      ? { transform: "rotate(90deg)" }
                      : {}
                    : { transform: "rotate(0deg)" }
                }
                onClick={title === "Sort" ? () => setIsShowen(!isShowen) : ""}
              ></span>
            </CardController>
            {title === "Sort" && isShowen && (
              <FilterContainer>
                <h3>Sort Result By</h3>

                <select
                  ref={option}
                  name="sortBy"
                  id="sortBy"
                  onChange={() => setButtonClassName("on")}
                >
                  <option value="popularity.desc">Popularity Descending</option>
                  <option value="popularity.asc">Popularity Ascending</option>
                  <option value="vote_average.desc">Rating Descending</option>
                  <option value="vote_average.asc">Rating Ascending</option>
                  <option value="release_date.desc">
                    Release Date Descending
                  </option>
                  <option value="release_date.asc">
                    Release Date Ascending
                  </option>
                  <option value="original_title.asc">Title (A-Z)</option>
                  <option value="original_title.desc">Title (Z-A)</option>
                </select>
              </FilterContainer>
            )}
          </FilterSortCard>
        );
      })}

      <SearchButton
        className={`${buttonClassName}`}
        onClick={(e) => {
          e.preventDefault();

          setButtonClassName("off");
          setFilter(option.current.value);
          setToggleScrollLoading(false);
          setAllowLoading(false);
          setPage(1);
        }}
      >
        <p>
          <a href="">Search</a>
        </p>
      </SearchButton>
    </>
  );
}

Sort.propTypes = {
  setFilter: PropTypes.func,
  setToggleScrollLoading: PropTypes.func,
  setAllowLoading: PropTypes.func,
  setPage: PropTypes.func,
  titles: PropTypes.array,
};

export default Sort;
