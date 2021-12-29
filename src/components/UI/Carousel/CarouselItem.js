import React from 'react'
import './Carousel.css'

function CarouselItem({ classes, children }) {


    return (
        <div className={'CarouselItem ' + classes}>
            {children}
        </div>
    )
}

export default CarouselItem
