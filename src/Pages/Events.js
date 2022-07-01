import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ChurchAgenda from "../Components/ChurchAgenda";
import AddEventForm from "../Components/AddEventForm";
import demoEvents from "../demoData/demoEvents";

const Events = () => {
    const [eventList, setEventList] = useState(demoEvents);

    

    return (
        <>
            <Container>
            <h1>Welcome to the Church events page</h1>
            <p>Please note our upcoming events on the left.</p>
            <p>If you would like to add an event, please enter the information in the form on the right</p>
                <Row>
                    <Col>
                        <ChurchAgenda events={eventList} />
                    </Col>
                    <Col>
                        <AddEventForm />
                    </Col>
                </Row>
            </Container>
    
        </>
    )
};

export default Events;