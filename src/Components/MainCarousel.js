import { Carousel } from "react-bootstrap";
import slideOne from '../img/black_and_white_worship.jpg';
import slideTwo from '../img/Sunrise.jpg';
import slideThree from '../img/formation-church-neighborhood.jpg';


const MainCarousel = () => {

    return (
        <>
            <Carousel fade controls={false} interval={4000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideTwo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slideThree}
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </>
    )














    // return (
    //     <>
    //         <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel" data-wrap="true" data-interval="1000" data-pause="false">
    //             <div className="carousel-inner">
    //                 <div className="carousel-item active">
    //                     <img className="d-block w-100" src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/291653240_114268724656707_1400745410570105918_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=pwr5g92XTHUAX9rvtvQ&_nc_oc=AQndc6ioxWzPI3hb5QycIanPvsc9iQw-ZUHy4TD7JKxdroJfi5fcdGQw993e2rU6G5s&tn=uHFjKCK-A8L7ouvr&_nc_ht=scontent-atl3-2.xx&oh=00_AT-cTW9eJDRC4eTEbh4Lnxd4jHvjuE67ijc6t-7NqxSK_g&oe=62C3C921" alt="abstract blocks in the shape of an F" />
    //                 </div>
    //                 <div className="carousel-item">
    //                     <img className="d-block w-100" src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/291181354_113973518019561_770781684791301227_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=bt2xFlYjH1QAX_SJh3o&tn=uHFjKCK-A8L7ouvr&_nc_ht=scontent-atl3-2.xx&oh=00_AT9Zl6puYaJK_Dj337-Wyi-INtJYNwX7WY7OwFknJOatvQ&oe=62C3D214" alt="painted sign that says love your neighborhood" />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
};

export default MainCarousel;