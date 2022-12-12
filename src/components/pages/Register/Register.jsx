import './register.css'

import React from 'react';

const Register = () => {
    return (
        <div>
            <form className='Card_form' id="formul">
                <label className='Card_label' for="nombre">
                    <h6 className='label_h6'>Nombre:</h6>
                    <input type="text" name='nombre'max_length="15"/>
                </label>
                <label className='Card_label' for="apellido">
                    <h6 className='label_h6'>Apellido:</h6>
                    <input type="text" name='apellido' max_length="15"/>
                </label>
                <label className='Card_label' for="correo">
                    <h6 className='label_h6'>Correo:</h6>
                    <input type="email" name='email' max_length="50"/>
                </label>
                <label className='Card_label' for="password">
                    <h6 className='label_h6'>Contraseña:</h6>
                    <input type="password" name='password' />
                </label>
                <div className="container_btn">
                    <button type="submit" class="btn btn-primary" id="btn_agregar">
                        Agregar
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Register;