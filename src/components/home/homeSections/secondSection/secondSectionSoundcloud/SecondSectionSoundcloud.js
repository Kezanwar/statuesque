import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './SecondSectionSoundcloud.css'
import CarouselTitleBox from '../../../../UI/Carousel/CarouselTitleBox'

function SecondSectionSoundcloud() {

    const author = {
        name: 'Tour-Mauborg',
        title: "What Cha Gonna Do With My Lovin' (Tour-Maubourg Rework)",
        facebook: 'https://www.facebook.com/tourmaubourgofficial/',
        soundcloud: 'https://soundcloud.com/tour-maubourg'
    }

    return (
        <div className='SecondSectionSoundcloud'>
            <ReactPlayer width={'100%'} height={'300px'} url='https://soundcloud.com/limonadierofficial/premiere-tour-maubourg' />
            <CarouselTitleBox>Artist: <span>{author.name}</span></CarouselTitleBox>
            <CarouselTitleBox>Title: <span>{author.title}</span> </CarouselTitleBox>
            <CarouselTitleBox>Follow: <span><a target={'_blank'} rel='noreferrer' href={author.facebook}>facebook</a>, <a target={'_blank'} rel='noreferrer' href={author.soundcloud}>soundcloud</a></span> </CarouselTitleBox>
        </div >
    )
}

export default SecondSectionSoundcloud
