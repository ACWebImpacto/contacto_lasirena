import { ContenedorLogo } from "./components/ContenedorLogo";
import { Formulario } from "./components/Formulario";
import { Informacion } from "./components/Informacion"
import { Newsletter } from "./components/Newsletter";

export const Contacto = () => {

    const texto1 = '¿Tienes alguna consulta sobre nuestros servicios o productos? Puedes contactar con nosotros aquí o mediante:';
    const contactos1 = [
        {
            texto_info: 'Correo electrónico:',
            texto_contacto: 'sac@lasirena.es',
            nombreIcono: 'correo'
        },
        {
            texto_info: 'Teléfono de contacto:',
            texto_contacto: '900 21 06 21',
            nombreIcono: 'telefono'
        },
        {
            texto_info: 'Horario de atención:',
            texto_contacto: 'Lunes a Sábado de 9:00 a 21:00h',
            nombreIcono: 'horario'
        }
    ];
    const texto2 = '¿Estás buscando tiendas la Sirena cerca de ti?';
    const contactos2 = [
        {
            texto_info: 'Buscar tiendas',
            texto_contacto: '',
            nombreIcono: 'caseta'
        }
    ]

    return (
        <>
        <div className="Desktop">
            <div className="header">
                <div className="preheader"></div>
                <ContenedorLogo />
            </div>
            <div className="breadcrumb"></div>
            <div className="contenedor_contacta">
                <span className="texto_contacta">Contacta con nosotros</span>
            </div>
            <div className="contenedor">
                <div className='informacion'>
                    <Informacion texto={ texto1 } contactos={ contactos1 }/>
                    <Informacion texto={ texto2 } contactos={ contactos2 }/>
                </div>
                <div className="colum_contacto">
                    <Formulario />
                </div>
            </div>
            <div className="container_primary_info">
            </div>
            <div className="footer">
                <Newsletter />
                <div className="other_content">

                </div>
            </div>
        </div>
        </>
    )
}
