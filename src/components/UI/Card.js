import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  width: calc((100vw - 80px - 260px - (30px * 5)) / 5);
  max-width: calc((1400px - 80px - 260px - (30px * 5)) / 5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

function Card(props) {
  return <CardWrapper>{props.children}</CardWrapper>;
}

export default Card;
