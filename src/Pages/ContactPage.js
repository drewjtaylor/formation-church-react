import { Container, Row, Col } from 'reactstrap';
import ContactForm from '../Components/ContactForm';

const ContactPage = () => {
    return <Container>
            <Row>
                <Col>
                    <h1>We want to connect with you!</h1>
                    <p>If you would like us to contact you, please fill out the form below.</p>
                    <p>We never share your information with anyone else.</p>
                </Col>
            </Row>
            {/* <ContactForm /> */}
        </Container>
}


export default ContactPage;