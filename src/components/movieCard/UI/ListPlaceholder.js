import {
  MovieCardWrapper,
  ImageSection,
  ImageWrapper,
  ContentWrapper,
  HoverWrapper,
} from "../Movies";

import { DEFAULT_IMG_PATH } from "../../../constants/Defults";

const PLACEHOLDER_ARR = new Array(20).fill(0);

function ListPlaceholder() {
  return (
    <>
      {PLACEHOLDER_ARR.map((item, idx) => {
        return (
          <MovieCardWrapper key={idx}>
            <ImageSection>
              <ImageWrapper>
                <a href="">
                  <img src={DEFAULT_IMG_PATH} alt={`placeholder`} />
                </a>
              </ImageWrapper>
            </ImageSection>
            <ContentWrapper>
              <h2>
                <a href="#">NAME</a>
              </h2>
              <p>00-00-0000</p>
            </ContentWrapper>
            <HoverWrapper />
          </MovieCardWrapper>
        );
      })}
    </>
  );
}

export default ListPlaceholder;
