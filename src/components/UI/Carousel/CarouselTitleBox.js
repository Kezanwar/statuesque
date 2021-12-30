import React from 'react';
import './Carousel.css';

function CarouselTitleBox({ children, social }) {

    // font-awesome free is a dependecy for social icons to work

    if (social === 'instagram') {

        return (
            <div className='CarouselTitleBox'>
                <i class="fab fa-instagram"></i>{children}
            </div>
        )
    }

    if (social === 'unsplash') {

        return (
            <div className='CarouselTitleBox'>
                <i class="fab fa-unsplash"></i>{children}
            </div>
        )
    }

    if (social === undefined) {
        return (
            <div className='CarouselTitleBox'>
                {children}
            </div>
        )
    }
}

export default CarouselTitleBox
