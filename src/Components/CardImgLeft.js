import {Container, Row, Col} from 'reactstrap';

const CardImgLeft = ({cardInfo}) => {
    const {imageSrc, imageAlt, headerContent, textContent} = cardInfo;
    
    if (imageSrc) {
        return <Container className='pt-5'>
            <Row className='align-items-center'>
                <Col xs='3'>
                    <img src={imageSrc} alt={imageAlt} className='img-fluid'/>
                </Col>
                <Col xs='9'>
                    <Row><h3 className='style-font'>{headerContent}</h3></Row>
                    <Row><h4 className='style-font'>{textContent}</h4></Row>
                </Col>
            </Row>
        </Container>
    }
    
    return <Container className='pt-5'>
                <Row><h3 className='style-font text-center'>{headerContent}</h3></Row>
                <Row><h4 className='style-font text-center'>{textContent}</h4></Row>
    </Container>
};

export default CardImgLeft;