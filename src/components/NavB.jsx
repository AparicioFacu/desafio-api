import React from 'react';
import img from '../assets/logo.png';
import img1 from '../assets/titulo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import OffCanvasB from './OffCanvasB';

const NavB = ({ setStatus, setSpecies }) => {
    const changeStatus = (event) => {
        setStatus(event.target.innerText);
    };
    const changeSpecies = (event) => {
        setSpecies(event.target.innerText);
    };

    return (
        <>
            <Navbar className="bg-nav-footer" variant="dark" fixed="top">
                <Container
                    fluid
                    className="d-flex flex-wrap justify-content-between"
                >
                    <div>
                        <Navbar.Brand href="/" className="navbrand">
                            <img src={img} width="70" alt="" />
                        </Navbar.Brand>
                    </div>
                    {/* <div className="navDropdown">
                        <Navbar.Brand href="/">
                            <img src={img1} width="180" alt="" />
                        </Navbar.Brand>
                    </div> */}
                    <div>
                        <OffCanvasB
                            setStatus={setStatus}
                            setSpecies={setSpecies}
                        />
                        <Navbar.Collapse
                            style={{ padding: '0px 70px 0px 0px' }}
                            className="d-none d-lg-block"
                            id="basic-navbar-nav justify-content-end"
                        >
                            <Nav className="me-auto">
                                {/* <NavDropdown
                                    title="Locations"
                                    id="basic-nav-dropdown"
                                    // style={{ overflow: 'auto' }}
                                >
                                    {locations.map((loc) => (
                                        <NavDropdown.Item key={loc.id}>
                                            {loc.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown> */}
                                <NavDropdown
                                    title="Species"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Human
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Alien
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Humanoid
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        unknown
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Poopybutthole
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Mythological Creature
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Animal
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Robot
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Cronenberg
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeSpecies}>
                                        Disease
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Status"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item onClick={changeStatus}>
                                        Alive
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeStatus}>
                                        Dead
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={changeStatus}>
                                        Unknown
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default NavB;
