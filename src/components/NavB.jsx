import React from 'react';
import img from '../img/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavB = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container className="">
                    <Navbar.Brand href="#home">
                        <img src={img} width="100" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Docs</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Help US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavB;
