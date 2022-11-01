import { FONT, BACKGROUND } from "../../constants/style/StyleParams";
import styled from "styled-components";

const InnerOptionsIcon = styled.div`
  font-size: 1.6rem;
  background-image: url(${BACKGROUND.iconURL.moreMenu});
  min-width: 1.6rem;
  min-height: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 4;
  opacity: 0.6;

  & a {
    color: ${FONT.color.black};
    text-decoration: none;
    font-weight: normal;
    background: transparent;
  }
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
