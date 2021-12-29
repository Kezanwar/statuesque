import React from 'react'
import './ThirdSection.css'
import FadeSection from '../../../UI/FadeSection/FadeSection'
import { TalentlessFoolOne, TalentlessFoolTwo, TalentlessFoolThree } from './talentlessFool/TalentlessFool'


function ThirdSection() {

    return (
        <FadeSection classes={'ThirdSection'} key={'ThirdSection'}>
            <div className='first__placeholder' >
                <TalentlessFoolOne />
            </div>
            <div className='second__placeholder'>
                <TalentlessFoolTwo />
            </div>
            <div className='third__placeholder'>
                <TalentlessFoolThree />
            </div>

        </FadeSection>
    )
}

export default ThirdSection
