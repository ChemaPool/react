import React from 'react';
import { Button } from './Button';
import SelectDay from './SelectDay';
import { RadioEnd } from './EndDay';
import { Input } from './InputText';
import CheckDay from './CheckDays';

const Container = () => {
  return (
    <div>
      <h2>Periodicidad personalizada</h2>
      <div>
        <label>Repetir cada </label>
        <Input type="number" min="0" width="40px" padding_side="20px" margin="10px" />
        <SelectDay />
      </div>
      <div>
        <label>Se repite el </label>
        <div>
          <CheckDay text="D"></CheckDay>
          <CheckDay text="L"></CheckDay>
          <CheckDay text="M"></CheckDay>
          <CheckDay text="X"></CheckDay>
          <CheckDay text="J"></CheckDay>
          <CheckDay text="V"></CheckDay>
          <CheckDay text="S"></CheckDay>
        </div>
      </div>
      <div>
        <label>Termina </label>
        <div className="containerEndDay">
          <label>
            <RadioEnd type="radio" name="options" checked/>
            <span>Nunca</span>
          </label>
        </div>
        <div className="containerEndDay">
          <label >
            <RadioEnd type="radio" name="options" />
            <span>El</span>
          </label>
          <Input className="selectDay" type="text" value="27 de mar de 2020" disabled />
        </div>
        <div className="containerEndDay">
          <label >
            <RadioEnd type="radio" name="options" /><span>Después de</span>
          </label>
          <Input type="text" value="13 repeticiones" width="180px" wordSpace="1.5em" disabled/>
        </div>
      </div>
      <div className="buttonsActions">
        <Button color="#9aa0a6" href="#">Cancelar</Button>
        <Button color="#1775e1" href="#">Listo</Button>
      </div>
    </div>
  )
}

export default Container;