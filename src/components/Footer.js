import styled from "styled-components";

const FooterEl = styled.footer`
  font-family: "Source Sans Pro", Arial, sans-serif;
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;

  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    rgba(3, 37, 65, 1) 70%
  );

  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;

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

  & nav {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
    font-size: 0.9em;
    color: #fff;
  }

  & ul {
    list-style-type: none;
    padding: 0;
  }

  & a {
    text-decoration: none;
  }

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

  & ul li {
    line-height: 1.6em;
    max-width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
  }

  & ul li a {
    color: #ffff;
  }

  & section {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #fff;
    opacity: 0.1;
    font-size: 0.7em;
  }
`;

const FooterLogo = styled.div`
  text-align: right;
  position: relative;
  top: -36px;
  right: 0;
`;

const JoinButton = styled.a`
  position: relative;
  top: 140px;
  border-color: #fff;
  background-color: #fff;
  color: rgba(1, 180, 228, 1);
  font-size: 1.3em;
  font-weight: bold;
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  text-transform: uppercase;

  border: 2px solid #fff;
  border-radius: 5px;
  padding: 8px 16px;
  transition: linear 0.1s;
`;

function Footer() {
  return (
    <FooterEl>
      <nav>
        <FooterLogo>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt=""
            width={130}
            height={94}
          />
          <JoinButton href="">Join the Community</JoinButton>
        </FooterLogo>
        <div>
          <h3>The Basics</h3>
          <ul>
            <li>
              <a href="">About TMDB</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Support Forums</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">System Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a href="">Contribution Bible</a>
            </li>
            <li>
              <a href="">Add New Movie</a>
            </li>
            <li>
              <a href="">Add New TV Show</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="">Guidelines</a>
            </li>
            <li>
              <a href="">Discussions</a>
            </li>
            <li>
              <a href="">Leaderboard</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">API Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </nav>
      <section>Build c1a551a (4505)</section>
    </FooterEl>
  );
}

export default Footer;
