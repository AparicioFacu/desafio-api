import { Col, Row, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './personaje.css';

const Personaje = ({ personaje }) => {
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
        <div>
            <Row className="articulo bg-card ">
                <Col sm={12} className="image ">
                    <img src={personaje.image} alt="" />
                </Col>
                <Col sm={12} className="contenedor ">
                    <div className="primero">
                        <a>{personaje.name}</a>
                        <span>
                            {status()} {personaje.species}
                        </span>
                    </div>
                    <div className="segundo">
                        <span className="text-gray">Last known location:</span>
                        <a>{personaje.location.name}</a>
                    </div>
                    <div className="tercero">
                        <span className="text-gray">First seen in:</span>
                        <a>{personaje.origin.name}</a>
                    </div>
                    <div className="botonCharacter text-center">
                        <Button
                            as={Link}
                            to={`/character/${personaje.id}`}
                            className="btn btn-warning text-dark"
                            variant="primary"
                        >
                            Ver detalle
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Personaje;
