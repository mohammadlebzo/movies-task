import FooterContentWrapper from "./FooterContentWrapper";
import {
  IMAGE,
  FONT,
  BACKGROUND,
  MEDIA,
} from "../../constants/style/StyleParams";
import styled from "styled-components";

const FooterEl = styled.footer`
  font-family: ${FONT.family.main};
  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    ${FONT.color.darkBlue} 70%
  );

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (${MEDIA.mobile}) {
    padding-top: 40px;
    padding-bottom: 40px;
    height: auto;
  }

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

  @media screen and (${MEDIA.mobile}) {
    top: 0;
    width: 100%;
    padding-bottom: 20px;
    text-align: left;
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
  white-space: normal;
  text-transform: uppercase;

  border: 2px solid ${FONT.color.white};
  border-radius: 5px;
  padding: 8px 16px;
  transition: linear 0.1s;

  @media screen and (${MEDIA.mobile}) {
    top: 0;
    padding: 8px 16px;
  }
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
  }

  & div img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (${MEDIA.mobile}) {
    width: 100%;
    display: block;
    padding: 0 20px;

    & div img {
      display: none;
    }
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
