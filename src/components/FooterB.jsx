import { Col, Container, Row, Image } from 'react-bootstrap';
import img from '../assets/logo.png';

const FooterB = () => {
    return (
        // <div
        //     className="bg-nav-footer mt-auto text-white text-center"
        //     style={{ height: '100px' }}
        // >
        //     © 2021 Copyright RollingCode
        // </div>
        <footer className="bg-nav-footer mt-4 py-3">
            <Container>
                <Row
                    className="align-items-center"
                    style={{ minHeight: '6rem' }}
                >
                    <Col className="d-none d-md-block" md="4">
                        <Image
                            src={img}
                            alt="logo"
                            style={{ height: '5rem' }}
                        />
                    </Col>

                    <Col
                        className="d-flex flex-column align-items-center mb-3 mb-md-0"
                        md="4"
                    >
                        <a
                            className="d-flex justify-content-center mb-2"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/JJFAO"
                        >
                            {/* <img className="me-2" alt="" />
                            <h5 className="mb-1">Github</h5> */}
                        </a>
                        <a
                            className="d-flex justify-content-center"
                            target="_blank"
                            rel="noreferrer"
                            href="https://linkedin.com/in/juan-jose-f-alonso"
                        >
                            {/* <img className="me-2" alt="" />
                            <h5 className="mb-0">linkedIn</h5> */}
                        </a>
                    </Col>

                    <Col className="text-center text-md-end" md="4">
                        <h5 className="text-white mb-2">Copyright Chino®</h5>
                        <h5 className="text-white mb-0">
                            Tucumán - Argentina 2021
                        </h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterB;
