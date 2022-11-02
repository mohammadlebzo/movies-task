import {
  FONT,
  BACKGROUND,
  IMAGE,
  MEDIA,
} from "constants/style/StyleParams";
import Logo from "components/header/Logo";
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
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${FONT.color.darkBlue};
  width: 100%;
  z-index: 10;
  transition: top 0.2s linear;

  &.up {
    top: -4.063rem;
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
  max-width: 87.5rem;
  width: 100%;
  padding: 0 2.5rem;

  @media screen and (${MEDIA.mobile}) {
    padding: 0 1rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  padding: 0;
  font-family: ${FONT.family.main};
  font-size: 1rem;

  & li:first-child {
    margin-left: 0;
  }

  & li {
    position: relative;
    margin-right: 0.875rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 0.5rem;

    color: ${FONT.color.white};

    & a {
      text-decoration: none;
      color: ${FONT.color.white};
    }

    & .navItemWrapper {
      width: 10.83rem;
      height: 8.64rem;
      overflow: hidden;
      z-index: 10002;
      top: 2.5rem;
      left: 0;
      display: none;
      position: absolute;
    }

    &:hover .navItemWrapper {
      overflow: visible;
      display: block;

      & ul {
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.15);
        color: ${FONT.color.grayF1};
        background-color: ${FONT.color.white};
        padding: 0.5rem 0;
        border-radius: 0.25rem;
        border-width: 0.063rem;
        border-style: solid;
        outline: 0;

        & li {
          width: 100%;
          padding-right: 3.125rem;
          position: relative;
          font-size: 0.9rem;
          line-height: 1.5;
          color: ${FONT.color.black};
          font-weight: 600;
        }

        & li:hover {
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
  display: flex;
  justify-content: space-between;
  padding: 0;

  & span {
    min-width: 1.4rem;
    min-height: 1.4rem;
    width: 1.4rem;
    height: 1.4rem;
  }

  & div {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & li:first-child {
      display: flex;

      & span {
        background-image: url(${BACKGROUND.iconURL.user});
        filter: invert(1);
        font-size: 1.4em;
      }
    }

    & li:last-child {
      margin-left: 0.875rem;
      display: flex;
      & a {
        font-size: 1.54rem;
        height: 100%;

        & span {
          background-image: url(${BACKGROUND.iconURL.search});
        }
      }
    }
  }
`;

const PlusItem = styled.span`
  background-image: url(${BACKGROUND.iconURL.plus});
  font-size: 1.4rem;
  display: inline-flex;
  min-width: 1.4rem;
  min-height: 1.4rem;
  width: 1.4rem;
  height: 1.4rem;
  line-height: inherit;
  background-position: center center;
  background-repeat: no-repeat;
  color: inherit;
  box-sizing: border-box;
`;

const SubMedia = styled.div`
  display: flex;
  align-items: center;
  overflow: visible;

  @media screen and (${MEDIA.mobile}) {
    display: none;
  }
`;

const SubMediaMobile = styled.div`
  display: none;
  width: 100%;

  @media screen and (${MEDIA.mobile}) {
    display: flex;
  }

  & a {
    display: flex;
    color: ${FONT.color.white};
  }
`;

const SideMenu = styled.li`
  width: 33%;
  display: flex;
  align-items: center;

  & span {
    background-image: url(${BACKGROUND.iconURL.sideMenu});
    filter: invert(1);
    font-size: 1.4rem;
  }
`;

const SearchItem = styled.span`
  background-image: url(${BACKGROUND.iconURL.search});
  font-size: 1.82rem;
  display: inline-flex;
  min-width: 1.82rem;
  min-height: 1.82rem;
  width: 1.82rem;
  height: 1.82rem;
`;

const TranslateItem = styled.li`
  display: block;
  padding: 0.25rem 0;
  & div {
    width: 1.75rem;
    height: 1.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 0.063rem solid ${FONT.color.white};
    border-radius: 0.188rem;
    padding: 0.188rem 0.313rem;
    transition: linear 0.1s;
    color: ${FONT.color.white};
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  & div:hover {
    background-color: ${FONT.color.white};
    border: 0.063rem solid ${FONT.color.black};
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
