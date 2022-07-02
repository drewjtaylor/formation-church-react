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
            <h1>Welcome to the Church events page</h1>
            <p>Please note our upcoming events on the left.</p>
            <p>If you would like to add an event, please enter the information in the form on the right</p>
                <Row>
                    <Col>
                        <div className='overflow-auto'>
                            <EventList events={eventList}/>
                        </div>
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