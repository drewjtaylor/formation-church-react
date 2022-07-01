import logo from '../../src/img/F-symbol-white.png';
import {Container, Row, Col } from 'reactstrap';

const Jumbotron = () => {
    return (
        <header className="jumbotron jumbotron-fluid mb-0 primary-font">
            <Container>
                <Row className="align-items-center">
                    <Col xs='4' sm='3' className="align-self-center">
                        <img className='jumbotron-logo' src={logo} alt='F for formation church'/>
                    </Col>

                    <Col>
                        <h1>Formation Church</h1>
                        <h4 className="d-none d-sm-block">Christ-centered, Community-focused</h4>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Jumbotron;