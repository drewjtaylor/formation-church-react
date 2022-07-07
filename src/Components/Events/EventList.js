import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import { SelectAllEvents } from './eventSlice';
import { useSelector } from 'react-redux';

const EventList = () => {  
    const allEvents = useSelector(SelectAllEvents);
    const sortedEvents = [...allEvents]; // Makes a copy of all events so we're not mutating anything in the state with "sort()"

    sortedEvents.sort((a, b) => Number(a.date)-Number(b.date));  // Now we have "sortedEvents" to use, which is an array in date order

    return (
        sortedEvents.map((event) => {
            const displayTime = event.date.toLocaleTimeString('en-us', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit'});
            
            if ((new Date()) < event.date) {
                return <Card key={event.id}>
                    <CardBody>
                        <CardTitle className='eventcardTitle bg-primary text-light display-6'>{event.title}</CardTitle>
                        <CardSubtitle className='eventcardSubtitle bg-primary text-light display-'>{displayTime}</CardSubtitle>
                        <CardText className='eventcardText bg-light'>{event.description}</CardText>
                    </CardBody>
                </Card>
            }
        })
        
    )
};


export default EventList;