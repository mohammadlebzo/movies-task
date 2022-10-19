import styled from "styled-components";
import MoviesList from "./MoviesList";

const MainW = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: #fff;
  margin-top: 64px;
`;

const BodyWrapper = styled.section`
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

  & .contentWrapper {
    max-width: var(--maxPrimaryPageWidth);
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 30px;

    & .title {
    display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const SortCard = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-size: 14px;

  min-width: 260px;
  width: 260px;
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;

  & .sortTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    padding: 14px 16px;

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

      courser: pointer;
    }
  }

  & .sortOptions {
    width: 100%;
    border-top: 1px solid #eee;
    padding: 14px 16px 16px 16px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
`;

function MainWrapper() {
  return (
    <MainW>
      <BodyWrapper>
        <div>
          <div>
            <div className="contentWrapper">
              <ContentWrapper>
                <div className="title">
                  <h2>Popular Movies</h2>
                </div>
                <SortCard>
                  <div>
                    <div className="sortTitle">
                      <h2>Sort</h2>
                      <span></span>
                    </div>
                    <div className="sortOptions">
                      <h3>Sort Results By</h3>
                      <span></span>
                    </div>
                  </div>
                </SortCard>
                <div className="list">
                  <MoviesList />
                </div>
              </ContentWrapper>
            </div>
          </div>
        </div>
      </BodyWrapper>
    </MainW>
  );
}

export default MainWrapper;
