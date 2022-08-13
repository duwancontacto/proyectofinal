import React, { useState } from 'react'
import fondo from "../images/fondo.jpg"
export default function Login({ setStep }) {

    return (
        <div className='hijo'>
            {/*  <img src={fondo} alt="fondo" className='fondoLogin' /> */}
            <div className='container-Login'>

                <div className='content-Login'>
                    <h3 className='Content-Title'>BIENVENIDO</h3>
                    <div className='container-Form'>
                        <label >Correo</label>
                        <div>
                            <input type="text" placeholder='ejem.@gmail.com' />
                        </div>
                        <label>Contrasena</label>
                        <div>
                            <input type="password" placeholder='' />
                        </div></div>

                    <button className='botonGeneral' onClick={() => { setStep(3) }}>
                        Ingresar
                    </button>

                    <p className='registro' onClick={() => { setStep(2) }}>Registrarse </p>
                </div>

            </div>
        </div>

    )
}
