import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <section id='footer'>
            <h6 className="footer-nav__credits">
                Copyright &copy; 2022 <a href="https://www.linkedin.com/in/crso/"
                    className="footer__creditos" target="_blank" rel="noopener noreferrer">Christian Reyes.</a> Todos los derechos
                reservados.
            </h6>
            <h6 className="footer-nav__credits2">
            Copyright &copy; 2022 <a href="https://www.linkedin.com/in/crso/"
                    className="footer__creditos" target="_blank" rel="noopener noreferrer">Christian Reyes.</a> 
            </h6>
            <h6 className="footer-nav__credits2">
                Todos los derechos reservados.
            </h6>
        </section>
        
    )
}

export default Footer