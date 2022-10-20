import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

const HeaderEl = styled.header`
  font-size: 16px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(3, 37, 65, 1);
  width: 100%;
  z-index: 10;
  transition: all 0.3s ease-out;

  opacity: ${(props) => props.visibility};
`;

const Content = styled.div`
  font-size: 16px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavWrapper = styled.div`
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;
`;

const SubMedia = styled.div`
  font-size: 16px;
  height: 40px;

  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: visible;
`;

const NavList = styled.ul`
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  padding: 0;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1em;
  flex-direction: row;

  & li:first-child {
    margin-left: 0;
  }

  & li {
    display: flex;
    align-items: center;
    align-content: center;
    font-weight: 600;
    padding: 8px;
    align-content: center;
    text-decoration: none;

    color: #ffff;

    & a {
      text-decoration: none;
      color: #ffff;
    }
  }
`;

const PlusItem = styled.span`
  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg);
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
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 3px 5px;
    transition: linear 0.1s;
    color: #fff;
    font-weight: 600;
    font-size: 0.9em;
    text-transform: uppercase;
  }

  & div:hover {
    background-color: #fff;
    border: 1px solid #000000;
    color: #000000;
    cursor: pointer;
  }
`;

const SearchItem = styled.span`
  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg);
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

const Logo = styled.a`
  display: block;
  margin-right: 16px;
  width: 154px;
  height: 20px;
`;

function Header() {
  const [isVisibil, setIsVisibil] = useState(1);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY > 10) {
        setIsVisibil(0);
      } else if (window.scrollY < 10) {
        setIsVisibil(1);
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
      <HeaderEl visibility={isVisibil}>
        <Content>
          <NavWrapper>
            <SubMedia>
              <Logo href="">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt=""
                  width={154}
                  height={20}
                />
              </Logo>
              <NavList>
                <li>
                  <a href="">Movies</a>
                </li>
                <li>
                  <a href="">TV Shows</a>
                </li>
                <li>
                  <a href="">People</a>
                </li>
                <li>
                  <a href="">More</a>
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
