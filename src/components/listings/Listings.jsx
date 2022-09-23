import React from 'react'
import movies from "../../../src/movies.json"
import { ListingsCard } from "./ListingsCard"
import './listing.css'

function Listings() {
  return (
    <div id="Listings">
      <ul className='listingsGrid'>
        {movies.map((movie) => (
          <ListingsCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>

  )
}

export default Listings