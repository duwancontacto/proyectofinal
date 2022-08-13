import React, { useState } from 'react'
import Modal from "./Modal"
import Sidebar from './Sidebar';
export default function Dasboard({ setStep }) {
    const [show, setShow] = useState(false);

    return (
        <div className='containerDasboard'>
            <Sidebar setStep={setStep} />
            <div className='Sintomas'>
                <h4 className='Content-Title'>Sintomas</h4>
                <div className='contentSintomas'>
                    <label >Virus que tiene si ya ha sido diagnosticado</label>
                    <div className='inputSintomas'><input type="text" /></div>
                    <label>Sintomas</label>
                    <div className='contentCheckbox'>
                        <div> <input type="checkbox" />Fiebre</div>
                        <div> <input type="checkbox" /> Erupciones en la piel</div>
                        <div>  <input type="checkbox" />Tos</div>
                        <div>  <input type="checkbox" />Dolores musculares</div>
                        <div> <input type="checkbox" />Dolor de cabeza</div>
                        <div> <input type="checkbox" /> Vomito</div>
                    </div>
                    <label>Sintomas Adicionales</label>
                    <div className='contentTextarea'><textarea type="textarea" rows="5" cols="60" /></div>

                    <button className='botonGeneral'> Guardar</button>
                </div>

            </div>
            <Modal show={show} setShow={setShow} title={"Crear Noticias"} >



            </Modal>


        </div>
    )
}
