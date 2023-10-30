import React from 'react'
import { useState } from 'react'

export const Cont = () => {
  const [points, setPoints] = useState(0)
  const [jug, setJugador] = useState("ejemplo")

  const plus = () => {
    setPoints(points + 1);
  };

  const name = (a) => {
    setJugador(a);
  };
  return (
    <div className='cont'>
        <div className='info'>
          <p className='welcome'>Bienvenido {jug} </p>
          <input className='input' placeholder='Ingresa tu nombre' onSubmit={name} />
          <button className='inputbtn' type='submit'>👍</button>
          <p className='points'>Puntuacion: { points } </p>
          </div>
        <div className='btns'>
            <button className='red' onClick={plus} ></button>
            <button className='yel'></button>
            <button className='gre'></button>
            <button className='pin'></button>
        </div>
    </div>
  )
}
