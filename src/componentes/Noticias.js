import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Modal from "./Modal"

import call from "../images/call.png"
import persona from "../images/persona.png"
import iconVerMas from "../images/IconVerMas.png"
export default function CrearNoticiasModal({ setStep }) {
    const [show, setShow] = useState(false);

    const noticia = [

        { title: "Cambios en el Cuerpo humano", icon: call, descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" },
        { title: "Avances de las vacuna covid", icon: persona, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        { title: "Aumento de los contagios de viruela", icon: iconVerMas, descripcion: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness" },
        { title: "Estudio de las vacunas contra la gripe", icon: iconVerMas, descripcion: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness" },
        { title: "La nueva vacuna contra el VIH ", icon: iconVerMas, descripcion: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium" },
        { title: "El avance de los estudio de la hemorroides", icon: iconVerMas, descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" },
        { title: "Estudio de los estados de animos", icon: iconVerMas, descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam" },
    ]

    return (


        <div className='containerDasboard'>
            <Sidebar setStep={setStep} />
            <div className='Sintomas'>
                <h4 className='Content-Title'>Noticias</h4>
                <div className='ContainerNoticias' >
                    {noticia.map(element => (
                        <div className='contentNoticias' onClick={() => { setShow(element) }}>
                            <h5>{element.title}</h5>
                            <img src={element.icon} />
                        </div>


                    ))}

                </div>
            </div>

            <Modal show={show} setShow={setShow} title >
                <div className='containerModal'>
                    <h4>{show.title}</h4>
                    <p>{show.descripcion}</p>

                </div>



            </Modal>
        </div>
    )
}
