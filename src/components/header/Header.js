import {
  FONT,
  BACKGROUND,
  IMAGE,
  MEDIA,
} from "../../constants/style/StyleParams";
import Logo from "./Logo";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (${MEDIA.mobile}) {
    width: 100%;
    overflow: hidden;
    animation: none;
  }
`;

const HeaderEl = styled.header`
  height: 64px;
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

  @media screen and (${MEDIA.mobile}) {
    width: 100vw;
  }
`;

const LogoMobile = styled.li`
  justify-content: center;
  width: 33%;
  display: flex;
  align-items: center;
  align-content: center;
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

  @media screen and (${MEDIA.mobile}) {
    padding: 0 20px;
  }
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
        color: ${FONT.color.grayF1};
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
          background-color: ${BACKGROUND.color.lightBlue};
        }
      }
    }
  }
`;

const NavListMobile = styled.ul`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0;
  align-items: center;
  list-style-type: none;

  & span {
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

  & div {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & li:first-child {
      display: flex;
      align-items: center;
      align-content: center;

      & span {
        background-image: url(${BACKGROUND.iconURL.user});
        filter: invert(1);
        font-size: 1.4em;
      }
    }

    & li:last-child {
      margin-left: 14px;
      display: flex;
      align-items: center;
      align-content: center;

      & a {
        font-size: 1.5em;
        height: 100%;
        display: inline-flex;
        align-items: center;
        align-content: center;

        & span {
          background-image: url(${BACKGROUND.iconURL.search});
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

  @media screen and (${MEDIA.mobile}) {
    display: none;
  }
`;

const SubMediaMobile = styled.div`
  display: none;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: visible;
  width: 100%;

  @media screen and (${MEDIA.mobile}) {
    display: flex;
  }

  & a {
    display: flex;
    align-items: center;
    align-content: center;
    color: ${FONT.color.white};
    font-weight: 600;
    text-decoration: none;
    background: transparent;
  }
`;

const SideMenu = styled.li`
  width: 33%;
  display: flex;
  align-items: center;
  align-content: center;

  & span {
    background-image: url(${BACKGROUND.iconURL.sideMenu});
    filter: invert(1);
    font-size: 1.4em;
  }
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
  const [headClassOnScroll, setheadClassOnScroll] = useState("down");
  let lastScrollTop = 0;

  const handleNavigation = useCallback(
    (e) => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setheadClassOnScroll("up");
      } else {
        setheadClassOnScroll("down");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    [window]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <HeaderEl className={headClassOnScroll}>
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

            <SubMediaMobile>
              <NavListMobile>
                <SideMenu>
                  <a href="">
                    <span></span>
                  </a>
                </SideMenu>
                <LogoMobile>
                  <a href="">
                    <img src={IMAGE.footerLogo} alt="" width={55} height={40} />
                  </a>
                </LogoMobile>
                <div>
                  <li>
                    <a href="">
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span></span>
                    </a>
                  </li>
                </div>
              </NavListMobile>
            </SubMediaMobile>
          </NavWrapper>
        </Content>
      </HeaderEl>
    </>
  );
}

export default Header;
