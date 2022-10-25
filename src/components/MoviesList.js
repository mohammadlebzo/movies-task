import Card from "./movieCard/Card";
import { FONT } from "../constants/style/StyleParams";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
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
  margin-left: 30px;
  background: transparent;
  padding-right: 0;
  width: calc(100vw - 80px - 268px);
  max-width: calc(1400px - 80px - 268px);
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  color: #000;
  font-family: ${FONT.family.main};
  font-size: 1em;

  & section:last-of-type {
    padding-bottom: 0;
  }

  & section:first-of-type {
    border-top: none;
    padding-top: 0;
  }
`;

const MoviesSectionWrapper = styled.section`
  width: 100%;
  display: block;
  padding: 30px 0;
`;

const MediaItems = styled.div`
  margin-top: -30px;
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
            <CardsWrapper page={page} style={{flexWrap: "wrap"}}>
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