import React from 'react'
import { useState } from 'react'

export const Cont = () => {
  const [points, setPoints] = useState(0)
  const [jug, setJug] = useState("")
  const [NOMBRE, setNOMBRE] = useState("")

  const plus = () => {
    setPoints(points + 1);
  };

  const juga = (a) => {
    setJug(a.target.value);
  };  

  const name = (a) => {
    a.preventDefault();
    setNOMBRE(jug);
  };
  return (
    <div className='cont'>
        <form onSubmit={name} className='info'>
          <p className='welcome'>Bienvenido {NOMBRE} </p>
          <input required className='input' maxLength={18} onChange={juga} placeholder='Ingresa tu nombre'/>
          <button className='inputbtn' type='submit'>👍</button>
          <p className='points'>Puntuacion: { points } </p>
        </form>
        <div className='btns'>
            <button className='red' onClick={plus} ></button>
            <button className='yel'></button>
            <button className='gre'></button>
            <button className='pin'></button>
        </div>
        <button className='jgr'> JUGAR </button>
    </div>
  )
}
