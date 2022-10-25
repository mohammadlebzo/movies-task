import { FONT, BACKGROUND } from "../../constants/style/StyleParams";
import Logo from "./Logo";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderEl = styled.header`
  height: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0;
  background-color: ${FONT.color.darkBlue};
  width: 100%;
  z-index: 10;
  transition: top 0.2s linear;

  &.up {
    top: -65px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;
`;

const NavList = styled.ul`
  line-height: 24px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  padding: 0;
  font-family: ${FONT.family.main};
  font-size: 1em;
  flex-direction: row;

  & li:first-child {
    margin-left: 0;
  }

  & li {
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    font-weight: 600;
    padding: 8px;
    align-content: center;
    text-decoration: none;

    color: ${FONT.color.white};

    & a {
      text-decoration: none;
      color: ${FONT.color.white};
    }

    & .navItemWrapper {
      width: 173.283px;
      height: 138.233px;
      overflow: hidden;
      z-index: 10002;
      top: 40px;
      left: 0px;
      box-sizing: content-box;
      display: none;
      position: absolute;

      border-radius: 0 0 0.25rem 0.25rem;

      & ul {
        max-height: 580.767px;
        overflow: auto;
        position: relative;
        font-size: 10px;
        font-family: ${FONT.family.main};
        font-stretch: 100%;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        display: none;
        transform: translateY(-138.233px);
      }
    }

    &:hover .navItemWrapper {
      overflow: visible;
      display: block;

      & ul {
        display: block;
        transform: translateY(0px);

        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.15);
        color: ${FONT.color.graysh};
        background-color: ${FONT.color.white};
        margin: 0;
        padding: 0.5rem 0;
        list-style: none;
        border-radius: 0.25rem;
        border-width: 1px;
        border-style: solid;
        box-sizing: border-box;

        outline: 0;
        text-decoration: none;

        & li {
          padding-right: 50px;
          position: relative;
          font-size: 0.8rem;
          line-height: 1.5;
          outline: 0;
          border-width: 0;
          display: flex;
          user-select: none;
          cursor: default;
          align-items: center;
          align-content: center;
          color: ${FONT.color.black};
          font-weight: 400;
        }

        & li:hover {
          text-decoration: none;
          outline: 0;
          cursor: pointer;
          background-color: rgb(244, 244, 244);
        }
      }
    }
  }
`;

const PlusItem = styled.span`
  background-image: url(${BACKGROUND.iconURL.plus});
  background-color: transparent;
  font-size: 1.4em;
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
`;

const SubMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: visible;
`;

const SearchItem = styled.span`
  background-image: url(${BACKGROUND.iconURL.search});
  background-color: transparent;
  font-size: 1.4em;
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
`;

const TranslateItem = styled.li`
  display: block;
  padding: 4px 0;

  & div {
    width: 28px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid ${FONT.color.white};
    border-radius: 3px;
    padding: 3px 5px;
    transition: linear 0.1s;
    color: ${FONT.color.white};
    font-weight: 600;
    font-size: 0.9em;
    text-transform: uppercase;
  }

  & div:hover {
    background-color: ${FONT.color.white};
    border: 1px solid ${FONT.color.black};
    color: ${FONT.color.black};
    cursor: pointer;
  }
`;

function Header() {
  const [testClass, setTestClass] = useState("down");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      currentScrollY = window.scrollY;
      if (window.scrollY > 10) {
        setTestClass("up");
        console.log(currentScrollY);
      } else if (window.scrollY < 10) {
        setTestClass("down");
      }
    },
    [window.scrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <HeaderEl className={testClass}>
        <Content>
          <NavWrapper>
            <SubMedia>
              <Logo />
              <NavList>
                <li>
                  <a href="">Movies</a>
                  <div className="navItemWrapper">
                    <ul>
                      <li>Popular</li>
                      <li>Now Playing</li>
                      <li>Upcoming</li>
                      <li>Top Rated</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">TV Shows</a>
                  <div className="navItemWrapper">
                    <ul>
                      <li>Popular</li>
                      <li>Airing Today</li>
                      <li>On TV</li>
                      <li>Top Rated</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">People</a>
                  <div className="navItemWrapper">
                    <ul>
                      <li>Popular People</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">More</a>
                  <div className="navItemWrapper">
                    <ul>
                      <li>Discussions</li>
                      <li>Leaderboard</li>
                      <li>Support</li>
                      <li>API</li>
                    </ul>
                  </div>
                </li>
              </NavList>
            </SubMedia>
            <SubMedia>
              <NavList>
                <li>
                  <a href="">
                    <PlusItem></PlusItem>
                  </a>
                </li>
                <TranslateItem>
                  <div>en</div>
                </TranslateItem>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Join TMDB</a>
                </li>
                <li>
                  <a href="">
                    <SearchItem></SearchItem>
                  </a>
                </li>
              </NavList>
            </SubMedia>
          </NavWrapper>
        </Content>
      </HeaderEl>
    </>
  );
}

export default Header;
