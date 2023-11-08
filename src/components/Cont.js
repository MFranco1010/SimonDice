import React from 'react'
import { useState } from 'react'

let array = [];
let nombre = "";
let temp = 0;
let position = 0;

export const Cont = () => {
  const [points, setPoints] = useState(0);
  const [jug, setJug] = useState("");
  const [btnon, setBtnon] = useState(true)

  const arreglo = () => {
    //if para resetear todo
    if (position == temp) {
      temp = 0;
      array = []
      position = 0;
    }
    setBtnon(false);

    //---------------------------------------------------
    const skye = document.getElementById('skye')
    const green = document.getElementById('green')
    const red = document.getElementById('red')
    const pink = document.getElementById('pink')
    skye.classList.remove("active")
    green.classList.remove("active")
    red.classList.remove("active")
    pink.classList.remove("active")
    //---------------------------------------------------

    if (5 > temp) {
      const btnJgr = document.getElementById('btnJgr')
      btnJgr.classList.toggle("jgrgrey")

      array.push(Math.floor(Math.random(1)*4)+1);
      if (array[temp] == 1) {
        skye.classList.add("active")
        setTimeout(() => {arreglo()}, 400);
      }
      else if (array[temp] == 2) {
        green.classList.add("active")
        setTimeout(() => {arreglo()}, 400);
      }
      else if (array[temp] == 3) {
        red.classList.add("active")
        setTimeout(() => {arreglo()}, 400);
      }
      else {
        pink.classList.add("active")
        setTimeout(() => {arreglo()}, 400);
      }
      temp++
    }
    setTimeout(() => {
      setBtnon(true)
    }, 2000);
    console.log("ARREGLO: ",array);
  }

  const plus = (a) => {
    if (a.target.value == array[position]) {
      setPoints(points + 1);
      position++;
    }
    else {
      alert("PERDISTE");
      position = 0;
      setPoints(0);
    }
  };  

  //nombre de usuario
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
          <p className='welcome'>Bienvenido {jug}</p>
          <input required className='input' onChange={nam} maxLength={18} placeholder='Ingresa tu nombre'/>
          <button className='inputbtn' type='submit'>👍</button>
          <p className='points'>Puntuacion: { points } </p>
        </form>
        <div className='btns'>
            <button id='skye' value={1} className='skye' onClick={plus} disabled={!btnon} ></button>
            <button id='green' value={2} className='green' onClick={plus} disabled={!btnon} ></button>
            <button id='red' value={3} className='red' onClick={plus} disabled={!btnon} ></button>
            <button id='pink' value={4} className='pink' onClick={plus} disabled={!btnon} ></button>
        </div>
        <button className='jgr' id='btnJgr' onClick={arreglo} ><p className='jgrtext'>JUGAR</p></button>
        <div className='top'></div>
    </div>
  )
}

