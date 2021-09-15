import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Redirect } from 'react-router-dom';
import PersonajeDetalle from '../components/PersonajeDetalle';

const Character = ({ character }) => {
    const { charId } = useParams();

    const personajeEncontrado = character.find((per) => per.id == charId);

    if (personajeEncontrado === undefined) {
        return <Redirect to="/404" />;
    }

    return (
        <div>
            <h2 className="text-center text-white mt-3">{character.name}</h2>
            <Container>
                <PersonajeDetalle personaje={personajeEncontrado} />
            </Container>
        </div>
    );
};

export default Character;
