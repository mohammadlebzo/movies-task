import {
  FONT,
  BACKGROUND,
  MEDIA,
  BORDER,
} from "../../constants/style/StyleParams";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState, useRef } from "react";

const CardController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 14px 16px;

  & h2 {
    font-size: 1.1em;
    margin: 0;
    padding: 0;
    font-weight: 600;
    box-sizing: border-box;
  }

  & span {
    background-image: url(${BACKGROUND.iconURL.closeArrow});
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1em;
    min-height: 1em;
    width: 1em;
    height: 1em;
    line-height: inherit;
    background-position: center center;
    background-repeat: no-repeat;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

const FilterSortCard = styled.div`
  min-width: 260px;
  width: 260px;
  border: 1px solid ${BORDER.color.lightGray};
  border-radius: ${BORDER.noraml};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 2px 8px ${BACKGROUND.color.veryLightBlack};
  background-color: ${BACKGROUND.color.white};

  @media screen and (${MEDIA.mobile}) {
    min-width: 100%;
    width: 100%;
  }
`;

const FilterContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${BORDER.color.veryLightGray};
  padding: 14px 16px 16px 16px;

  & h3 {
    display: inline-flex;
    align-items: center;
    width: 100%;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  & select {
    width: 100%;
    font-family: ${FONT.family.main};
    border-width: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.5;
    text-align: left;
    white-space: nowrap;
    display: inline-flex;
    vertical-align: middle;
    position: relative;

    margin: 0;
    padding: 0.375rem 0.75rem;
    min-width: 0;
    border: 0;
    box-shadow: none;
    color: inherit;

    background-color: ${BACKGROUND.color.grayBG1_base};
    border-radius: 4px;

    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
      border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    cursor: pointer;
  }

  & select:hover {
    background-color: ${BACKGROUND.color.grayBG1_hover};
  }
`;

const SearchButton = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 20px;
  height: 44px;

  & p {
    display: inline-flex;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 1em;
    box-sizing: border-box;

    & a {
      color: ${FONT.color.veryLightBlack};
      font-size: 1.2em;
      line-height: 1;
      font-weight: 600;
      width: 100%;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      align-content: center;
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

function Sort({ setFilter, setToggleScrollLoading, setAllowLoading, setPage }) {
  const [isShowen, setIsShowen] = useState(true);
  const [buttonClassName, setButtonClassName] = useState("off");
  const option = useRef();

  return (
    <>
      <FilterSortCard>
        <CardController>
          <h2>Sort</h2>
          <span
            style={isShowen ? { transform: "rotate(90deg)" } : {}}
            onClick={() => setIsShowen(!isShowen)}
          ></span>
        </CardController>
        {isShowen && (
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
              <option value="release_date.desc">Release Date Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
              <option value="original_title.asc">Title (A-Z)</option>
              <option value="original_title.desc">Title (Z-A)</option>
            </select>
          </FilterContainer>
        )}
      </FilterSortCard>
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
};

export default Sort;
