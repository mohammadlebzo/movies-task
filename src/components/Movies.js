import { useState, useEffect } from "react";

const API_KEY = "44d7e5b985c13f05c6230b397a75ac68";
const IMAGE_URL_START = "https://image.tmdb.org/t/p/w500";
const DEFAULT_IMG_PATH =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";

function Movies(props) {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  //   let test = [];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${props.page}&sort_by=${props.filter}`
    )
      .then((response) => response.json())
      .then((data) =>
        data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            date: item.release_date,
            image: IMAGE_URL_START + item.poster_path,
            score: item.vote_average,
            backdrop_path: IMAGE_URL_START + item.backdrop_path,
          };
        })
      )
      .then((filterdData) => {
        if (props.page === 1) {
          setFetchedMovies([...filterdData]);
        } else {
          setFetchedMovies([...fetchedMovies, ...filterdData]);
        }
      });
  }, [props.page, props.filter]);

  console.log(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${props.page}&sort_by=${props.filter}`
  );

  //   console.log(fetchedMovies);

  return (
    <>
      {fetchedMovies.map((movie) => {
        let imageSource = DEFAULT_IMG_PATH;

        if (movie.image !== `${IMAGE_URL_START}null`) {
          imageSource = movie.image;
        } else if (movie.backdrop_path !== `${IMAGE_URL_START}null`) {
          imageSource = movie.backdrop_path;
        }

        return (
          <div className="card" key={movie.id}>
            <div className="image">
              <div className="wrapper">
                <a href="">
                  <img src={imageSource} alt={`${movie.title} ${movie.date}`} />
                </a>
              </div>

              <div className="options">
                <a href="">
                  <div className="circleMore"></div>
                </a>
              </div>
            </div>
            <div className="content">
              {/* The score component: Still under construction, it might not work, will try later. */}
              <div className="consensus">
                <div className="outerRing">
                  <div
                    className="userScore"
                    data-percent="69.0"
                    data-track-color="#423d0f"
                    data-bar-color="#d2d531"
                  >
                    <div className="percent">
                      <span>{movie.score}</span>
                    </div>
                    <canvas></canvas>
                  </div>
                </div>
              </div>
              {/* The score component */}
              <h2>{movie.title}</h2>
              <p>{movie.date}</p>
            </div>
            <div className="hover"></div>
          </div>
        );
      })}
    </>
  );
}

export default Movies;
