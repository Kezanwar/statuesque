import React from 'react'
import './TalentlessFool.css'
import Carousel from '../../../../UI/Carousel/Carousel'
import CarouselItem from '../../../../UI/Carousel/CarouselItem'
import CarouselControlBox from '../../../../UI/Carousel/CarouselControlBox'
import CarouselTitleBox from '../../../../UI/Carousel/CarouselTitleBox'

const talentlessFool = {
    name: 'Talentless Fool',
    instagram: 'https://www.instagram.com/talentless.fool/?hl=en',
}

const controlBoxWithTitle = <CarouselControlBox>
    <a rel='noreferrer' target={'_blank'} href={talentlessFool.instagram} >
        <CarouselTitleBox>{talentlessFool.name}</CarouselTitleBox>
    </a>
</CarouselControlBox>


export function TalentlessFoolOne() {
    return (
        <Carousel>
            <a rel='noreferrer' target={'_blank'} href={talentlessFool.instagram}>
                <CarouselItem classes={'talentlessFool one'} >

                </CarouselItem>
            </a>
            {controlBoxWithTitle}
        </Carousel>
    )
}

export function TalentlessFoolTwo() {
    return (
        <Carousel>
            <a rel='noreferrer' target={'_blank'} href={talentlessFool.instagram}>
                <CarouselItem classes={'talentlessFool two'} >

                </CarouselItem>
            </a>
            {controlBoxWithTitle}
        </Carousel>
    )
}

export function TalentlessFoolThree() {
    return (
        <Carousel>
            <a rel='noreferrer' target={'_blank'} href={talentlessFool.instagram}>
                <CarouselItem classes={'talentlessFool three'} >

                </CarouselItem>
            </a>
            {controlBoxWithTitle}
        </Carousel>
    )
}


