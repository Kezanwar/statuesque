import React from 'react'
import './SecondSection.css'
import FadeSection from '../../../UI/FadeSection/FadeSection'
import SecondSectionSoundcloud from './secondSectionSoundcloud/SecondSectionSoundcloud'
import GarnerCarousel from './garner/GarnerCarousel'


function SecondSection() {

    return (
        <FadeSection classes={'SecondSection'} key={'SecondSection'}>
            <div className='soundcloud__placeholder' >
                <SecondSectionSoundcloud />
            </div>

            <div className='garner__placeholder' >
                <GarnerCarousel />
            </div>
        </FadeSection>
    )
}

export default SecondSection
