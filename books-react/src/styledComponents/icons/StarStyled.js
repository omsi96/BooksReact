import styled from "styled-components";

const StarStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 25px;
  height: 25px;
  color: ${(props) => (props.filled ? "#FFC107" : "#DADADA")};
`;
export default StarStyled;
