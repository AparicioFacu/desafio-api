import { Col, Row } from 'react-bootstrap';
import './personaje.css';

const Personaje = ({ personaje }) => {
    const status = () => {
        if (personaje.status === 'Alive') {
            return <span className="icon-status-alive"></span>;
        } else if (personaje.status === 'Dead') {
            return <span className="icon-status-Dead"></span>;
        } else {
            return <span className="icon-status-Unknown"></span>;
        }
    };

    return (
        <div>
            <Row className="articulo bg-dark">
                <Col sm={12} className="image ">
                    <img src={personaje.image} alt="" />
                </Col>
                <Col sm={12} className="contenedor ">
                    <div className="primero">
                        <a href="#">{personaje.name}</a>
                        <span>
                            {status()}
                            {personaje.status} - {personaje.species}
                        </span>
                    </div>
                    <div className="segundo">
                        <span className="text-gray">Last known location:</span>
                        <a href="#">{personaje.location.name}</a>
                    </div>
                    <div className="tercero">
                        <span className="text-gray">First seen in:</span>
                        <a href="#">{personaje.origin.name}</a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Personaje;
