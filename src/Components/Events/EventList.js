import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import { SelectAllEvents } from './eventSlice';
import { useSelector } from 'react-redux';


const EventList = () => {  
    const allEvents = useSelector(SelectAllEvents);

    return (
        allEvents.map((event) => {
            const displayDate = event.date.toDateString();
            const stringDisplayTime = event.date.toLocaleTimeString();
            const displayTime = `${stringDisplayTime.slice(0, 5)} ${stringDisplayTime.slice(stringDisplayTime-2)}`

            return <Card key={event.id}>
                <CardBody>
                    <CardTitle className='eventcardTitle bg-primary text-light display-6'>{event.title}</CardTitle>
                    <CardSubtitle className='eventcardSubtitle bg-primary text-light display-'>{displayDate}, {displayTime}</CardSubtitle>
                    <CardText className='eventcardText bg-light'>{event.description}</CardText>
                </CardBody>
            </Card>
        })
    )
};


export default EventList;