import React from 'react'
import './listing.css'

function ListingsCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className='listingsCard'>
            <img className='movieImage' src={imageUrl} alt={movie.title} width={230} height={345} />
            <div >{movie.title}</div>
        </li>
    )
}

export {ListingsCard}