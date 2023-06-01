import React from 'react'
import { Metodo_Contactar } from './Metodo_Contactar'

export const Informacion = ( { texto = '', contactos = [] } ) => {


    return (
        <>
            <div className='info_contacto'>
                <div className='info_contacto_texto'>
                    <div className='perfil_usuario'>
                        <span className='perfil_usuairo_texto'>{ texto }</span>
                    </div>
                    <div className='formas_contactar'>
                        {
                            contactos.map( (contacto, id ) =>(
                                <Metodo_Contactar
                                    key={id}
                                    texto_info={ contacto.texto_info}
                                    texto_contacto={ contacto.texto_contacto}
                                    nombreIcono={ contacto.nombreIcono }
                                />
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
        

    )
}
