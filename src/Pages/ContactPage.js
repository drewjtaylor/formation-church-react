import { Container, Row, Col } from 'reactstrap';
import ContactForm from '../Components/ContactForm';

const ContactPage = () => {
    return <Container>
            <Row className='my-3'>
                <Col>
                    <h5>If you have any questions or you would like to reach out to us, please reach out using our <a href="https://www.facebook.com/ourformationchurch/">facebook page</a>.</h5>
                </Col>
            </Row>
            <Row className='my-3'>
                <Col>
                <h5>If you would like us to contact you, please fill out the information below.</h5>
                <p className='text-secondary'>Note: We do not share this information. It will be used only for making contact with you or sharing church news, such as event reminders or cancellations.</p></Col>
            </Row>
            <ContactForm />
        </Container>
}


export default ContactPage;