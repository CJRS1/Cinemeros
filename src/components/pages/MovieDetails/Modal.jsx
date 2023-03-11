// import { arrow } from '@popperjs/core';
import React, { useState } from 'react';

const Modal = () => {


    const [id_asiento, setAsiento] = useState('')


    const Comprar = (e) => {
        e.preventDefault();
        const data = { id_asiento }
        console.log(id_asiento)
        fetch("http://127.0.0.1:8000/asientos-toggle/" + id_asiento, {
            method: "PUT",
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
                console.log("Error al cambiar de disponibilidad");
            });
        document.getElementById("input1").value = "";

    }
    let datas
    let a = []
    let c 
    fetch("http://127.0.0.1:8000/Lasientos/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            datas = data;
            for (let i = 0; i < datas.content.length; i++) {
                a[i] = datas.content[i].id_asiento

            }

            c = a.join(",")
            console.log(c);
        });





    return (<div className='modal_container'>


        <div className='button_container' id='button_container'>

            <h1> Escoja los asientos: Escriba ,{c} </h1>

            <label className='Card_label' for="nombre">
                <h6 className='label_h6'>Asiento:</h6>
                <input id="input1" type="text" name='nombre' max_length="15" value={id_asiento} onChange={(e) => setAsiento(e.target.value)} />
            </label>

            <div>
                <button class="btn btn-primary" id="comprar" onClick={Comprar}> Comprar Entradas</button>
            </div>

        </div>
        <script src="index.js"></script>
    </div>)

}

export default Modal;