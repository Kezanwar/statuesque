import React, { useState } from 'react'
import './UnsplashCarousel.css'
import portugeseGravityImg from '../../../../../images/portuguese-gravity.jpg'
import annieSprattImg from '../../../../../images/annie-spratt.jpg'
import Carousel from '../../../../UI/Carousel/Carousel'
import CarouselItem from '../../../../UI/Carousel/CarouselItem'
import CarouselTitleBox from '../../../../UI/Carousel/CarouselTitleBox'
import CarouselControlBox from '../../../../UI/Carousel/CarouselControlBox'
import CarouselControlButtons from '../../../../UI/Carousel/CarouselControlButtons'

const authorArray = [
    {
        name: 'Portugese Gravity',
        unsplashURL: 'https://unsplash.com/photos/kCqwMM2DDnY',
        localImage: portugeseGravityImg
    },
    {
        name: 'Annie Spratt',
        unsplashURL: 'https://unsplash.com/photos/bf4Ocun5JnM',
        localImage: annieSprattImg
    }
]


function UnsplashCarouselItem1() {
    return (
        <a href={authorArray[0].unsplashURL} rel='noreferrer' target={'_blank'}>
            <CarouselItem classes={'UnsplashCarouselItem1 fade'} />
        </a>
    )
}

function UnsplashCarouselItem2() {
    return (
        <a href={authorArray[1].unsplashURL} rel='noreferrer' target={'_blank'}>
            <CarouselItem classes={'UnsplashCarouselItem2 fade'} />
        </a>
    )
}

function UnsplashCarousel() {

    const [carouselCount, setCarouselCount] = useState(0);

    const carouselControlHandler = (e) => {
        setCarouselCount(parseInt(e.target.value));
    }

    const carouselArray = [<UnsplashCarouselItem1 />, <UnsplashCarouselItem2 />]

    return (
        <Carousel classes='BrandCarousel'>

            {carouselArray[carouselCount]}

            <CarouselControlBox>
                <a rel='noreferrer' target={'_blank'} href={authorArray[carouselCount].unsplashURL}><CarouselTitleBox >Unsplash: {authorArray[carouselCount].name}</CarouselTitleBox></a>
                <CarouselControlButtons>
                    <button className={carouselCount == 0 ? 'buttonFill' : ''} key={'unsplashCarouselBtn1'} onClick={carouselControlHandler} value={'0'}></button>
                    <button className={carouselCount == 1 ? 'buttonFill' : ''} key={'unsplashCarouselBtn2'} onClick={carouselControlHandler} value={'1'} ></button>
                </CarouselControlButtons>
            </CarouselControlBox>

        </Carousel >
    )
}

export default UnsplashCarousel
