import React from 'react'
import { useState } from 'react'
const arr = [];

export const Cont = () => {
  const [points, setPoints] = useState(0);
  const [position, setPosition] = useState(0);
  const [jug, setJug] = useState("");

    

  if (position == arr.length) {
    setPosition(0)
    setPoints(0)
  }

  const plus = (a) => {
    if (a.target.value == arr[position]) {
      setPoints(points + 1);
      setPosition(position + 1);
    }
    else {
      alert("PERDISTE");
      setPosition(0);
      setPoints(0);
    }
  };  

  const name = (a) => {
    a.preventDefault();
    setJug(a.target.value);
  };
  return (
    <div className='cont'>
        <form onSubmit={name} className='info'>
          <p className='welcome'>Bienvenido {jug} Combinacion: {arr}</p>
          <input required className='input' maxLength={18} placeholder='Ingresa tu nombre'/>
          <button className='inputbtn' type='submit'>👍</button>
          <p className='points'>Puntuacion: { points } </p>
        </form>
        <div className='btns'>
            <button value={1} className='red' onClick={plus} ></button>
            <button value={2} className='yel' onClick={plus} ></button>
            <button value={3} className='gre' onClick={plus} ></button>
            <button value={4} className='pin' onClick={plus} ></button>
        </div>
        <button className='jgr' > JUGAR </button>
    </div>
  )
}
