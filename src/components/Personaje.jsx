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
            <article className="articulo">
                <div className="image">
                    <img src={personaje.image} alt="" />
                </div>
                <div className="contenedor">
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
                </div>
            </article>
        </div>
    );
};

export default Personaje;
