import { React } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './search.css'

function Search() {
    // const query = useQuery();
    // const search = query.get("search");
    const [searchGenres, setSearchGenres] = useState('');
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    // console.log(search);

    /*  useEffect(() => {
         setSearchText(search || "");
     }, [search]); */

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/Cinemeros/?search=${searchText}`, { replace: true });
        // console.log(searchText);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const newSearchGenres = e.target.value;
        setSearchGenres(newSearchGenres);
        console.log(e.target.value);
        navigate(`/Cinemeros/?genre=${newSearchGenres}`);
    }

    return (
        <div className='search__container' for="nombre">
            <form onSubmit={handleSubmit}>
                <select className="selector__container" value={searchGenres} onChange={handleChange}>
                    <option value="">Todas las catergorías</option>
                    <option value="27">Terror</option>
                    <option value="35">Comedia</option>
                    <option value="878">Ciencia Ficción</option>
                    <option value="28">Acción</option>
                    <option value="10749">Romance</option>
                </select>
                <input id="input1" type="text" value={searchText} placeholder='Hola, ¿qué película deseas ver?' onChange={(e) => setSearchText(e.target.value)} />
            </form>
        </div>
    )
}

export default Search