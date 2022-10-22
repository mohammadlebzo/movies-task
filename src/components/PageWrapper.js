import styled from "styled-components";
import MoviesList from "./MoviesList";
import Header from "./header/Header";
import { useState, useRef, useCallback, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import Sort from "./filter/Sort";
import { BACKGROUND } from "../constants/style/StyleParams";

const MainWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex: 1 1 auto;
  min-height: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
`;

const MainTag = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: ${BACKGROUND.color.white};
  margin-top: 64px;
`;

const ContentSection = styled.section`
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
`;

const MediaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

const ColumnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
`;

const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`;

function PageWrapper() {
  const [filter, setFilter] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const [isShowen, setIsShowen] = useState(true);
  const [progress, setProgress] = useState(0);

  const [toggleScrollLoading, setToggleScrollLoading] = useState(false);
  const [allowLoading, setAllowLoading] = useState(false);

  const handleScrollLoading = useCallback(
    (e) => {
      const window = e.currentTarget;

      let top = e.target.documentElement.scrollTop;
      let winH = window.innerHeight;
      let overallH = e.target.documentElement.scrollHeight;

      if (top + winH >= Math.round(overallH * 0.92)) {
        setPage((prevpage) => prevpage + 1);
        setAllowLoading(false);
        setTimeout(() => setAllowLoading(true), 300);
      }
    },
    [window]
  );

  useEffect(() => {
    if (allowLoading) {
      window.addEventListener("scroll", handleScrollLoading);

      return () => {
        window.removeEventListener("scroll", handleScrollLoading);
      };
    }
  }, [allowLoading, handleScrollLoading]);

  return (
    <>
      <MainWrapper>
        <Header />
        {progress !== 100 && (
          <LoadingWrapper>
            <LinearProgress variant="determinate" value={progress} />
          </LoadingWrapper>
        )}

        <MainTag>
          <ContentSection>
            <MediaWrapper>
              <ColumnWrapper>
                <div>
                  <Title>
                    <h2>Popular Movies</h2>
                  </Title>

                  <Content>
                    <div>
                      <Sort
                        setFilter={setFilter}
                        setToggleScrollLoading={setToggleScrollLoading}
                        setAllowLoading={setAllowLoading}
                        setPage={setPage}
                      />
                    </div>

                    <div>
                      <MoviesList
                        filter={filter}
                        page={page}
                        setPage={setPage}
                        setProgress={setProgress}
                        setToggleScrollLoading={setToggleScrollLoading}
                        toggleScrollLoading={toggleScrollLoading}
                        setAllowLoading={setAllowLoading}
                      />
                    </div>
                  </Content>
                </div>
              </ColumnWrapper>
            </MediaWrapper>
          </ContentSection>
        </MainTag>
      </MainWrapper>
    </>
  );
}

export default PageWrapper;
