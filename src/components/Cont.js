import React from 'react'
import { useState } from 'react'
let array = [];
let nombre = "";

export const Cont = () => {
  const [points, setPoints] = useState(0);
  const [position, setPosition] = useState(0);
  const [jug, setJug] = useState("");
  const [arr, setArr] = useState([]);
  
  const arreglo = () => {
    if (position%5 == 0) {
      for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random(1)*4)+1);
        if (array[i] == 1) {
          const skye = document.getElementById('skye')
          skye.classList.toggle("skyeshine")
        }
        else if (array[i] == 2) {
          const green = document.getElementById('green')
          green.classList.toggle("greenshine")
        }
        else if (array[i] == 3) {
          const red = document.getElementById('red')
          red.classList.toggle("redshine")
        }
        else {
          const pink = document.getElementById('pink')
          pink.classList.toggle("pinkshine")
        }
      }
      const btnJgr = document.getElementById('btnJgr')
      btnJgr.classList.toggle("jgrgrey")
    }
    setArr(array);
    console.log("ARREGLO: ",array);
    console.log("ESTADO: ",arr)
  }
  
  console.log("form")
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

  const nam = (a) => {
    nombre = a.target.value;
  };
  const name = (a) => {
    a.preventDefault();
    setJug(nombre);
  };
  return (
    <div className='cont'>
        <form onSubmit={name} className='info'>
          <p className='welcome'>Bienvenido {jug} Combinacion: {arr}</p>
          <input required className='input' onChange={nam} maxLength={18} placeholder='Ingresa tu nombre'/>
          <button className='inputbtn' type='submit'>👍</button>
          <p className='points'>Puntuacion: { points } </p>
        </form>
        <div className='btns'>
            <button id='skye' value={1} className='skye' onClick={plus} ></button>
            <button id='green' value={2} className='green' onClick={plus} ></button>
            <button id='red' value={3} className='red' onClick={plus} ></button>
            <button id='pink' value={4} className='pin' onClick={plus} ></button>
        </div>
        <button className='jgr' id='btnJgr' onClick={arreglo}><p className='jgrtext'>JUGAR</p></button>
    </div>
  )
}
