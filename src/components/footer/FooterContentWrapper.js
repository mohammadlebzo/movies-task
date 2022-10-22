import styled from "styled-components";
import { FONT } from "../../constants/style/StyleParams";

const ContentWrapper = styled.div`
  margin-right: 40px;
  min-width: 0;
  box-sizing: border-box;

  & h3 {
    font-weight: bold;
    font-size: 1.4em;
    text-transform: uppercase;
    line-height: 1.4em;
    white-space: nowrap;
    margin: 0 0 4px 0;
    adding: 0;
    box-sizing: border-box;
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
    line-height: 1.6em;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${FONT.color.white};
  }

  & ul li a {
    color: ${FONT.color.white};
  }
`;

const TITLES = ["The Basics", "Get Involved", "Community", "Legal"];

const CONTENT = [
  ["About TMDB", "Contact Us", "Support Forums", "API", "System Status"],
  ["Contribution Bible", "Add New Movie", "Add New TV Show"],
  ["Guidelines", "Discussions", "Leaderboard", "Twitter"],
  ["Terms of Use", "API Terms of Use", "Privacy Policy"],
];

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

export default FooterContentWrapper;
