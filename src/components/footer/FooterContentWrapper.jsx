import { FONT } from "constants/style/StyleParams";
import styled from "styled-components";
import { TITLES, CONTENT } from "constants/mock/MockFooterData";

const ContentWrapper = styled.div`
  margin-right: 2.5rem;

  & h3 {
    font-weight: 700;
    font-size: 1.26rem;
    text-transform: uppercase;
    line-height: 1.764rem;
    white-space: nowrap;
    margin: 0 0 0.25rem 0;
  }

  & ul {
    list-style-type: none;
    padding: 0;
  }

  & a {
    text-decoration: none;
  }

  & div img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }

  & ul li {
    font-weight: 400;
    font-size: 1.08rem;
    line-height: 1.44rem;
    max-width: 16.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${FONT.color.white};
  }

  & ul li a {
    color: ${FONT.color.white};
  }
`;

function FooterContentWrapper() {
  return (
    <>
      {CONTENT.map((colu, idx) => {
        return (
          <ContentWrapper key={idx}>
            <h3>{TITLES[idx]}</h3>
            <ul>
              {colu.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </ContentWrapper>
        );
      })}
    </>
  );
}

export { TITLES, CONTENT };
export default FooterContentWrapper;
