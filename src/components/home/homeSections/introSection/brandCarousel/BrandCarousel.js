import React, { useState, useEffect } from 'react'
import './BrandCarousel.css'
import Carousel from '../../../../UI/Carousel/Carousel'
import CarouselItem from '../../../../UI/Carousel/CarouselItem'
import CarouselTitleBox from '../../../../UI/Carousel/CarouselTitleBox'
import CarouselControlBox from '../../../../UI/Carousel/CarouselControlBox'
import CarouselControlButtons from '../../../../UI/Carousel/CarouselControlButtons'

function BrandCarouselItem1() {
    return (
        <CarouselItem classes={'BrandCarouselItem1 fadeDown'}>
            <h2 className='orange'>this</h2>
            <h2>is</h2>
        </CarouselItem >
    )
}

function BrandCarouselItem2() {
    return (
        < CarouselItem classes={'BrandCarouselItem1 fadeDown'} >
            <h2>creativity</h2>
            <h2>&</h2>
            <h2></h2>
        </CarouselItem >
    )
}

function BrandCarouselItem3() {
    return (
        < CarouselItem classes={'BrandCarouselItem2 fadeDown'} >
            <h2>expression-</h2>
            <h2>ism</h2>
        </CarouselItem >
    )
}

function BrandCarousel() {

    const [carouselCount, setCarouselCount] = useState(0);

    const carouselControlHandler = (e) => {
        setCarouselCount(parseInt(e.target.value));
    }

    useEffect(() => {
        const brandInterval = setInterval(() => {
            if (carouselCount === 2) {
                setCarouselCount(0);
            }
            else {
                setCarouselCount(prev => prev + 1);
            }
        }, 5000)
        return (() => {
            clearInterval(brandInterval);
        })
    }, [carouselCount])

    const carouselArray = [<BrandCarouselItem1 />, <BrandCarouselItem2 />, <BrandCarouselItem3 />]

    return (
        <Carousel classes='BrandCarousel'>

            {carouselArray[carouselCount]}

            <CarouselControlBox>
                <CarouselTitleBox >statu-esque</CarouselTitleBox>
                <CarouselControlButtons>
                    <button className={carouselCount == 0 ? 'buttonFill' : ''} key={'brandCarouselBtn1'} onClick={carouselControlHandler} value={'0'}></button>
                    <button className={carouselCount == 1 ? 'buttonFill' : ''} key={'brandCarouselBtn2'} onClick={carouselControlHandler} value={'1'} ></button>
                    <button className={carouselCount == 2 ? 'buttonFill' : ''} key={'brandCarouselBtn3'} onClick={carouselControlHandler} value={'2'} ></button>
                </CarouselControlButtons>
            </CarouselControlBox>

        </Carousel>
    )
}

export default BrandCarousel
