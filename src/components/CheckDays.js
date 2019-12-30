import React, { useState } from 'react';
import Styled from "styled-components";

const CheckDay = (props) => {
  const [initColor, setColor] = useState(false);
  const changeColor = () => {
    initColor ? setColor(!true) : setColor(!false);
  }

  const ButtonDay = Styled.span`
  text-align: center;
  padding: 6px 10px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: ${initColor ? '#1775e1' : '#f1f3f4'};
  color: ${initColor ? '#fff' : '#000'};
`;

  return (
    <ButtonDay onClick = { changeColor } >{props.text}</ButtonDay>
  )
}

export default CheckDay;