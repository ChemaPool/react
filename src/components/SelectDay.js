import React, { useState } from 'react';

const selectDay = () => {
  const element = document.getElementsByClassName('md-select');
  for(let i = 0; i < element.length; i++){
    element[i].classList.toggle('active');
    console.log(element[i].className);
  }
}

const SelectDay = () => {
  const [initDay, setDay] = useState('Seleccione');
  const changeDay = (event) => {
    setDay(event.target.textContent);
  }

  return (
    <div className="md-select" onClick={ selectDay }>
      <button type="button" className="ng-binding"><span id="textSelect">{ initDay }</span></button>
      <ul role="listbox" id="ul-id" className="md-whiteframe-z1" name="ul-id">
        <li role="option" aria-selected="false" onClick={ changeDay } >Día</li>
        <li role="option" aria-selected="false" onClick={ changeDay } >Semana</li>
        <li role="option" aria-selected="false" onClick={ changeDay } >Mes</li>
        <li role="option" aria-selected="false" onClick={ changeDay } >Año</li>
      </ul>
    </div>
  )
}

export default SelectDay;