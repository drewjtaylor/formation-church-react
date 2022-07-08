import MainCarousel from "../Components/MainCarousel";
import CardImgRight from "../Components/CardImgRight";
import CardImgLeft from "../Components/CardImgLeft";
import crossGreaterThan from '../img/cross-greater-than.png'
import colorTampa from '../img/assist-tampa-600x401.jpg';

const HomePage = () => {
    const firstCard = {
        imageSrc: crossGreaterThan,
        imageAlt: 'The cross is greater',
        headerContent: 'Christ-centered in what we do.',
        textContent: 'Community-focused in how we do it.',
    }

    const secondCard = {
        imageSrc: colorTampa,
        imageAlt: 'tampa bay',
        headerContent: '',
        textContent: 'If you live in the St. Petersburg/Tampa Bay area, (or you\'re just visiting), we would love for you to come join us.',
    }

    const thirdCard = {
        imageSrc: '',
        imageAlt: '',
        headerContent: '',
        textContent: '',
    }

    sal();

    return (
        <>
            <MainCarousel />
            <CardImgLeft cardInfo={firstCard}/>
            <CardImgRight cardInfo={secondCard} />
            <CardImgLeft cardInfo={thirdCard} />
        </>
    )
};

export default HomePage;