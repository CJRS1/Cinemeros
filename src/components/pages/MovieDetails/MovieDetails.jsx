import React from 'react';
// import movie from "../../../../src/moviesd.json"
// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import './moviedetails.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router';

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
        </div>
    );
};

export default MovieDetails;