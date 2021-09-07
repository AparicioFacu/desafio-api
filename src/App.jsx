import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/NavB';

import FooterB from './components/FooterB';
import Home from './pages/Home';
import CarouselB from './components/CarouselB';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
    return (
        <div className="footer-fix">
            <NavB />
            <CarouselB />
            <Row>
                <Col md={12}>
                    <Home personajes />
                </Col>
            </Row>
            {/* <Container className="body"> */}

            {/* </Container> */}
            <FooterB />
        </div>
    );
}

export default App;
