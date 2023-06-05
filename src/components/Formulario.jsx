import React from 'react'

export const Formulario = () => {

    
    function onRobbot(token) {
        document.getElementById("demo-form").submit();
    }

    return (
        <form>
            <div className='formulario'>
                <div className='elemento_form'>
                    <span className='titulo_elm_form'>Asunto</span>
                    <select className='select' id='asunto' >
                        <option className='opcion' value='' disabled selected>-Elije asunto-</option>
                        <option className='opcion' value='opcion1'>opcion1</option>
                        <option className='opcion' value='opcion2'>opcion2</option>
                        <option className='opcion' value='opcion3'>opcion3</option>
                    </select>
                </div>
                <div className='elementos_form'>
                    <div className='elemento_form'>
                        <span className='titulo_elm_form'>Nombre *</span>
                        <input className='input_corto' type="text" id="nombre" pattern='[A-Za-z]{1,20}' required></input>
                    </div>
                    <div className='elemento_form'>
                        <span className='titulo_elm_form'>Apellidos *</span>
                        <input className='input_corto' type="text" id="apellidos"  pattern='[A-Za-z]{1,40}' required></input>
                    </div>
                </div>
                <div className='elementos_form'>
                    <div className='elemento_form'>
                        <span className='titulo_elm_form'>Correo electrónico</span>
                        <input className='input_corto' type="email" id="email" pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$' required></input>
                    </div>
                    <div className='elemento_form'>
                        <span className='titulo_elm_form'>Teléfono</span>
                        <input className='input_corto' type="tel" id="telefono" pattern="[0-9]{9}" required></input>
                    </div>
                </div>
                <div className='elemento_mensaje'>
                    <span className='titulo_elm_form'>Mensaje</span>
                    <textarea className='input_largo' type="text" id="mesnaje" required />
                </div>
            </div>
            <div className='contenedor_leido'>
                <input type="checkbox" id="leido" name="leido" required/>
                <label htmlFor="leido" className='texto_leido'>He leído y acepto la política de privacidad de contacto.</label>
            </div>
            <div className='no_robot'>
            <form action="?" method="POST">
                <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                <br/>
                <input type="submit" value="Submit" />
            </form>
            </div>
            <input className='enviar' type="submit" name="enviar" value="ENVIAR" ></input>
        </form>
    )
}
