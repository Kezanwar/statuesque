import React from 'react'
import './SecondSection.css'
import SecondSectionSoundcloud from './secondSectionSoundcloud/SecondSectionSoundcloud'
import GarnerCarousel from './garner/GarnerCarousel'


function SecondSection() {

    return (
        <div className='SecondSection'>
            <div className='soundcloud__placeholder' >
                <SecondSectionSoundcloud />
            </div>

            <div className='garner__placeholder' >
                <GarnerCarousel />
            </div>
        </div>
    )
}

export default SecondSection
