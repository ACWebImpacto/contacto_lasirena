import React from 'react'

export const Metodo_Contactar = ( {texto_info = '', texto_contacto = '', nombreIcono = ''} ) => {

    const icono = `src/assets/${nombreIcono}.svg`;
    return (
        <div className='formas_contactar_div'>
            <img src={ icono } />
            <span className='texto_info'>{ texto_info }</span>
            <span className='texto_contacto'>{ texto_contacto }</span>
        </div>
    )
}

