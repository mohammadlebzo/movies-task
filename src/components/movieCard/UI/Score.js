import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { FONT } from '../../../constants/style/StyleParams'

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

const OuterRing = styled.div`
  margin-right: 0;
  width: 38px;
  height: 38px;
  padding: 2px;
  display: inline-block;
  border-radius: 50%;
  background-color: #081c22;
`;

const UserScore = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Percent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    padding-top: 1px;
    padding-left: 1px;
    font-size: 0.6em;
    color: ${FONT.color.white};
    font-family: "Consensus" !important;
    font-style: normal;
    font-weight: bold;
    font-variant: normal;
  }
`;

const Canvas = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

function Score(props) {
  return (
    <>
      <ScoreWrapper>
        <OuterRing>
          <UserScore>
            <Percent>
              <span>{props.score !== 0 ? `${props.score * 10}%` : 'NA'}</span>
            </Percent>
            <Canvas className="canvas">
              <CircularProgress
                variant="determinate"
                value={props.score * 10}
                style={{ width: "34px", height: "34px", color:`${FONT.color.lightGreen}` }}
              />
            </Canvas>
          </UserScore>
        </OuterRing>
      </ScoreWrapper>
    </>
  );
}

export default Score;
