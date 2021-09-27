import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Redirect } from 'react-router-dom';
import PersonajeDetalle from '../components/PersonajeDetalle';

import NavB2 from '../components/NavB2';

const Character = ({ character }) => {
    const { charId } = useParams();

    const personajeEncontrado = character.find((per) => per.id == charId);

    if (personajeEncontrado === undefined) {
        return <Redirect to="/404" />;
    }

    return (
        <div>
            <NavB2 />
            <h2 className="bg-titulo text-center m-auto text-white mt-3">
                {personajeEncontrado.name}
            </h2>
            <Container>
                <PersonajeDetalle personaje={personajeEncontrado} />
            </Container>
        </div>
    );
};

export default Character;
