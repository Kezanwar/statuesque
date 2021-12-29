import React, { useState, useRef, useEffect } from 'react'
import './GarnerCarousel.css'
import Carousel from '../../../../UI/Carousel/Carousel'
import CarouselItem from '../../../../UI/Carousel/CarouselItem'
import CarouselTitleBox from '../../../../UI/Carousel/CarouselTitleBox'
import CarouselControlBox from '../../../../UI/Carousel/CarouselControlBox'
import CarouselControlButtons from '../../../../UI/Carousel/CarouselControlButtons'

const garner = {

}

function GarnerCarouselItem1() {
    return (
        <CarouselItem classes={'GarnerCarouselItem1 fadeDown'}>
            <div className='garner-logobox'>
                <h2>GARNER</h2>
                <p>: to gather / to collect</p>
            </div>

            <p className='garner-description'>we want to showcase a collection of <span>beautiful menswear,</span> made by small to medium sized brands from across the globe.</p>
        </CarouselItem >
    )
}


function GarnerCarouselItem2() {
    return (
        < CarouselItem classes={'GarnerCarouselItem1 fadeDown'} >
            <h2>creativity</h2>
            <h2>&</h2>
            <h2></h2>
        </CarouselItem >
    )
}


function GarnerCarouselItem3() {
    return (
        < CarouselItem classes={'GarnerCarouselItem1 fadeDown'} >
            <h2>expression-</h2>
            <h2>ism</h2>
        </CarouselItem >
    )
}

function GarnerCarousel() {

    const [carouselCount, setCarouselCount] = useState(0);

    const carouselControlHandler = (e) => {
        setCarouselCount(parseInt(e.target.value));
    }

    // useEffect(() => {
    //     const brandInterval = setInterval(() => {

    //         if (carouselCount === 2) {
    //             setCarouselCount(0);
    //         }

    //         else {
    //             setCarouselCount(prev => prev + 1);
    //         }

    //         console.log(carouselCount)

    //     }, 5000)

    //     return (() => {
    //         clearInterval(brandInterval);
    //     })

    // }, [carouselCount])

    const carouselArray = [<GarnerCarouselItem1 />, <GarnerCarouselItem1 />, <GarnerCarouselItem1 />]

    return (
        <Carousel classes='GarnerCarousel'>

            {carouselArray[carouselCount]}

            <CarouselControlBox>
                <CarouselTitleBox >Garner</CarouselTitleBox>
                <CarouselControlButtons>
                    <button className={carouselCount == 0 ? 'buttonFill' : ''} key={'brandCarouselBtn1'} onClick={carouselControlHandler} value={'0'}></button>
                    <button className={carouselCount == 1 ? 'buttonFill' : ''} key={'brandCarouselBtn2'} onClick={carouselControlHandler} value={'1'} ></button>
                    <button className={carouselCount == 2 ? 'buttonFill' : ''} key={'brandCarouselBtn3'} onClick={carouselControlHandler} value={'2'} ></button>
                </CarouselControlButtons>
            </CarouselControlBox>

        </Carousel>
    )
}

export default GarnerCarousel
