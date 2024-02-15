import React from 'react'
import yo from '../img/yo2.png'
import cvPdf from '../img/GuillermoGirauCV.pdf'
import TypewriterWithAuthor from "../components/TypewriterWithAuthor"

function about() {
    return (
        <div className='about' id='about'>
            <h2 className='cTitle'>SOBRE MI</h2>
            <div className="aboutInfo">
                <div className='sobreMi'>
                    <p>Me forme para diseñar la imagen de empresas, crear logotipos, folletos, packaging, entre otras. También cuento con las herramientas necesarias para desarrollar aplicaciones y sitios web respondiendo a los intereses de los clientes.</p>
                    <div className="personalData">
                        <span className='data'><b>Nombre:</b> Guillermo Lucas Girau</span>
                        <span className='data'><b>Fecha de nacimiento:</b>  26/01/1990</span>
                        <span className='data'><b>Nacionalidad:</b> Argentino</span>
                        <span className='data'><b>Dirección:</b> Buenos Aires, Argentina</span>
                        <span className='data'><b>Correo:</b> giraugguillermo@gmail.com</span>
                        <span className='data'><b>Teléfono:</b> 1133127266</span>
                        <span className='data'><b>Idiomas:</b> Español, Ingles</span>
                    </div>
                    <button className="btnCV">
                        <a href={cvPdf} target="_blank">DESCARGA MI CV</a>
                    </button>
                </div>
                <img className='foto' src={yo} alt="Guillermo Lucas Girau" />
            </div>
            <div className="frase">
                <div className='chapa'>
                    <div class="agujero agujero1"></div>
                    <div class="agujero agujero2"></div>
                    <div class="agujero agujero3"></div>
                    <div class="agujero agujero4"></div>
                    <TypewriterWithAuthor text="ELIGE UN TRABAJO QUE TE APASIONE Y NO TENDRÁS QUE TRABAJAR NI UN DÍA DE TU VIDA" author="Confucio" />
                </div>
            </div>
            
        </div>
    )
}

export default about