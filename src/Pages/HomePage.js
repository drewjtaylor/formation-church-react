import MainCarousel from "../Components/MainCarousel";
import CardImgRight from "../Components/CardImgRight";
import CardImgLeft from "../Components/CardImgLeft";
import crossGreaterThan from '../img/cross-greater-than.png'
import colorTampa from '../img/assist-tampa-600x401.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        Aos.init({});
    }, [])
    
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

    return (
        <>
            <MainCarousel />
            <div data-aos="fade-up" data-aos-offset='500'>
                <CardImgLeft cardInfo={firstCard}/>
            </div>
            <div data-aos="fade-up"  data-aos-offset='500'>
                <CardImgRight cardInfo={secondCard} />
            </div>
            <div data-aos="fade-up"  data-aos-offset='500'>
                <CardImgLeft cardInfo={thirdCard} />
            </div>
        </>
    )
};

export default HomePage;