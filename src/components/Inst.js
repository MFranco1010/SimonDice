import React from 'react'

export const Inst = () => {
    const slide = () => {
        const slide = document.getElementById("slide")
        slide.classList.toggle("showslide")
    };

    return (
        <div className="inst">
            <button className="slidebtn" type='button' onClick={slide}>❗INSTRUCCIONES❗</button>
            <div id='slide' className='hidslide'>
                <p>Toca el boton de jugar, si completas el juego de memoria (+10 puntos), dale a jugar otra vez y segui acumulando puntos. suerte!</p>
            </div>
        </div>
    )
}
