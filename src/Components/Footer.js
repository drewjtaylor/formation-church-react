import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Row, Col, Container,} from 'reactstrap';

const Footer = () => {
    const footerStyle = "color: inherit;";
    return (
        <>
            <footer className="site-footer">
                <Container className="py-3 my-4 border-top">
                    <Row className="justify-content-center">
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="index.html"> Home</a></li>
                                <li><a href="/aboutus.html"> About</a></li>
                                <li><a href="/contactus.html"> Contact</a></li>
                            </ul>
                        </div>
                            <Col xs='6' sm='3' className='text-center'>
                                <h5>Social</h5>
                                <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>{' '}
                                <a className='btn btn-social-icon btn-facebook' href='http://www.facebook.com/'>
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </a>{' '}
                                <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>{' '}
                                <a className='btn btn-social-icon btn-google' href='http://youtube.com/'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </Col>
                        <div className="col-md-4 text-center">
                            <a role="button" className="btn btn-link" href="tel:+17275551234"><FontAwesomeIcon icon={faPhone} /></a> 1-727-555-1234<br />
                            <a role="button" className="btn btn-link" href="mailto:notarealemail@formedchurch.com"><FontAwesomeIcon icon={faEnvelope} />{' '}notarealemail@formedchurch.com </a>
                        </div>
                    </Row>
                </Container>
            </footer>


            <div className="container">
                <footer className="d-flex flex-wrap justify-content-center pb-3 text-muted">
                    <div className="col text-center">
                    &copy; 2022, <a href="#">Taylormade Web Design, Inc</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;