import React from 'react'

export const Newsletter = () => {
    return (
        <div className="newsletter">
            <span className='descuento'>
            ¿Quieres 5€ de descuento?
            </span>
            <span className='apuntate'>
                Apúntate a nuestra Newsletter y recibirás un código promocional y ofertas exclusivas de la Sirena
            </span>
            <form>
                <input type='text' placeholder='Tu mejor correo electrónico' className='mejor_correo' />
                <button className='enviar_correo'>Enviar</button>
                <label className='check_info'><input type='checkbox' />Quiero recibir información comercial y publicitaria sobre productos, novedades y/o eventos de La Sirena de acuerdo con su Política privacidad</label>
            </form>
            <div className="img_correo">
                <img src="src/assets/fondo_correo.svg"/>
            </div>
            
        </div>
    )
}
