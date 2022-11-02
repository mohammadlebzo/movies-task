import { CircularProgress } from "@mui/material";
import { BACKGROUND, FONT } from "constants/style/StyleParams";
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
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.125rem;
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
  padding-top: 0.063rem;
  padding-right: 0.313rem;
  font-size: 0.8rem;
  color: ${FONT.color.white};
  font-family: 'Lato', sans-serif;
  font-weight: bold;

  & span {
    font-size: 0.5rem;
    position: absolute;
    top: 0.625rem;
    right: 0.313rem;
  }
`;

const ScoreWrapper = styled.div`
  position: absolute;
  top: -1.188rem;
  left: 0.625rem;
  width: 2.375rem;
  height: 2.375rem;
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
                value={100}
                style={{
                  width: "2.125rem",
                  height: "2.125rem",
                  color: `${FONT.color.darkGreen}`,
                }}
              />
            </Canvas>
            <Canvas>
              <CircularProgress
                variant="determinate"
                value={score * 10}
                style={{
                  width: "2.125rem",
                  height: "2.125rem",
                  color: `${
                    score * 10 < 70 ? FONT.color.pumpkin : FONT.color.lightGreen
                  }`,
                }}
              />
            </Canvas>
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
