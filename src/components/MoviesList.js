import styled from "styled-components";
import Movies from "./Movies";
import Card from "./UI/Card";
import { useState } from "react";

const Wrapper = styled.div`
  margin-left: 30px;
  background: transparent;
  padding-right: 0;
  width: calc(100vw - 80px - 268px);
  max-width: calc(1400px - 80px - 268px);
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  color: #000;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1em;

  & section:last-of-type {
    padding-bottom: 0;
  }

  & section:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  & section {
    width: 100%;
    display: block;
    padding: 30px 0;

    & .mediaItems {
      margin-top: -30px;
    }

    & .page1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & .card {
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
        background-color: #fff;

        & .image {
          width: 100%;
          height: calc((100vw - 80px - 260px - (30px * 5)) / 5 * 1.5);
          max-height: calc((1400px - 80px - 260px - (30px * 5)) / 5 * 1.5);

          & .wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;

            & a {
              display: inline-block;
              width: 100%;
              height: 100%;
              color: #000;
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
          }

          & .options {
            position: absolute;
            top: 8px;
            right: 8px;
            z-index: 4;
            opacity: 0.6;

            & a {
              color: #000;
              text-decoration: none;
              font-weight: normal;
              background: transparent;

              & .circleMore {
                font-size: 1.6em;
                background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg);
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
              }
            }
          }
        }

        & .content {
          width: 100%;
          padding: 26px 10px 12px 10px;
          position: relative;
          white-space: normal;
          display: flex;
          align-content: flex-start;
          flex-wrap: wrap;
          align-items: flex-start;

          & .consensus {
            position: absolute;
            top: -19px;
            left: 10px;
            width: 38px;
            height: 38px;
            box-sizing: border-box;
            display: inline-block;
            transition: transform 0.2s;
            transform: scale(1);

            & .outerRing {
              margin-right: 0;
              width: 38px;
              height: 38px;
              padding: 2px;
              display: inline-block;
              border-radius: 50%;
              background-color: #081c22;

              & .userScore {
                position: relative;
                display: inline-block;
                width: 100%;
                height: 100%;
                text-align: center;

                & .percent {
                  width: 100%;
                  height: 100%;
                  z-index: 2;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  & span {
                    padding-top: 1px;
                    padding-left: 1px;
                    font-size: 0.6em;
                    color: #fff;
                  }
                }

                & canvas {
                  background-color: transparent;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }
            }
          }

          & h2 {
            font-size: 1em;
            margin: 0;
            width: 100%;
            overflow-wrap: break-word;
            font-weight: 600;
            padding: 0;
            box-sizing: border-box;
          }

          & p {
            font-size: 1em;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.6);
            box-sizing: border-box;
          }
        }

        & .hover {
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
        }
      }

      & .loadButton {
        margin-top: 30px;
        padding: 0;
        max-width: 100%;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: rgba(1, 180, 228, 1);
        color: #000;

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
            color: #fff;
            display: block;
            margin-left: 4px;
            margin-right: 4px;
            text-decoration: none;
            background: transparent;
          }
        }
      }
    }
  }
`;

function MoviesList(props) {
  return (
    <>
      <Wrapper>
        <section>
          <div className="mediaItems">
            <div className="page1">
            <Movies page={props.page} filter={props.filter} />
              <div className="loadButton">
                <p>
                  <a href="" onClick={(e) => {
                    e.preventDefault()
                    props.setPage(props.page + 1)
                  }}>Load More</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default MoviesList;
