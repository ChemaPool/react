import Styled from "styled-components";

export const RadioEnd = Styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  border-radius: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: 2px solid #1775e1;
  vertical-align: middle;
  margin-top: -4px;

  &:checked {
    background: #1775e1;
  }

  &:after {
    top: 15%;
    left: 5%;
    width: 50%;
    height: 50%;
    content: '';
    display: none;
    position: relative;
    border-radius: 100%;
    border: solid #fff;
  }

  &:checked:after {
    display: block;
    margin-top: -1px;
  }

  &:hover {
    cursor: hand;
  }
`;