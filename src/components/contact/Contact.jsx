import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_blh5iqm', 'template_1k4toxr', form.current, 's78y_lGNNKxNmiB9Q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h2>Contáctanos</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>reyes.christian@pucp.pe</h5>
                        <a href="mailto:reyes.christian@pucp.pe" rel="noopener noreferrer" target="_blank">¿Necesitas ayuda? Envíanos un mensaje</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+51 993221518</h5>
                        <a href="https://wa.me/+51993221518" rel="noopener noreferrer" target="_blank">¿Necesitas ayuda? Envínos un mensaje</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail} className='form__message' id="formul">
                    <input type="text" name="name" id="" placeholder='Escribe tu nombre completo' required />
                    <input type="text" name="email" id="" placeholder='Escribe tu email' required />
                    <textarea className='Mensaje' name="message" id="" rows="10" placeholder='Tu mensaje' required></textarea>
                    <button type='submit' value="send" className='btn btn-primary'>Enviar mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default Contact