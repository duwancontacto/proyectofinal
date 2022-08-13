import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Modal from "./Modal"
import iconAgregar from "../images/iconAgregar.png"


import iconVerMas from "../images/IconVerMas.png"

export default function CrearNotcias({ setStep }) {
    const [show, setShow] = useState(false);

    const noticia = [

        { title: "Cambios en el Cuerpo humano", fecha: "21/2022", icon: iconVerMas },
        { title: "Avances de las vacuna covid", fecha: "20/2022", icon: iconVerMas },
        { title: "Aumento de los contagios de viruela", fecha: "09/2022", icon: iconVerMas },
        { title: "Estudio de las vacunas contra la gripe", fecha: "08/2022", icon: iconVerMas },
        { title: "La nueva vacuna contra el VIH ", fecha: "08/2022", icon: iconVerMas },
        { title: "El avance de los estudio de la hemorroides", fecha: "09/2022", icon: iconVerMas },
        { title: "Estudio de los estados de animos", fecha: "09/2022", icon: iconVerMas },
    ]
    return (
        <div className='containerDasboard'>
            <Sidebar setStep={setStep} />
            <div className='Sintomas'>
                <h4 className='Content-Title'>Crear Noticias</h4>
                <div className='contenCrearNoticias'>
                    {noticia.map(element => (

                        <div className='containerTitulo'>
                            <label>{element.title}</label>
                            <div className='containerImagen'>
                                <p>{element.fecha}</p>
                                <img src={element.icon} alt="iconEditar" className='iconEditar' onClick={() => { setShow(true) }} />
                            </div>
                        </div>


                    ))}

                </div>

                <div className='contentBotonAgregar' onClick={() => { setShow(true) }}>
                    <button>Agregar<img src={iconAgregar} alt="iconAgregar" className='iconAgregar' /></button>

                </div>

                <Modal show={show} setShow={setShow} title={"Editar Noticia"} >
                    <div className='containerModal'>
                        <label>Titulo</label>
                        <div> <input type="text" /></div>
                        <label>Descripcion</label>
                        <div>
                            <textarea type="textarea" rows="5" cols="60" />
                        </div>
                    </div>



                </Modal>
            </div>
        </div>
    )
}
