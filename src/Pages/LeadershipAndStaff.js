import { Container, Col, Row } from 'reactstrap';
import riningers from '../img/assist-Rininger-Family-2-800x600.jpg';
import ipsumFamily from '../img/Family-Shelter-Silhouette.png'



const LeadershipAndStaffPage = () => {
    return (
        <Container className='mt-3'>
            <h1 className="style-font text-center mb-4">Meet our staff!</h1>
            <Row>
                <Col xs='12' lg='4'>
                    <img className='img-fluid' src={riningers} alt="Wade and Anna Rininger with their 4 children" />
                </Col>
                <Col>
                    <h3>Wade & Anna Rininger</h3>
                    <p><b>Married: </b><span >14 years</span></p>
                    <p><b>Children: </b><span >Emery 11, Elliot 9, Elias 4, Evaleen 3</span></p>
                    <p><b>Ministry:</b><span > We have been in ministry for all 14 years of our marriage and participated in three different church pants/campus starts. Have worked in PA, FL, and Canada! I’ve worked as a Pastor and Anna has been a school teacher by day, a Children’s Ministry Director by weekend and a super mom 24/7.</span></p>
                    <p><b>Background: </b><span >Anna was born and raised in St Pete and I lived in Tampa Bay intermittently, attending middle and high school in the area.</span></p>
                    <p><b>Interests:</b><span > Love Tampa Bay & the St Petersburg area. Love the beach & being outdoors. Love exploring the city and meeting new people. Love church planting!</span></p>
                    <p><b>Assist Church Expansion:</b><span > Assist Church Expansion (or "Assist" for short,) is a ministry whose goal is to build up churches that need help and to establish new churches. Formed church began through assistance from Assist, and they continue to be a source of support. </span></p>
                </Col>
            </Row>
            <hr />
            <Row className='mt-3'>
                <Col  xs='12' lg='4' className='order-lg-last'>
                    <img className='img-fluid' src={ipsumFamily} alt='A mother and father making a bridge over their children'/>
                </Col>
                <Col>
                    <h3 >John & Jane Lorem-Ipsum</h3>
                    <p><b>Married: </b><span >10 years</span></p>
                    <p><b>Children: </b><span >Joseph & Alana</span></p>
                    <p><b>Ministry:</b><span > This lovely shadow family is interested in beautifying my staff page for as long as it takes to get a new picture of the real people who are helping Wade. </span></p>
                    <p><b>Background: </b><span > Shadow-family has lived on the internet for an indeterminate amount of time. They are hoping to retire soon after only a few short weeks. </span></p>
                    <p><b>Interests:</b><span > Zebras, pandas, dominoes, snoopy, chess, newspapers (except Sunday edition), and Othello.</span></p>
                </Col>
            </Row>
            
        </Container>
    )
}


export default LeadershipAndStaffPage;