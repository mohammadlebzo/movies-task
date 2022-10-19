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
  }
  `;

const NavItem = styled.li`
  font-weight: 600;
  align-content: center;
  text-decoration: none;
  padding: 8px;
  color: #ffff;

  & a {
    text-decoration: none;
    color: #ffff;
  }
`;

const Logo = styled.a`
  display: block;
  margin-right: 16px;
  width: 154px;
  height: 20px;
`;

function Header() {
  const [isVisibil, setIsVisibil] = useState(1);
//   const [classTest, setClassTest] = useState("show");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY > 10) {
        setIsVisibil(0)
      } else if (window.scrollY < 10) {
        setIsVisibil(1)
      }
    //   console.log(classTest);
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
                <NavItem>
                  <a href="">Movies</a>
                </NavItem>
                <NavItem>
                  <a href="">TV Shows</a>
                </NavItem>
                <NavItem>
                  <a href="">People</a>
                </NavItem>
                <NavItem>
                  <a href="">More</a>
                </NavItem>
              </NavList>
            </SubMedia>
            <SubMedia>
              <NavList>
                <NavItem>
                  <a href="">PH</a>
                </NavItem>
                <NavItem>
                  <div>en</div>
                </NavItem>
                <NavItem>
                  <a href="">Login</a>
                </NavItem>
                <NavItem>
                  <a href="">Join TMDB</a>
                </NavItem>
                <NavItem>
                  <a href="">PH</a>
                </NavItem>
              </NavList>
            </SubMedia>
          </NavWrapper>
        </Content>
      </HeaderEl>
    </>
  );
}

export default Header;
