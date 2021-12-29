import React from 'react';
import './Carousel.css';

function CarouselControlButtons({ children }) {
    return (
        <div className='CarouselControlButtons'>
            {children}
        </div>
    )
}

export default CarouselControlButtons
