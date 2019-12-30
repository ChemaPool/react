import Styled from "styled-components";

export const Input = Styled.input`
  border: none;
  border-radius: 3px;
  background-color: #f1f3f4;
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: 10px ${props => props.padding_side};
  -moz-appearance: textfield;
  word-spacing: ${props => props.wordSpace};

  &:focus {
    border-bottom: solid 2px #1775e1;
    -moz-appearance:none;
  }
`;