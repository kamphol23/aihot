import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.white};
  background-color: transparent;
  border: solid 2px;
  padding: 15px;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.orange};
    border: ${(props) => props.theme.orange} solid 2px;
    cursor: pointer;
  }
`;

export default Button;
