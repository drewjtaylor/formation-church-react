import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';

const EventList = ({events}) => {
    return (
        events.map((event) => {
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