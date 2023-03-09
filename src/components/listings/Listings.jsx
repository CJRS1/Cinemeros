import React from 'react'
// import movies from "../../../src/movies.json"
import { ListingsCard } from "./ListingsCard"
import { useEffect } from 'react'
import { useState } from 'react'
import './listing.css'


function Listings() {
  // let movies =[];

  const [movies, setMovies] = useState([]);
  // const movies = moviesState[0];
  // const setMovies = moviesState[1];
  // const[movies,setMovies] = moviesState;

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2Y3YmM0MTVkZWY4YjE2YTRjYTM5OTQ2MmU2MmFlZCIsInN1YiI6IjYzNDM2NzJmYTYxZGUxMDA3ZGRiMWI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuUVbDUWqkyOSgtvZ65QAhzROc58pmZ-ZbrEmcar5ek",
        "Content-type": "application/json;charset=utf-8",
      },

    })
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
      });

  }, []);

  return (

    <div id="Listings">

      <div className='search__container' for="nombre">
        <select className ="selector__container" name="" id="">
          <option value="">Todas las catergorías</option>
          <option value="Horror">Terror</option>
          <option value="Comedy">Comedia</option>
          <option value="Science Fiction">Ciencia Ficción</option>
          <option value="Action">Acción</option>
          <option value="Romance">Romance</option>
        </select>
        <input id="input1" type="text" name='nombre' max_length="15" placeholder='  Hola, ¿qué película deseas ver?' />
      </div>


      <ul className='listingsGrid'>
        {movies.map((movie) => (
          <ListingsCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>

  )
}

export default Listings