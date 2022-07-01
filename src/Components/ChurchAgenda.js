import AddEventForm from "./AddEventForm";
import EventList from './EventList';
import {Container, Row, Col} from 'reactstrap';



const ChurchAgenda = ({events}) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <EventList events={events}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default ChurchAgenda;
//Used on the Events Page to list upcoming events in a lit form