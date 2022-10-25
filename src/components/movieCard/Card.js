import { DEFAULT_IMG_PATH, IMAGE_URL_START } from "../../constants/Defults";
import { FONT, BACKGROUND } from "../../constants/style/StyleParams";
import PropTypes from "prop-types";
import MoreOptionsMenu from "./MoreOptionsMenu";
import styled from "styled-components";
import Score from "./Score";
import { useState, useEffect } from "react";

const API_KEY = "44d7e5b985c13f05c6230b397a75ac68";

const ContentWrapper = styled.div`
  width: 100%;
  padding: 26px 10px 12px 10px;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;

  & h2 {
    font-size: 1em;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
    font-weight: 600;
    padding: 0;
    box-sizing: border-box;

    & a {
      text-decoration: none;
      color: ${FONT.color.black};
    }
  }

  & p {
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
  }
`;

const HoverWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  z-index: 5;
  transition: linear 0.1s;
  opacity: 0;
`;

const ImageSection = styled.div`
  width: 100%;
  height: calc((100vw - 80px - 260px - (30px * 5)) / 5 * 1.5);
  max-height: calc((1400px - 80px - 260px - (30px * 5)) / 5 * 1.5);
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
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  width: calc((100vw - 80px - 260px - (30px * 5)) / 5);
  max-width: calc((1400px - 80px - 260px - (30px * 5)) / 5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: ${BACKGROUND.color.white};
`;

function Card({ filter, page, setProgress }) {
  const [fetchedMovies, setFetchedMovies] = useState(new Array(20).fill(0));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${filter}`
    )
      .then((response) => {
        setProgress(15);
        return response.json();
      })
      .then((data) => {
        // setProgress(45);

        return data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
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
          setToggle(true);
        }, 500);
      });
  }, [page, filter]);

  return (
    <>
      {fetchedMovies.map((movie) => {
        let imageSource;

        if (movie.image !== `${IMAGE_URL_START}null`) {
          imageSource = movie.image;
        }
        // else if (movie.backdrop_path !== `${IMAGE_URL_START}null`) {
        //   imageSource = movie.backdrop_path;
        // }

        return (
          <MovieCardWrapper key={movie.id}>
            <ImageSection>
              <ImageWrapper>
                <a href="">
                  {toggle && (
                    <img
                      placeholder="fetchIndecator"
                      src={imageSource}
                      alt={
                        !toggle ? "placeholder" : `${movie.title} ${movie.date}`
                      }
                    />
                  )}
                </a>
              </ImageWrapper>

              <MoreOptionsMenu />
            </ImageSection>
            <ContentWrapper>
              <Score score={!toggle ? 0 : movie.score} />

              <h2>
                <a href="">{!toggle ? "name" : movie.title}</a>
              </h2>
              <p>{!toggle ? "00-00-0000" : movie.date}</p>
            </ContentWrapper>
            <HoverWrapper />
          </MovieCardWrapper>
        );
      })}
    </>
  );
}

Card.propTypes = {
  filter: PropTypes.string,
  page: PropTypes.number,
  setProgress: PropTypes.func,
};

export default Card;