import './register.css'

import React, { useState } from 'react';

const Register = () => {
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    const registrar = (e) => {
        e.preventDefault();
        const data = { nombre, apellido, correo, password }
        console.log(nombre)
        fetch("http://127.0.0.1:8000/registro/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },

        })
            .then((request) => {
                return request.json();

            })
            .then((data) => {
                console.log(data);
                // window.location.href = "/mostrar-alumnos";
            })
            .catch((error) => {
                console.log("error al crear el alumno");
            });
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("input3").value = "";
        document.getElementById("input4").value = "";
    }


    return (
        <div>
            <form className='Card_form' id="formul">
                <label className='Card_label' htmlFor="nombre">
                    <h6 className='label_h6'>Nombre:</h6>
                    <input id="input1" type="text" name='nombre' max_length="15" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </label>
                <label className='Card_label' htmlFor="apellido">
                    <h6 className='label_h6'>Apellido:</h6>
                    <input id="input2" type="text" name='apellido' max_length="15" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </label>
                <label className='Card_label' htmlFor="correo">
                    <h6 className='label_h6'>Correo:</h6>
                    <input id="input3" type="email" name='email' max_length="50" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </label>
                <label className='Card_label' htmlFor="password">
                    <h6 className='label_h6'>Contraseña:</h6>
                    <input id="input4" type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div className="container_btn">
                    <button type="button|submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btn_agregar" onClick={registrar} >
                        Agregar
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Register;