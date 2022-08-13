import React from 'react'
import flecha from "../images/flecha.png"
export default function Register({ setStep }) {
    return (

        <div className='container-Login' >
            <img src={flecha} className="flecha" onClick={() => { setStep(1) }} />
            <div className='content-Login'>

                <h3 className='Content-Title'>Registrarse</h3>
                <div className='containerForm-Register'>
                    <label>Nombre y Apellido</label>
                    <div>  <input type="text" placeholder='ejem. juan perez' className='aja' /></div>
                    <label>Cedula</label>
                    <div>  <input type="text" placeholder='ejem. 111111' /></div>
                    <label>Edad</label>
                    <div>  <input type="number" placeholder='' /></div>
                    <label>Numero de Telefono</label>
                    <div>  <input type="text" placeholder='' /></div>
                    <label>Direccion</label>
                    <div>  <input type="text" placeholder='' /></div>
                    <label>Correo</label>
                    <div>  <input type="text" placeholder='ejem.@gmail.com' /></div>
                    <label>Contrasena</label>
                    <div>  <input type="text" placeholder='' /></div>
                    <label>Confirmar Contrasena</label>
                    <div>  <input type="text" placeholder='' /></div>



                </div>
                <button className='botonGeneral' onClick={() => { setStep(3) }} >Registrarse </button>

            </div>
        </div>


    )
}
