import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import { SelectAllEvents } from './eventSlice';
import { useSelector } from 'react-redux';


const EventList = () => {  
    const allEvents = useSelector(SelectAllEvents);

    return (
        allEvents.map((event) => {
            return <Card key={event.id}>
                <CardBody>
                    <CardTitle>{event.title}</CardTitle>
                    <CardSubtitle>Add date here later</CardSubtitle>
                    <CardText>{event.description}</CardText>
                </CardBody>
            </Card>
        })
    )
};


export default EventList;