import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import { eventsReducer, SelectAllEvents } from './eventSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const EventList = () => {  
    const allEvents = useSelector(SelectAllEvents);
    const sortedEvents = [...allEvents]; //Makes a copy of all events so we're not mutating it with "sort()"

    sortedEvents.sort((a, b) => Number(a.date)-Number(b.date));  // Now we have "sortedEvents" to use which are in order




    return (
        allEvents.map((event) => {
            const displayDate = event.date.toDateString();
            const displayTime = event.date.toLocaleTimeString('en-us', {hour: '2-digit', minute:'2-digit'});
            if ((new Date()) < event.date) {  // Only renders if the date is in the future
                return <Card key={event.id}>
                    <CardBody>
                        <CardTitle className='eventcardTitle bg-primary text-light display-6'>{event.title}</CardTitle>
                        <CardSubtitle className='eventcardSubtitle bg-primary text-light display-'>{displayDate}, {displayTime}</CardSubtitle>
                        <CardText className='eventcardText bg-light'>{event.description}</CardText>
                    </CardBody>
                </Card>
            }

        })
    )
};


export default EventList;