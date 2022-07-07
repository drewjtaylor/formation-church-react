import {Container, Col, Row} from 'reactstrap';
import { Link } from 'react-browser-router';


const ChurchGatheringsPage = () => {
    return <Container>
        <Row>
            <Col>
                <h2 className='text-center py-3'>Currently, we meet in the Grace Brethren Church building</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>Since we do not have our own building, Grace Brethren Church of Pinellas Park graciously offers its building for our use.</h4>
                <br />
                <h5>It is located on 62nd Avenue North between 49th Street and 66th Street.</h5>
                <br />
                <Row><Col><h4>Meeting times:</h4></Col></Row>
                <Row>
                    <Col xs='3'>Sunday: </Col>
                    <Col xs='9'>7:00 PM</Col>
                </Row>
                <Row>
                    <Col xs='3'>Wednesday:</Col>
                    <Col xs='9'>7:00 PM</Col>
                </Row>
                <Row className='mt-5'><Col>Click <Link to='/events'>here</Link> to see any upcoming events</Col></Row>
            </Col>
            <Col><div class="mapouter"><div class="gmap_canvas"><iframe title='map' width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=6300%2062nd%20ave%20n,%20pinellas%20park&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br /></div></div></Col>
        </Row>
    </Container>
}


export default ChurchGatheringsPage;