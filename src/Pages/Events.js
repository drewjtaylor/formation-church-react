import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import EventList from "../Components/Events/EventList";
import AddEventForm from "../Components/Events/AddEventForm";
import demoEvents from "../demoData/demoEvents";

const Events = () => {
    const [eventList, setEventList] = useState(demoEvents);


    return (
        <>
            <Container>
            <h1 className="text-center">Welcome to the Church events page</h1>
            <h5 className="text-center mb-xxl-5">If you would like to add an event, please enter the information in the form on the right</h5>
                <Row>
                    <Col><h2>Upcoming events</h2></Col>
                    <Col><h2>Add an Event</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <EventList events={eventList}/>
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