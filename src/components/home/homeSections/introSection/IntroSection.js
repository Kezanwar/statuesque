import React from 'react'
import './IntroSection.css'
import FadeSection from '../../../UI/FadeSection/FadeSection'
import BrandCarousel from './brandCarousel/BrandCarousel'
import UnsplashCarousel from './unsplashCarousel/UnsplashCarousel'

function IntroSection() {

    return (
        <FadeSection classes={'IntroSection'} key={'IntroSection'}>
            <div className='placeholder__blog1' >
                <UnsplashCarousel key={'IntoUnsplashCarousel'} />
            </div>

            <div className='placeholder__blog2' >
                <BrandCarousel key={'IntrobrandCarousel'} />
            </div>
        </FadeSection>
    )
}

export default IntroSection
