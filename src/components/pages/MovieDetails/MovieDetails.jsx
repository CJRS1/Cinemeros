import React from 'react';
// import movie from "../../../../src/moviesd.json"
// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import './moviedetails.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router';
import Modal from "./Modal";

const MovieDetails = () => {


    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + movieId, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2Y3YmM0MTVkZWY4YjE2YTRjYTM5OTQ2MmU2MmFlZCIsInN1YiI6IjYzNDM2NzJmYTYxZGUxMDA3ZGRiMWI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuUVbDUWqkyOSgtvZ65QAhzROc58pmZ-ZbrEmcar5ek",
                "Content-type": "application/json;charset=utf-8",
            },

        })
            .then((result) => result.json())
            .then((data) => {
                setMovie(data);
            });

    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    const mostrarnombre = () => {
        const peliculas = JSON.stringify(movie.title)
        // const nombre = movie.title
        const nombre = { peliculas }
        console.log(nombre)

        fetch("http://127.0.0.1:8000/pelicula/", {
            method: "POST",
            body: JSON.stringify(nombre),
            headers: { "Content-Type": "application/json" },

        })
            .then((request) => {
                return request.json();

            })
            .then((peliculas) => {
                console.log(peliculas);
                // window.location.href = "/mostrar-alumnos";
            })
            .catch((error) => {
                console.log("error al crear el nombre de la pelicula");
            });
    }


    return (
        <div className='detailContainer'>
            <img className='movieImage' src={imageUrl} alt={movie.title} />
            <div className='Container_description'>
                <p><strong>Title: </strong> {movie.title} </p>
                <p><strong>Genred: </strong>
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p className='description'><strong >Description: </strong> {movie.overview} </p>
            </div>
            <div className="container_btn" style={{ display: 'block', position: 'initial' }}>

                {/* <button type="button|submit" class="btn btn-primary" variant="primary">
                    Comprar Entradas
                </button> */}
                <Modal/>

                <button type="button|submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btn_agregar" onClick={mostrarnombre}>
                    Crear Película
                </button>

            </div>
        </div>
    );
};

export default MovieDetails;