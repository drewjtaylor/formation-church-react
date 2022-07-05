import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import { SelectAllEvents } from './eventSlice';
import { useSelector } from 'react-redux';


const EventList = () => {  
    const allEvents = useSelector(SelectAllEvents);

    return (
        allEvents.map((event) => {
            const displayDate = event.date.toDateString();
            const displayTime = event.date.toLocaleTimeString();

            return <Card key={event.id}>
                <CardBody>
                    <CardTitle>{event.title}</CardTitle>
                    <CardSubtitle>{displayDate} {displayTime}</CardSubtitle>
                    <CardText>{event.description}</CardText>
                </CardBody>
            </Card>
        })
    )
};


export default EventList;