import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import './carouselB.css';

const CarouselB = () => {
    return (
        <Carousel>
            <Carousel.Item className="carousel">
                <img className="w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item className="carousel">
                <img className="w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item className="carousel">
                <img className="w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselB;
