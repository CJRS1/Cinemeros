import React from 'react'
// import movies from "../../../src/movies.json"
import { ListingsCard } from "./ListingsCard"
import { useEffect } from 'react'
import { useState } from 'react'
import { get } from '../../../src/utils/httpClient'
import Search from './search/Search'
import { useQuery } from '../../hooks/useQuery'

import './listing.css'


function Listings() {
  const [movies, setMovies] = useState([]);

  const query = useQuery();
  const search = query.get("search");
  const searchgenre = query.get("genre");
  console.log('hola',searchgenre);

  useEffect(() => {
    var searchUrl = "/discover/movie";
    if (search){
      searchUrl = `/search/movie?query=${search}`;
    }
    if (searchgenre){
      searchUrl = `/discover/movie?&with_genres=${searchgenre}`;
    }
    console.log(searchUrl);
    get(searchUrl).then((data) => {
      setMovies(data.results);
    });
  }, [search,searchgenre]);

  return (
    <div id="Listings">
      <Search />
      <ul className='listingsGrid'>
        {movies.map((movie) => (
          <ListingsCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default Listings