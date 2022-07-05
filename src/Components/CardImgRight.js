import {Container, Row, Col} from 'reactstrap';

const CardImgRight = ({cardInfo}) => {
    const {imageSrc, imageAlt, headerContent, textContent} = cardInfo;
    
    if (imageSrc) {
        return <Container className='pt-5'>
            <Row className='align-items-center'>
                <Col>
                    <Row><h3 className='style-font'>{headerContent}</h3></Row>
                    <Row><h4>{textContent}</h4></Row>
                </Col>
                <Col xs='12' lg='4'>
                    <img src={imageSrc} alt={imageAlt} className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    }
    
    return <Container className='pt-5'>
                <Row><h3 className='style-font text-center'>{headerContent}</h3></Row>
                <Row><h4 className='text-center'>{textContent}</h4></Row>
    </Container>
};

export default CardImgRight;