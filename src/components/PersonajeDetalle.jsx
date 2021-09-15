import React from 'react';
import { Card, span } from 'react-bootstrap';

const PersonajeDetalle = ({ personaje }) => {
    const { image, name, species, origin, location } = personaje;
    const status = () => {
        if (personaje.status === 'Alive') {
            return <span className="icon-status-alive">Alive</span>;
        } else if (personaje.status === 'Dead') {
            return <span className="icon-status-Dead">Dead</span>;
        } else {
            return <span className="icon-status-Unknown">Unknown</span>;
        }
    };

    return (
        <Card
            className="bg-card mx-auto my-4 p-3 text-light"
            style={{ width: '23rem' }}
        >
            <Card.Img variant="top" src={image} />

            <Card.Body>
                <Card.Title title={name} className="text-truncate">
                    {name}
                </Card.Title>

                <p title={species} className="text-truncate">
                    <span className="text-gray">Specie: </span> {species}
                </p>
                <p title={origin?.name} className="text-truncate">
                    <span className="text-gray">Origin: </span>
                    {origin?.name}
                </p>
                <p title={location?.name} className="text-truncate">
                    <span className="text-gray">Location: </span>
                    {location?.name}
                </p>
            </Card.Body>

            <Card.Footer>
                <span>{status()}</span>
            </Card.Footer>
        </Card>
    );
};

export default PersonajeDetalle;
