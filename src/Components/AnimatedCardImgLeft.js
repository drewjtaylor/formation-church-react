import { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedCardImgLeft = ({cardInfo}) => {
    // Card takes an object with these properties as prop
    const {imageSrc, imageAlt, headerContent, textContent} = cardInfo;

    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        config: { duration: 1000 }
    });
    
    useEffect(() => {
        setToggle(true);
    }, [])

    if (imageSrc) {
        return <animated.div style={animatedStyle}>
            <Container className='pt-5'>
                <Row className='align-items-center'>
                    <Col xs='12' lg='4'>
                        <img src={imageSrc} alt={imageAlt} className='img-fluid'/>
                    </Col>
                    <Col>
                        <Row><h3 className='style-font'>{headerContent}</h3></Row>
                        <Row><h4>{textContent}</h4></Row>
                    </Col>
                </Row>
            </Container>
        </animated.div>
    }
    
    return <Container className='pt-5'>
                <Row><h3 className='style-font text-center'>{headerContent}</h3></Row>
                <Row><h4>{textContent}</h4></Row>
    </Container>
};

export default AnimatedCardImgLeft;