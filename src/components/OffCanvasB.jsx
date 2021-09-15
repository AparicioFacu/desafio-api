import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const OffCanvasB = ({ setStatus, setSpecies }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeStatus = (event) => {
        setStatus(event.target.innerText);
    };

    const changeSpecies = (event) => {
        setSpecies(event.target.innerText);
    };

    return (
        <>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleShow}
            ></Navbar.Toggle>
            <Offcanvas
                className="bg-nav-footer"
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header className="btn-canvas" closeButton>
                    <Offcanvas.Title className="text-white">
                        Rick and Morty
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                        <Nav className="me-auto">
                            <NavDropdown title="Status" id="basic-nav-dropdown">
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
                            {/* <Nav.Link className="text-white" href="#link">
                                Locations
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffCanvasB;
