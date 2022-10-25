import FooterContentWrapper from "./FooterContentWrapper";
import { IMAGE, FONT, BACKGROUND } from "../../constants/style/StyleParams";
import styled from "styled-components";

const FooterEl = styled.footer`
  font-family: ${FONT.family.main};
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;

  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    ${FONT.color.darkBlue} 70%
  );

  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;

  & section {
    display: flex;
    justify-content: center;
    width: 100%;
    color: ${FONT.color.white};
    opacity: 0.1;
    font-size: 0.7em;
  }
`;

const FooterLogo = styled.div`
  text-align: right;
  position: relative;
  top: -36px;
  right: 0;

  & a {
    text-decoration: none;
  }
`;

const JoinButton = styled.a`
  position: relative;
  top: 140px;
  border-color: ${FONT.color.white};
  background-color: ${BACKGROUND.color.white};
  color: ${FONT.color.lightBlue};
  font-size: 1.3em;
  font-weight: bold;
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  text-transform: uppercase;

  border: 2px solid ${FONT.color.white};
  border-radius: 5px;
  padding: 8px 16px;
  transition: linear 0.1s;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
  font-size: 0.9em;
  color: ${FONT.color.white};

  & div {
    margin-right: 40px;
    min-width: 0;
    box-sizing: border-box;
  }

  & div img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

function Footer() {
  return (
    <FooterEl>
      <NavWrapper>
        <FooterLogo>
          <img src={IMAGE.footerLogo} alt="" width={130} height={94} />
          <JoinButton href="">Join the Community</JoinButton>
        </FooterLogo>
        <FooterContentWrapper />
      </NavWrapper>
      <section>Build c1a551a (4505)</section>
    </FooterEl>
  );
}

export default Footer;
