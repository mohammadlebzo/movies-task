import { IMAGE, MEDIA } from "../../constants/style/StyleParams";
import styled from "styled-components";

const LogoWrapper = styled.a`
  display: block;
  margin-right: 16px;
  width: 154px;
  height: 20px;

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
