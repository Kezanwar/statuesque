import React from 'react'
import './IntroSection.css'
import BrandCarousel from './brandCarousel/BrandCarousel'
import UnsplashCarousel from './unsplashCarousel/UnsplashCarousel'

function IntroSection() {

    return (
        <div className='IntroSection'>
            <div className='placeholder__blog1' >
                <UnsplashCarousel key={'IntoUnsplashCarousel'} />
            </div>

            <div className='placeholder__blog2' >
                <BrandCarousel key={'IntrobrandCarousel'} />
            </div>
        </div>
    )
}

export default IntroSection
