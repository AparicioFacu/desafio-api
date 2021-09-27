import axios from 'axios';
import { useEffect, useState } from 'react';

import NavB from '../components/NavB';
import PaginationB from '../components/PaginationB';
import Personaje from '../components/Personaje';
import { API_URL } from '../config/api';

const Home = ({ personajes, setPersonajes }) => {
    // const [personajes, setPersonajes] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    // const [locations, setLocations] = useState([]);

    useEffect(() => {
        const request = async () => {
            try {
                /* guardar todas la paginas en un array */
                // let promises = [];
                // for (let i = 1; i <= 34; i++) {
                //     const promise = axios.get(
                //         `${API_URL}/character/?page=${i}&status=${status}`
                //     );
                //     promises = [...promises, promise];
                // }
                // const responses = await Promise.all(promises);
                // let array = [];
                // for (let i = 0; i < responses.length; i++) {
                //     const response = responses[i];
                //     array = [...array, ...response.data.results];
                // }
                // setPersonajes(array);
                const responseCharacter = await axios.get(
                    `${API_URL}/character/?page=${page}&status=${status}&species=${species}`
                );
                const characters = responseCharacter.data.results;
                setPersonajes(characters);
            } catch (error) {
                console.error(error);
            }
        };
        request();
    }, [status, species, page]);

    const pageNext = () => {
        setPage(page + 1);
    };

    /*Paginado */
    // const limit = 8;
    // const initial = 0 + (page * limit - limit);
    // const last = initial + limit;
    // const newsPaginated = personajes
    //     //.filter((pers) => pers.status === status)
    //     //.filter((pers) => pers.species === species)
    //     .slice(initial, last);
    // const mapPersonajes = newsPaginated.map((per) => (
    //     <Personaje personaje={per} />
    // ));

    const mapPersonajes = personajes.map((per) => (
        <Personaje personaje={per} />
    ));
    // const pagePrevious = () => setPage(page - 1);
    // const isPreviousPage = page === 1;
    // const isNextPage = page === 34;
    return (
        <>
            <NavB setStatus={setStatus} setSpecies={setSpecies} />
            <div className="body d-flex flex-wrap justify-content-center">
                {mapPersonajes}
            </div>
            <div className="body p-5">
                <PaginationB page={page} setPage={setPage} />
            </div>
        </>
    );
};

export default Home;
