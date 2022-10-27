import { CircularProgress } from "@mui/material";
import { BACKGROUND, FONT } from "../../constants/style/StyleParams";
import PropTypes from "prop-types";
import styled from "styled-components";

const Canvas = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

const OuterRing = styled.div`
  margin-right: 0;
  width: 38px;
  height: 38px;
  padding: 2px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${BACKGROUND.color.darkBluePlus};
`;

const Percent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PercentText = styled.span`
  padding-top: 1px;
  padding-right: 5px;
  font-size: 0.7em;
  color: ${FONT.color.white};
  font-family: "Consensus" !important;
  font-style: normal;
  font-weight: bold;
  font-variant: normal;

  & span {
    font-size: 0.6em;
    position: absolute;
    top: 10px;
    right: 5px;
  }
`;

const ScoreWrapper = styled.div`
  position: absolute;
  top: -19px;
  left: 10px;
  width: 38px;
  height: 38px;
  box-sizing: border-box;
  display: inline-block;
  transition: transform 0.2s;
  transform: scale(1);
`;

const UserScore = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
`;

// const TestLoader = styled.div`
//   // width: 50px;
//   width: 34px;
//   height: 34px;
//   background-color: transparent;
//   position: absolute;
//   top: 0;
//   left: 0;

//   & > * {
//     background-color: transparent;
//   }

//   & svg {
//     transform: rotate(1000deg);
//   }

//   & circle {
//     fill: none;
//     stroke: green;
//     stroke-width: 4.4px;
//     stroke-linecap: round;
//     stroke-dasharray: ${props => props.percent * 2.1}, 100;
//     stroke-dashoffset: 60;
//   }
// `;

function Score({ score }) {
  return (
    <>
      <ScoreWrapper>
        <OuterRing>
          <UserScore>
            <Percent>
              <PercentText>
                {score !== 0 ? `${score * 10}` : "NA"}
                <span>{score !== 0 ? "%" : ""}</span>
              </PercentText>
            </Percent>
            <Canvas>
              <CircularProgress
                variant="determinate"
                value={score * 10}
                style={{
                  width: "34px",
                  height: "34px",
                  color: `${
                    score * 10 < 70 ? FONT.color.pumpkin : FONT.color.lightGreen
                  }`,
                }}
              />
            </Canvas>
            {/* <TestLoader percent={score * 10}>
              <svg viewBox="22 30 50 50">
                <circle cx="46" cy="54" r="22.6" fill="none" ></circle>
              </svg>
            </TestLoader> */}
          </UserScore>
        </OuterRing>
      </ScoreWrapper>
    </>
  );
}

Score.propTypes = {
  score: PropTypes.number,
};

export default Score;
