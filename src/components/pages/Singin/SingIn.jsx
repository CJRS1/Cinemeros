import React from 'react';
import './singin.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const SingIn = () => {
    // const [isAuth,setIsAuth]=useState(true);

    // if(!isAuth){
    //     return <Navigate to="/"/>
    // }
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const SIn = async (e) => {
        e.preventDefault();
        // console.log(user)
        // fetch("https://reqres.in/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));

        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const status = response.status;
        const json = await response.json();
        console.log(status, json);

        if (status === 200) {
            e.target.reset();
            window.localStorage.setItem("token", json.token);
            alert("Credenciales correctas");
            navigate("/Cinemeros/singin");
        } else {
            e.target.reset();
            alert("Credenciales incorrectas");
            navigate("/Cinemeros/singin");

        };

    };

    const handleInputChange = (e) => {
        // console.log(e.currentTarget.value)
        // console.log(e.currentTarget.name)
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    };


    console.log(user)

    return (


        <div className='Container_SingIn'>
            <div className="container_back1">
                <nav className='btn_back1'><NavLink to="/Cinemeros/">Volver</NavLink></nav>
            </div>
            <div className="container_label">
                <h6 className='label_h6'>¡Bienvenido! Inicia sesión por favor.</h6>
            </div>
            <form className='Card_form' onSubmit={SIn} id="formul">
                <label className='Card_label' htmlFor="">
                    <h6 className='label_h6'>Email:</h6>
                    <input type="email" name='email' onChange={handleInputChange} />
                </label>
                <label className='Card_label' htmlFor="">
                    <h6 className='label_h6'>Contraseña:</h6>
                    <input type="password" name='password' onChange={handleInputChange} />
                </label>
                <div className="container_btn">
                    <button className='btn' type='submit'>Iniciar sesión</button>
                </div>
                <div className="container_back2">
                    <nav className='btn_back2'><NavLink to="/Cinemeros/">Volver</NavLink></nav>
                </div>
            </form>

        </div>
    );
};

export default SingIn;