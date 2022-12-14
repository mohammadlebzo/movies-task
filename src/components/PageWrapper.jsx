import { BACKGROUND, MEDIA } from "constants/style/StyleParams";
import Header from "components/header/Header";
import { LinearProgress } from "@mui/material";
import MoviesList from "components/MoviesList";
import styled from "styled-components";
import Sort from "components/filter/Sort";
import { useState, useRef, useCallback, useEffect } from "react";

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  background-position: 50% 50%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  align-content: flex-start;

  @media screen and (${MEDIA.mobile}) {
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  flex-wrap: wrap;
  max-width: 87.5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 0.625rem;

  @media screen and (${MEDIA.mobile}) {
    padding: 1.25rem;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;

  @media screen and (${MEDIA.mobile}) {
    flex-wrap: wrap;
  }
`;

const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const MainWrapper = styled.div`
  margin-bottom: 3.125rem;
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
  margin-top: 4rem;
`;

const MediaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  @media screen and (${MEDIA.mobile}) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const SortWrapperMobile = styled.div`
  @media screen and (${MEDIA.mobile}) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 0.188rem;

  & h2 {
    font-size: 1.6rem;
  }
`;

function PageWrapper() {
  const [allowLoading, setAllowLoading] = useState(false);
  const [filter, setFilter] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const [toggleScrollLoading, setToggleScrollLoading] = useState(false);
  const mainBody = useRef();

  const handleScrollLoading = useCallback(
    (e) => {
      const windowTwo = e.currentTarget;

      let top = window.pageYOffset;
      let winH = windowTwo.innerHeight;
      let overallH = mainBody.current.clientHeight;

      if (top + winH >= overallH * 0.92) {
        setPage((prevpage) => prevpage + 1);
        setAllowLoading(false);
      }
      setAllowLoading(true);
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
      <MainWrapper ref={mainBody}>
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
                <ContentWrapper>
                  <Title>
                    <h2>Popular Movies</h2>
                  </Title>

                  <Content>
                    <SortWrapperMobile>
                      <Sort
                        setFilter={setFilter}
                        setToggleScrollLoading={setToggleScrollLoading}
                        setAllowLoading={setAllowLoading}
                        setPage={setPage}
                        titles={["Sort", "Filters", "Where To Watch"]}
                      />
                    </SortWrapperMobile>

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
                </ContentWrapper>
              </ColumnWrapper>
            </MediaWrapper>
          </ContentSection>
        </MainTag>
      </MainWrapper>
    </>
  );
}

export default PageWrapper;
