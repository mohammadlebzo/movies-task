import { BACKGROUND, MEDIA, BORDER } from "../../constants/style/StyleParams";
import styled from "styled-components";
import { useState } from "react";

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

function WhereToWatchCard() {
  const [isShowen, setIsShowen] = useState(true);

  return (
    <>
      <FilterSortCard>
        <CardController>
          <h2>Where To Watch</h2>
          <span
            style={isShowen ? { transform: "rotate(0deg)" } : { transform: "rotate(90deg)" }}
            onClick={() => setIsShowen(!isShowen)}
          ></span>
        </CardController>
      </FilterSortCard>
    </>
  );
}

export default WhereToWatchCard;