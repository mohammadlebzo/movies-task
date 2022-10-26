import Card from "./movieCard/Card";
import { FONT, MEDIA } from "../constants/style/StyleParams";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (${MEDIA.mobile}) {
    margin-top: 20px;
  }
`;

const LoadButton = styled.div`
  margin-top: 30px;
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${FONT.color.lightBlue};
  color: ${FONT.color.black};

  flex-wrap: wrap;
  align-content: center;

  & p {
    justify-content: center;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    font-size: 1em;
    box-sizing: border-box;

    & a {
      font-size: 1.5em;
      font-weight: 700;
      color: ${FONT.color.white};
      display: block;
      margin-left: 4px;
      margin-right: 4px;
      text-decoration: none;
      background: transparent;
    }
  }
`;

const MainListWrapper = styled.div`
  padding-left: 30px;
  background: transparent;
  padding-right: 0;
  width: calc(100vw - 80px - 268px);
  max-width: calc(1400px - 80px - 268px);
  display: flex;
  flex-wrap: wrap;

  color: #000;
  font-family: ${FONT.family.main};
  font-size: 1em;

  @media screen and (${MEDIA.mobile}) {
    width: calc(100vw - 40px);
    margin-top: 20px;
    padding: 0;
    max-width: 100vw;
    height: auto;
    min-height: 0;
    justify-content: flex-start;
  }
`;

const MoviesSectionWrapper = styled.section`
  width: 100%;
  display: block;
  padding: 30px 0;

  &:last-of-type {
    padding-bottom: 0;
  }

  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  @media screen and (${MEDIA.mobile}) {
    width: 100vw;
    display: block;

    &:last-of-type {
      padding: 0;
    } 
    
    &:first-of-type {
      border-top: none;
    } 
  }
`;

const MediaItems = styled.div`
  margin-top: -30px;

  @media screen and (${MEDIA.mobile}) {
    margin: 0;
  }
`;

function MoviesList({
  filter,
  page,
  setPage,
  setProgress,
  setToggleScrollLoading,
  setAllowLoading,
  toggleScrollLoading,
}) {
  return (
    <>
      <MainListWrapper>
        <MoviesSectionWrapper>
          <MediaItems>
            <CardsWrapper page={page}>
              <Card page={page} filter={filter} setProgress={setProgress} />
              {!toggleScrollLoading && (
                <LoadButton>
                  <p>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        setToggleScrollLoading(true);
                        setAllowLoading(true);
                        setPage(page + 1);
                      }}
                    >
                      Load More
                    </a>
                  </p>
                </LoadButton>
              )}
            </CardsWrapper>
          </MediaItems>
        </MoviesSectionWrapper>
      </MainListWrapper>
    </>
  );
}

MoviesList.propTypes = {
  filter: PropTypes.string,
  page: PropTypes.number,
  setPage: PropTypes.func,
  setProgress: PropTypes.func,
  setToggleScrollLoading: PropTypes.func,
  setAllowLoading: PropTypes.func,
  toggleScrollLoading: PropTypes.bool,
};

export default MoviesList;
