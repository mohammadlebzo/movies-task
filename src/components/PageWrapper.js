import styled from "styled-components";
import MoviesList from "./MoviesList";
import Header from "./Header";
import { useState, useRef } from "react";

const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex: 1 1 auto;
  min-height: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;

  & main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background-color: #fff;
    margin-top: 64px;
  }

  & section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  & .media {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }

  & .colWrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    align-content: flex-start;
  }

  & .conWrapper {
  }

  & .title {
    width: 100%;
    margin-bottom: 20px;
  }

  & .content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
  }

  & .filterSort {
    min-width: 260px;
    width: 260px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    & .name {
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
        background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg);
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
    }

    & .filter {
      width: 100%;
      border-top: 1px solid #eee;
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
        font-family: "Source Sans Pro", Arial, sans-serif;
        border-width: 0;
        outline: 0;
        background: 0 0;
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

        background-color: #e4e7eb;
        border-radius: 4px;

        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
          border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

        cursor: pointer;
      }

      & select:hover {
        background-color: #ced3db;
      }
    }
  }

  & .searchButton {
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
        color: rgba(0, 0, 0, 0.5);
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
  }

  & .searchButton.on {
    background-color: rgba(1, 180, 228, 1);

    & a{
      color: #fff;
    }
  }

  & .searchButton.on:hover {
    background-color: rgba(3, 37, 65, 1)
  }

  & .searchButton.off {
    background-color: rgba(228,228,228,0.7);

    & a {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

function PageWrapper() {
  const [filter, setFilter] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const [isShowen, setIsShowen] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);
  const option = useRef();

  let test = "off";

  if (toggleButton == true) {
    test = "on";
  } else {
    test = "off";
  }

  return (
    <Wrapper>
      <Header />
      <main>
        <section>
          <div className="media">
            <div className="colWrapper">
              <div className="conWrapper">
                <div className="title">
                  <h2>Popular Movies</h2>
                </div>

                <div className="content">
                  <div>
                    <div className="filterSort">
                      <div className="name">
                        <h2>Sort</h2>
                        <span
                          style={isShowen ? { transform: "rotate(90deg)" } : {}}
                          onClick={() => setIsShowen(!isShowen)}
                        ></span>
                      </div>
                      {isShowen && (
                        <div className="filter">
                          <h3>Sort Result By</h3>
                          {/* [popularity.asc, popularity.desc, release_date.asc,
                        release_date.desc, revenue.asc, revenue.desc,
                        primary_release_date.asc, primary_release_date.desc,
                        original_title.asc, original_title.desc,
                        vote_average.asc, vote_average.desc, vote_count.asc,
                        vote_count.desc default: popularity.desc] */}
                          <select ref={option} name="sortBy" id="sortBy" onChange={() => setToggleButton(true)}>
                            <option value="popularity.desc">
                              Popularity Descending
                            </option>
                            <option value="popularity.asc">
                              Popularity Ascending
                            </option>
                            <option value="vote_average.desc">
                              Rating Descending
                            </option>
                            <option value="vote_average.asc">
                              Rating Ascending
                            </option>
                            <option value="release_date.desc">
                              Release Date Descending
                            </option>
                            <option value="release_date.asc">
                              Release Date Ascending
                            </option>
                            <option value="original_title.asc">
                              Title (A-Z)
                            </option>
                            <option value="original_title.desc">
                              Title (Z-A)
                            </option>
                          </select>
                        </div>
                      )}
                    </div>

                    <div
                      className={`searchButton ${test}`}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(option.current.value);
                        setFilter(option.current.value);
                        setPage(1);
                      }}
                    >
                      <p>
                        <a href="">Search</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <MoviesList filter={filter} page={page} setPage={setPage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}

export default PageWrapper;
