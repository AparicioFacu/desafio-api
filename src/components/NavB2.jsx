import img from '../assets/logo.png';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavB2 = () => {
    const history = useHistory();
    return (
        <>
            <Navbar className="bg-nav-footer" variant="dark">
                <Container
                    fluid
                    className="d-flex flex-wrap justify-content-between"
                >
                    <div>
                        <Navbar.Brand href="/" className="navbrand">
                            <img src={img} width="70" alt="" />
                        </Navbar.Brand>
                    </div>
                    <div>
                        <button
                            onClick={history.goBack}
                            className="btn btn-warning d-flex mt-3 flex-wrap justify-content-end m-auto"
                        >
                            Atras
                        </button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};
export default NavB2;
