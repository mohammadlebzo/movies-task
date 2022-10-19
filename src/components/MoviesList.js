import styled from "styled-components";
import Card from "./UI/Card";

const WrapperTest = styled.div`
  padding-left: 30px;
  background: transparent;
  padding-right: 0;
  width: calc(100vw - 80px - 268px);
  max-width: calc(1400px - 80px - 268px);
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;

  & section {
    width: 100%;
    display: block;
    padding: 30px 0;
  }

  & .test1 {
    margin-top: -30px;
  }

  & .test2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: calc((100vw - 80px - 260px - (30px * 5)) / 5 * 1.5);
  max-height: calc((1400px - 80px - 260px - (30px * 5)) / 5 * 1.5);

  & div {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;

    & a {
      display: inline-block;
      width: 100%;
      height: 100%;

      & img {
        display: inline-block;
        width: 100%;
        height: 100%;
        outline: none;
      }
    }
  }

  & .testIconMain {
    position: absolute;
    top: 8px;
    right: -100px;
    z-index: 4;
    opacity: 0.6;
    

    & a {
      text-decoration: none;
      font-weight: normal;
      background: transparent;

      & div {
        background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-5d2623ed440c97b015f42cd7275fc052cf0569ad1f84b7531704ae01cda651cb.svg);
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
`;

function MoviesList() {
  const DUMMY_DATA = [
    {
      id: 1,
      name: "name1",
      date: 22,
    },
    {
      id: 2,
      name: "name2",
      date: 223,
    },
    {
      id: 3,
      name: "name3",
      date: 224,
    },
    {
      id: 4,
      name: "name4",
      date: 225,
    },
    {
      id: 5,
      name: "name5",
      date: 226,
    },
    {
      id: 6,
      name: "name6",
      date: 227,
    },
  ];
  return (
    <>
      <WrapperTest>
        <section>
          <div className="test1">
            <div className="test2">
              {DUMMY_DATA.map((item) => {
                return (
                  <Card key={item.id}>
                    <ImgWrapper>
                      <div>
                        <a href="">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div className="testIconMain">
                        <a href="">
                          <div></div>
                        </a>
                      </div>
                    </ImgWrapper>
                    <div>
                      <div>{item.name}</div>
                      <div>{item.date}</div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </WrapperTest>
    </>
  );
}

export default MoviesList;
