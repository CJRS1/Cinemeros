import React from 'react';
import './WorkWithUs.css'


const WorkWithUs = () => {
    return (
        <div className="container__work">

            <div className="container-pc__work">

                <div className='card-pc__work' id="work">

                    <h1>Trabaja con nosotros</h1>
                    <br />
                    <h4>Hola somos Cinemeros, empresa líder en entretenimiento y con certificación GPTW, estamos contentos de que estes interesado en aplicar.
                        En Cinemeros siempre estamos buscando personas proactivas, dinámicas con falicidad de comunicación y con orientación al servicio al cliente.
                        Aplica para nuestros empleos Full Time y Part Time, te esperamos para que vivas esta maravillosa experiencia.</h4>
                    <br />
                    <h5>Envíamos tu CV a nuestro correo cinemerosempleos@cimemero.pe, presentándote y diciéndonos por qué te gustaría trabajar con nosostros.</h5>
                </div>
                
                </div>


                <div className="container-movil__work">
                    <div className='card-movil__work' id="work">
                        <h1>Trabaja con nosotros</h1>
                        <h5>Envíamos tu CV a nuestro correo cinemerosempleos@cimemero.pe, presentándote y diciéndonos por qué te gustaría trabajar con nosostros.</h5>
                    </div>
                </div>

            
        </div>




    );
};

export default WorkWithUs;