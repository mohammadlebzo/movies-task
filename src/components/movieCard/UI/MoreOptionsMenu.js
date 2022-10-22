import styled from "styled-components";
import { FONT, BACKGROUND } from "../../../constants/style/StyleParams";

const MenuIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 4;
  opacity: 0.6;

  & a {
    color: ${FONT.color.black};
    text-decoration: none;
    font-weight: normal;
    background: transparent;
  }
`;

const InnerOptionsIcon = styled.div`
  font-size: 1.6em;
  background-image: url(${BACKGROUND.iconURL.moreMenu});
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

function MoreOptionsMenu() {
  return (
    <MenuIcon>
      <a href="">
        <InnerOptionsIcon />
      </a>
    </MenuIcon>
  );
}

export default MoreOptionsMenu;
