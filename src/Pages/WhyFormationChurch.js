import { Container } from 'reactstrap';
import CardImgLeft from '../Components/CardImgLeft';
import CardImgRight from '../Components/CardImgRight';

const WhyFormationChurchPage = () => {
    const firstCard = {
        imageSrc: 'https://images.immediate.co.uk/production/volatile/sites/4/2019/05/GettyImages-183804593-c-864606f.jpg?resize=960,413?quality=90&webp=true&crop=4px,23px,933px,401px&resize=940,400',
        imageAlt: 'A woman scratching her head',
        headerContent: '"Formation Church" is a weird name.',
        textContent: 'There are a lot of churches with names like "Renew Church," or "Hope Church." Every town has a "First Baptist Church" (although no one really knows who was first.) So why did we pick "Formation Church?" It doesn\'t flow in regular speech. Some people might be confused becuase we\'re not associated with reformed theology. It\'s not as flashy as some church names, and you can\'t learn much about our beliefs from just our title.'
    }

    const secondCard = {
        imageSrc: 'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202152/0443/img2z.jpg',
        imageAlt: 'A vase',
        headerContent: '"Formation" implies that something was made as a result of an act of creation.',
        textContent: 'It also implies care in how we\'re created, like an artist forming clay. The idea of being "formed" also impliesa purpose to the shape. Whether it\'s how we sing, what we preach, how we meet as a community, or how we serve our extended community, we want the way we do things to be purposeful in a way that honors God.'
    }
    
    const thirdCard = {
        headerContent: 'Lastly we are "Formation Church" because we want to form a community.',
        textContent: 'Coalitions, nations, policital parties (and mobs, although that\'s not what we\'re going for) are all "formed." We chose the name "Formation Church" because we recognize the church is also a group, and we want to be formed in the image of Christ as a community.'
    }
    return <Container>
        <CardImgLeft cardInfo={firstCard} />
        <h1 className='style-font text-center mt-5'>So why "Formation Church?"</h1>
        <CardImgRight cardInfo={secondCard}/>
    </Container>
}

export default WhyFormationChurchPage;