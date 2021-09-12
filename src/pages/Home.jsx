import axios from 'axios';
import { useEffect, useState } from 'react';
import NavB from '../components/NavB';
import Personaje from '../components/Personaje';
import { API_URL } from '../config/api';

const Home = () => {
    const [personajes, setPersonajes] = useState([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const request = async () => {
            try {
                const responseCharacter = await axios.get(
                    `${API_URL}/character/?page=${page}&status=${status}&species=${species}`
                );
                const characters = responseCharacter.data.results;
                setPersonajes(characters);
                const responseLocations = await axios.get(
                    `${API_URL}/location/`
                );
                const localizaciones = responseLocations.data.results;
                setLocations(localizaciones);
            } catch (error) {
                console.error(error);
            }
        };
        request();
    }, [page, status, species, locations]);
    const mapPersonajes = personajes.map((per) => (
        <Personaje personaje={per} />
    ));

    const pageNext = () => setPage(page + 1);
    const pagePrevious = () => setPage(page - 1);
    const isPreviousPage = page === 1;
    const isNextPage = page === 34;
    return (
        <>
            <NavB
                setStatus={setStatus}
                setSpecies={setSpecies}
                locations={locations}
            />
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
