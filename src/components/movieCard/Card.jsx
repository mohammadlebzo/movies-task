import { IMAGE_URL_START } from "constants/Defults";
import {
  FONT,
  BACKGROUND,
  MEDIA,
  BORDER,
} from "constants/style/StyleParams";
import PropTypes from "prop-types";
import MoreOptionsMenu from "components/movieCard/MoreOptionsMenu";
import styled from "styled-components";
import Score from "components/movieCard/Score";
import { useState, useEffect } from "react";

const API_KEY = "44d7e5b985c13f05c6230b397a75ac68";

const ContentWrapper = styled.div`
  width: 100%;
  padding: 1.625rem 0.625rem 0.75rem 0.625rem;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;

  & h2 {
    font-size: 1.1rem;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
    font-weight: 800;
    padding: 0;

    & a {
      text-decoration: none;
      color: ${FONT.color.black};
    }
  }

  & h2 a:hover {
    color: ${FONT.color.lightBlue}
  }

  & p {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: ${FONT.color.veryLightBlack};
    box-sizing: border-box;
  }

  @media screen and (${MEDIA.mobile}) {
    display: none;
  }
`;

const ContentWrapperMobile = styled.div`
  display: none;

  @media screen and (${MEDIA.mobile}) {
    padding: 0.875rem;
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
  }
`;

const CardDetailsWrapper = styled.div`
  width: calc(100vw - 2.625rem);
  max-width: calc(100vw - 2.625rem);
  display: flex;
`;

const HoverWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${BACKGROUND.color.veryLightBlack_Dot5};
  width: 100%;
  height: 100%;
  border-radius: ${BORDER.radius.default};
  z-index: 5;
  transition: linear 0.1s;
  opacity: 0;
`;

const InnerContentWrapperMobile = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
`;

const ImageSection = styled.div`
  width: 100%;
  height: calc((100vw - 5rem - 16.25rem - (1.875rem * 5)) / 5 * 1.5);
  max-height: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 5)) / 5 * 1.5);

  @media screen and (${MEDIA.renderFourCards}) {
    height: calc((100vw - 5rem - 16.25rem - (1.875rem * 4)) / 4 * 1.5);
    max-height: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 4)) / 4 * 1.5);
  }

  @media screen and (${MEDIA.renderThreeCards}) {
    height: calc((100vw - 5rem - 16.25rem - (1.875rem * 3)) / 3 * 1.5);
    max-height: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 3)) / 3 * 1.5);
  }

  @media screen and (${MEDIA.renderTwoCards}) {
    height: calc((100vw - 5rem - 16.25rem - (1.875rem * 2)) / 2 * 1.5);
    max-height: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 2)) / 2 * 1.5);
  }

  @media screen and (${MEDIA.renderOneCard}) {
    height: calc((100vw - 5rem - 16.25rem - (1.875rem * 1)) / 1 * 1.5);
    max-height: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 1)) / 1 * 1.5);
  }

  @media screen and (${MEDIA.mobile}) {
    min-width: 5.875rem;
    width: 5.875rem;
    height: 8.813rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;

  & a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: ${FONT.color.black};
    text-decoration: none;
    font-weight: normal;

    & img {
      display: inline-block;
      width: 100%;
      height: 100%;
      outline: none;
      border: 0;
      border-radius: ${BORDER.radius.mobile} 0 0 ${BORDER.radius.mobile};
    }
  }

  @media screen and (${MEDIA.mobile}) {
    width: 100%;
    height: 100%;

    & a {
      display: block;

      & img {
        min-width: 100%;
        display: block;
        outline: none;
        box-sizing: border-box;
        border: 0;
      }
    }
  }
`;

const MovieCardWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 0.063rem solid ${BORDER.color.lightGray};
  border-radius: ${BORDER.radius.default} ;
  overflow: hidden;
  margin-top: 1.875rem;
  width: calc((100vw - 5rem - 16.25rem - (1.875rem * 5)) / 5);
  max-width: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 5)) / 5);
  box-shadow: 0 0.125rem 0.5rem ${BACKGROUND.color.veryLightBlack};
  background-color: ${BACKGROUND.color.white};

  min-height: 23.313rem;

  @media screen and (${MEDIA.renderFourCards}) {
    width: calc((100vw - 5rem - 16.25rem - (1.875rem * 4)) / 4);
    max-width: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 4)) / 4);
  }

  @media screen and (${MEDIA.renderThreeCards}) {
    width: calc((100vw - 5rem - 16.25rem - (1.875rem * 3)) / 3);
    max-width: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 3)) / 3);
  }

  @media screen and (${MEDIA.renderTwoCards}) {
    width: calc((100vw - 5rem - 16.25rem - (1.875rem * 2)) / 2);
    max-width: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 2)) / 2);
  }

  @media screen and (${MEDIA.renderOneCard}) {
    width: calc((100vw - 5rem - 16.25rem - (1.875rem * 1)) / 1);
    max-width: calc((87.5rem - 5rem - 16.25rem - (1.875rem * 1)) / 1);
  }

  @media screen and (${MEDIA.mobile}) {
    display: none;
    }
  }
`;

const MovieCardWrapperMobile = styled.div`
  display: none;

  @media screen and (${MEDIA.mobile}) {
    display: flex;
    margin-top: 1.25rem;
    width: 100%;
    border-radius: ${BORDER.radius.mobile};
    box-shadow: 0 0.125rem 0.5rem ${BACKGROUND.color.veryLightBlack};
    border: 0.063rem solid ${BORDER.color.lightGray};
    background-color: ${BACKGROUND.color.white};

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const OverviewMobile = styled.div`
  max-height: 3.2rem;
  height: auto;
  margin-top: 1.25rem;

  & p {
    font-size: 0.8rem;
    line-height: 1.1rem;
    display: -webkit-box;
    line-clamp: 2;
    box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    color: ${FONT.color.black};

    padding-left: 0;
    padding-right: 0;
    box-sizing: border-box;
  }
`;

const TitleWrapperMobile = styled.div`
  width: 100%;
  align-items: baseline;
  overflow: hidden;

  & div {
    width: 100%;
    line-height: 100%;

    & a {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${FONT.color.white};
      text-decoration: none;
      font-weight: normal;

      & h2 {
        display: block;
        font-size: 1rem;
        margin: 0;
        white-space: normal;
        overflow: visible;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        width: 100%;
        padding: 0;
        font-weight: 600;
        box-sizing: border-box;
        color: ${FONT.color.black};
      }
    }
  }

  & span {
    margin-left: 0;
    font-size: 0.9rem;
    white-space: nowrap;
    color: ${FONT.color.mediumLightGray};
  }
`;

function Card({ filter, page, setProgress }) {
  const [fetchedMovies, setFetchedMovies] = useState(new Array(20).fill(0));

  useEffect(() => {
    if (page >= 500) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${filter}`
    )
      .then((response) => {
        setProgress(15);
        return response.json();
      })
      .then((data) => {
        return data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            overview:
              item.overview.length < 85
                ? item.overview
                : `${item.overview.substring(0, 73)}...`,
            date: item.release_date,
            image: IMAGE_URL_START + item.poster_path,
            score: item.vote_average,
            backdrop_path: IMAGE_URL_START + item.backdrop_path,
          };
        });
      })
      .then((filterdData) => {
        setProgress(65);
        setProgress(75);

        setTimeout(() => {
          if (page === 1) {
            setFetchedMovies([...filterdData]);
          } else {
            setFetchedMovies([...fetchedMovies, ...filterdData]);
          }
          setProgress(100);
        }, 500);
      });
  }, [page, filter]);

  return fetchedMovies.map((movie) => {
    let filteredDate = `${new Date(movie.date).toLocaleString("default", {
      month: "long",
      day: "numeric",
    })}, ${new Date(movie.date).toLocaleString("default", {
      year: "numeric",
    })}`;
    let imageSource = null;

    if (movie.image !== `${IMAGE_URL_START}null`) {
      imageSource = movie.image;
    }

    return (
      <div key={movie["id"]}>
        <MovieCardWrapper key={movie["id"]}>
          <ImageSection>
            <ImageWrapper>
              <a href="">
                <img src={imageSource ?? IMAGE_URL_START} alt="Movie Image" />
              </a>
            </ImageWrapper>

            <MoreOptionsMenu />
          </ImageSection>
          <ContentWrapper>
            <Score score={movie.score ?? 0} />

            <h2>
              <a href="">{movie.title ?? "name"}</a>
            </h2>
            <p>{filteredDate ?? "may 00, 0000"}</p>
          </ContentWrapper>
          <HoverWrapper />
        </MovieCardWrapper>

        {/* Mobile render */}

        <MovieCardWrapperMobile key={`${movie.id}m`}>
          <CardDetailsWrapper>
            <ImageSection>
              <ImageWrapper>
                <a href="">
                  <img src={imageSource ?? IMAGE_URL_START} alt="Movie Image" />
                </a>
              </ImageWrapper>
            </ImageSection>
            <ContentWrapperMobile>
              <InnerContentWrapperMobile>
                <TitleWrapperMobile>
                  <div>
                    <a href="">
                      <h2>{movie.title ?? "name"}</h2>
                    </a>
                  </div>

                  <span>{filteredDate ?? "may 00, 0000"}</span>
                </TitleWrapperMobile>
              </InnerContentWrapperMobile>

              <OverviewMobile>
                <p>{movie.overview ?? "overview"}</p>
              </OverviewMobile>
            </ContentWrapperMobile>
          </CardDetailsWrapper>
        </MovieCardWrapperMobile>

        {/* Mobile render */}
      </div>
    );
  });
}

Card.propTypes = {
  filter: PropTypes.string,
  page: PropTypes.number,
  setProgress: PropTypes.func,
};

export default Card;
