import React from 'react'
export default function ({ setStep }) {
    return (
        <div className='sidebar'>
            <div className=''>
                <h3 className='tituloBarraLateral'>Usuario</h3>
                <p className='ButtonSidebar' onClick={() => { setStep(3) }}>Sintomas</p>
                <p className='ButtonSidebar' onClick={() => { setStep(4) }}>Noticias</p>
                <h3 className='tituloBarraLateral'>Administrador</h3>
                <p className='ButtonSidebar' onClick={() => { setStep(5) }}> Crear Noticias</p>

            </div>

        </div>
    )
}
