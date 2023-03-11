import React from 'react'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMovieImg } from '../../utils/getMovieImg'
import './listing.css'


function ListingsCard({ movie }) {

    function useScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    }

    useScrollToTop();

    const imageUrl = getMovieImg(movie.poster_path,300);
    return (
        /* value={id_asiento} onChange={(e) => setAsiento(e.target.value)} */
        <>
            <li className='listingsCard'>
                <Link to={"movies/" + movie.id}>
                    <img className='movieImage' src={imageUrl} alt={movie.title} width={230} height={345} />
                </Link>
                {/* <div >{movie.title}</div> */}
            </li>
        </>
    )
}

export { ListingsCard }