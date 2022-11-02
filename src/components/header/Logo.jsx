import { IMAGE, MEDIA } from "constants/style/StyleParams";
import styled from "styled-components";

const LogoWrapper = styled.a`
  display: block;
  margin-right: 1rem;
  width: 9.625rem;
  height: 1.25rem;

  @media screen and (${MEDIA.mobile}) {
    display: none;
  }
`;

function Logo() {
  return (
    <>
      <LogoWrapper href="">
        <img src={IMAGE.headerLogo} alt="" width={154} height={20} />
      </LogoWrapper>
    </>
  );
}

export default Logo;
