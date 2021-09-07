import axios from 'axios';
import { useEffect, useState } from 'react';
import Personaje from '../components/Personaje';

const Home = () => {
    const [personajes, setPersonajes] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const request = async () => {
            try {
                const response = await axios.get(
                    `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`
                );
                const characters = response.data.results;
                setPersonajes(characters);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        request();
    }, [page, status]);

    const mapPersonajes = personajes.map((per) => (
        <Personaje personaje={per} />
    ));

    const changeStatus = (event) => {
        setStatus(event.target.value);
    };

    const pageNext = () => setPage(page + 1);
    const pagePrevious = () => setPage(page - 1);
    const isPreviousPage = page === 1;
    const isNextPage = page === 34;
    console.log(page);
    return (
        <>
            <form className="body text-center">
                <label htmlFor="status" className="text-white text-center px-3">
                    STATUS:
                </label>
                <select
                    className="form-select"
                    name="status"
                    id="status"
                    onChange={changeStatus}
                >
                    <option value="">AllCharacters</option>
                    <option>Alive</option>
                    <option>Dead</option>
                    <option>Unknown</option>
                </select>
            </form>
            <div className="body d-flex flex-wrap justify-content-center">
                {mapPersonajes}
            </div>
            <div className="body text-center p-5">
                <button
                    onClick={pagePrevious}
                    disabled={isPreviousPage}
                    className="btn btn-warning mx-3"
                >
                    Anterior
                </button>
                <button
                    onClick={pageNext}
                    disabled={isNextPage}
                    className="btn btn-warning mx-3"
                >
                    Siguiente
                </button>
            </div>
        </>
    );
};

export default Home;
